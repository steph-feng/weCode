export default function Modal({ setShowModal }) {
    const handleClick = () => {
        setShowModal(false);
    }

    return (
        <div className="h-[70vh] w-[70vw] bg-white absolute flex flex-col items-center justify-center">

               <div className="w-[65vw] h-[4vh] bg-[#9DC49F] mt-10 rounded-r-2xl rounded-tl-xl"></div>
                
                <div className="flex flex-row h-full w-full">
                    <div className="w-[4vh] h-[58vh] bg-[#74A376] rounded-b-2xl ml-9"></div>

                    <div className="p-8 h-full w-full">
                        <div>
                            Upload five photos that represent you!
                        </div>
                        <input type="file" multiple id="upload" name="upload" accept="image/jpeg, image/jpg" />
                        <button onClick={handleClick}>get your arc'venture starter pack</button>
                    </div>

                </div>
       
        </div>
    )
}