import "./Modal.css";
import * as tf from '@tensorflow/tfjs';
import * as tmImage from '@teachablemachine/image';

export default function Modal({ setShowModal }) {
    const tmURL = "https://teachablemachine.withgoogle.com/models/3uvWWMlZR/";

    const handleChange = async (e) => {
        setShowModal(false);


        const modelURL = tmURL + "model.json";
        const metadataURL = tmURL + "metadata.json";
        let model = await tmImage.load(modelURL, metadataURL);
        
        let files = e.target.files;
        for (let file of files) {
            let imageUrl = URL.createObjectURL(file);
            let img = new Image();
            img.src = imageUrl;
            const prediction = await model.predict(img);
            console.log(prediction);
        }

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

