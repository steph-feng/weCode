import './LandingPage.css'
import Modal from './Modal'
import { useState } from 'react'

export default function LandingPage( {setLevel} ) {
    const [showModal, setShowModal] = useState(false);
    return (
        <div className="slider h-[100vh]">

            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>
            <div className="slide"></div>

            <div className='placement flex flex-col items-center justify-center'>
                <div className='text flex flex-col items-center justify-center'>
                    <div className='title'>
                        ARC'VENTURE
                    </div>
                    <div className='subtitle'>
                        Explore the West Coast with Arc'teryx
                    </div>
                </div>

                <button className='instructions' onClick={() => setShowModal(true)}>Get Started</button>
                {showModal && <Modal setLevel={setLevel} setShowModal={setShowModal}/>}
            </div>
        </div>
    )
}