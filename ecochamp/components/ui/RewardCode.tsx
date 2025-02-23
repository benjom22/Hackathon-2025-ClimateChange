import React, { useState } from 'react'
import Image from 'next/image'
import Button from './Button'
import Modal from '../layout/Modal'
import QRCode from "react-qr-code";

type RewardCode = {
    partnerLogo?: string;
    rewardName?: string;
    rewardDescription?: string;
    onClick?: () => void;
    className?: string;
    qrCode?: string;
    isValid?: string;
}

const RewardCode:React.FC<RewardCode> = ({onClick, className, partnerLogo, rewardDescription, rewardName, qrCode, isValid = false}) => {
    const [codeOpened, setCodeOpened] = useState(false);

    const openCode = () => {
        setCodeOpened(true);
    }
    return (
        <div className='relative'>
            <span className={`text-white text-3xl font-bold absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-xl z-10 bg-forestGreen-700 p-3 text-center ${!isValid ? 'flex' : 'hidden'}`}>Not valid anymore</span>
            <div className={`bg-white rounded-2xl flex gap-y-4 gap-x-7 items-center px-6 sm:px-7 py-5 sm:py-6 flex-wrap relative ${!isValid ? 'opacity-30 pointer-events-none select-none' : ''}`}>
                <Image src={partnerLogo} width={100} height={100} className='h-10 object-contain w-fit' alt="Partner Logo"/>
                <div className="flex flex-col">
                    <span className='font-bold text-[1.75rem] text-forestGreen-700'>{rewardName}</span>
                    <p className='text-base text-forestGreen-500 font-medium'>{rewardDescription}</p>
                </div>
                <Button onClick={openCode} className='min-w-fit'>Check Code</Button>
                <Modal
                    isModalOpen={codeOpened}
                    closeModal={() => setCodeOpened(false)}
                >
                    <div className="flex flex-col gap-4 items-center">
                    <span className="text-forestGreen-700 font-bold text-[1.75rem] sm:text-[2rem] text-center leading-[120%]">Your Code</span>
                        <div style={{ height: "auto", margin: "0 auto", maxWidth: 200, width: "100%" }}>
                            <QRCode
                                size={256}
                                style={{ height: "auto", maxWidth: "100%", width: "100%" }}
                                value={qrCode}
                                viewBox={`0 0 256 256`}
                            />
                        </div>
                    </div>
                </Modal>
            </div>
        </div>
  )
}

export default RewardCode