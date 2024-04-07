import "./Modal.css"

export default function Modal({ setShowModal }) {
    const handleClick = () => {
        setShowModal(false);
    }

    return (
        <div className="h-[70vh] w-[70vw] bg-white absolute">

            <div className="w-[67vw] h-[4vh] bg-[#9DC49F] absolute ml-5 mt-10 rounded-2xl"></div>
            <div className="w-[4vh] h-[65vh] bg-[#74A376] absolute ml-12 mt-5 rounded-2xl"></div>

            <div className="absolute mt-28 ml-28 ">
                <div className="flex flex-col items-center justify-center">
                    <div className="title">
                        you, but in five photos
                    </div>
                    <input type="file" multiple id="upload" name="upload" accept="image/jpeg, image/jpg"
                        className="mt-8"
                    />
                </div>

                <button className="bg-[#C2DEC4]" onClick={handleClick}>
                    get your arc'venture starter pack
                </button>
            </div>

        </div>
    )
}

