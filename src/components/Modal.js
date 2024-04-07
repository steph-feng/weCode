import "./Modal.css";
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import treeGif from '../assets/images/treeGrowing.gif';
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Modal({ setLevel, setShowModal }) {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const tmURL = "https://teachablemachine.withgoogle.com/models/3uvWWMlZR/";

    const handleChange = async (e) => {
        setLoading(true);

        const modelURL = tmURL + "model.json";
        const metadataURL = tmURL + "metadata.json";
        let model = await tmImage.load(modelURL, metadataURL);

        let files = e.target.files;

        let totalProbabilities = {
            'Indoor': 0,
            'Nature': 0,
            'City': 0,
        };

        const processFile = async (file) => {
            const imageUrl = URL.createObjectURL(file);
            const img = new Image();
            img.src = imageUrl;

            await new Promise((resolve, reject) => {
                img.onload = async () => {
                    await tf.nextFrame();
                    const prediction = await model.predict(img);

                    // Update the total probabilities
                    prediction.forEach(pred => {
                        totalProbabilities[pred.className] += pred.probability;
                    });

                    resolve();
                };
                img.onerror = reject;
            });
        };

        for (const file of files) {
            await processFile(file); // Ensure processing happens sequentially
        }

        // After processing all files, find the dominant class
        const dominantClass = Object.keys(totalProbabilities).reduce((a, b) => totalProbabilities[a] > totalProbabilities[b] ? a : b);

        console.log("Dominant:", dominantClass);

        if (dominantClass === "Nature") {
            setLevel(3);
        } else if (dominantClass === "City") {
            setLevel(2);
        } else {
            setLevel(1);
        }

        setLoading(false);
        setShowModal(false);
        navigate("/starter-pack");
    }

    if (loading) {
        return (
            <div className="h-[80vh] w-[80vw] bg-[#fbffff] absolute flex flex-col justify-center items-center rounded-2xl drop-shadow">
                <img src={treeGif} alt="loadng gif"/>
                <div className="my-font">Calculating your ARC'VENTURE level.</div>
            </div>
        )
    }

    return (
        <div className="h-[80vh] w-[80vw] bg-white absolute rounded-2xl drop-shadow background flex flex-col items-center justify-center">
            <div className="modal-title text-white">
                YOU, BUT IN PHOTOS
            </div>
            <div className="text-white mt-2">UPLOAD 3-5 PHOTOS OF YOU DOING WHAT YOU LOVE</div>

            <label htmlFor="customUpload" className="custom-upload font-bold">UPLOAD</label>
            <input type="file" multiple id="customUpload" name="customUpload" accept="image/jpeg, image/jpg" className="upload"
                onChange={handleChange}
            />
        </div>
    )
}