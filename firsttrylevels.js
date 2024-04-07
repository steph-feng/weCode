import "./Modal.css";
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';
import React, { useState } from 'react';

export default function Modal({ setShowModal }) {
    const [indoorTotal, setIndoorTotal] = useState(0);
    const [natureTotal, setNatureTotal] = useState(0);
    const [cityTotal, setCityTotal] = useState(0);

    const tmURL = "https://teachablemachine.withgoogle.com/models/3uvWWMlZR/";

    const handleChange = async (e) => {
        setShowModal(false);

        const modelURL = tmURL + "model.json";
        const metadataURL = tmURL + "metadata.json";
        let model = await tmImage.load(modelURL, metadataURL);
        
        let files = e.target.files;
        for (let file of files) {
            const imageUrl = URL.createObjectURL(file);
            const img = new Image();
            img.src = imageUrl;

            img.onload = async () => {
                await tf.nextFrame();
                const prediction = await model.predict(img);
                console.log(prediction);
                updateTotals(prediction);
            };

        }

        const max = Math.max(indoorTotal, natureTotal, cityTotal);
        if (max === indoorTotal) {
            console.log("Dominant: Indoor");
        } else if (max === natureTotal) {
            console.log("Dominant: Nature");
        } else if (max === cityTotal) {
            console.log("Dominant: City");
        }

    }

    const updateTotals = (prediction) => {
        // Assuming prediction is an array of objects with className and probability
        prediction.forEach(pred => {
            switch (pred.className) {
                case 'Indoor':
                    setIndoorTotal(prevTotal => prevTotal + pred.probability);
                    break;
                case 'Nature':
                    setNatureTotal(prevTotal => prevTotal + pred.probability);
                    break;
                case 'City':
                    setCityTotal(prevTotal => prevTotal + pred.probability);
                    break;
                default:
                    // Handle unexpected class name
                    console.error('ERROR: Unknown class --> ', pred.className);
            }
        });
    };

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