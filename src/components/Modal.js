import "./Modal.css";
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
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

        //let predictions = [];

        const processFile = async (file) => {
            const imageUrl = URL.createObjectURL(file);
            const img = new Image();
            img.src = imageUrl;
    
            await new Promise((resolve, reject) => {
                img.onload = async () => {
                    await tf.nextFrame();
                    const prediction = await model.predict(img);
                    //predictions.push(prediction);
    
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
        return <div className="h-[70vh] w-[70vw] bg-white absolute">loading</div>
    }

    return (
        <div className="h-[70vh] w-[70vw] bg-white absolute">

            <div className="w-[67vw] h-[4vh] bg-[#9DC49F] absolute ml-5 mt-10 rounded-2xl"></div>
            <div className="w-[4vh] h-[65vh] bg-[#74A376] absolute ml-12 mt-5 rounded-2xl"></div>

            <div className="flex flex-col mt-52 ">
                <div className="flex flex-col items-center justify-center">
                    <div className="modalTitle">
                        you, but in five photos
                    </div>

                    <label htmlFor="customUpload" className="custom-upload">
                        upload
                    </label>
                    <input type="file" multiple id="customUpload" name="customUpload" accept="image/jpeg, image/jpg" className="upload"
                        onChange={handleChange}
                    />
                </div>
            </div>

        </div>
    )
}