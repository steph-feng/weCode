import "./Modal.css"

export default function Modal({ setShowModal }) {

    const handleChange = () => {
        console.log("changed")
        setShowModal(false);
    }

    return (
        <div className="h-[70vh] w-[70vw] bg-white absolute">

            <div className="w-[67vw] h-[4vh] bg-[#9DC49F] absolute ml-5 mt-10 rounded-2xl"></div>
            <div className="w-[4vh] h-[65vh] bg-[#74A376] absolute ml-12 mt-5 rounded-2xl"></div>

            <div className="flex flex-col mt-52 ">
                <div className="flex flex-col items-center justify-center">
                    <div className="title">
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

