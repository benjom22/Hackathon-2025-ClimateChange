import React from 'react'
import Button from '../ui/Button';

type ModalProps = {
    children: React.ReactNode;
    isModalOpen: boolean;
    closeModal: () => void;
    acceptModal?: () => void;
};

const Modal:React.FC<ModalProps> = ({children, isModalOpen, closeModal, acceptModal}) => {
  const callBothFunction = () => {
    closeModal();
    if(acceptModal) acceptModal();
  }
  return (
    <div className={`bg-forestGreen-900/90 backdrop-blur-md fixed w-full min-h-screen left-0 top-0 items-center justify-center px-7 z-20 ${isModalOpen ? 'flex' : 'hidden'}`}>
        <div className="flex flex-col gap-12 p-7 rounded-[1.75rem] bg-earthGreen-50 w-full max-w-[400px]">
            {children}
            <div className="flex gap-5">
              {acceptModal &&
              <Button onClick={callBothFunction} className='w-full' style='primary'>Yes</Button>
              }
              <Button onClick={closeModal} className='w-full' style='secondary'>Close</Button>
            </div>
        </div>
    </div>
  )
}

export default Modal