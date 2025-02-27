import React, { useState } from 'react'
import Button from './Button';
import Image from 'next/image';
import Modal from '../layout/Modal';

type RewardProps = {
  onClick?: () => void;
  partnerLogo?: string;
  rewardName?: string;
  rewardDescription?: string;
  pointsNeeded?: string;
  rewardId?: string;
};

const Reward:React.FC<RewardProps> = ({onClick, partnerLogo, rewardDescription, rewardName, pointsNeeded, rewardId}) => {
  const [rewardNotfModal, setRewardNotffModal] = useState(false);
  const [rewardSuccess, setRewardSuccess] = useState(false);
  const [selectedReward, setSelectedReward] = useState(null);

  const StartRewardNotf = (id: int) => {
    setSelectedReward(id);
    setRewardNotffModal(true);
  }

  const GetThisReward = () => {
    setRewardSuccess(true);
  }

  return (
    <div className="flex flex-col gap-2">
        <div className="bg-white p-6 rounded-[1.25rem] flex flex-col gap-7">
            <Image alt='Partner Logo' width={80} height={80} src={partnerLogo} className='h-10 object-contain' />
            <div className="flex flex-col">
                <span className='font-bold text-[1.75rem] text-forestGreen-700'>{rewardName}</span>
                <p className='text-base text-forestGreen-500 font-medium'>{rewardDescription}</p>
            </div>
            <span className='italic text-earthGreen-500 text-xl font-bold'>Require {pointsNeeded} points.</span>
        </div>
        <Button onClick={() => StartRewardNotf(rewardId)}>Get this reward</Button>
        <Modal
          isModalOpen={rewardSuccess}
          closeModal={() => setRewardSuccess(false)}
        >
            <div className="flex flex-col items-center gap-7">
              <div className='w-20 h-20 rounded-full bg-earthGreen-500 flex items-center justify-center'>
                <svg width="38" height="37" viewBox="0 0 38 37" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M0.992188 22.1709H7.25554V34.6976H0.992188V22.1709Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.24902 32.2828C23.6903 37.7632 18.2099 37.7632 36.9999 28.3682C36.472 27.657 35.7382 27.1252 34.8979 26.8452C34.0576 26.5651 33.1515 26.5501 32.3024 26.8023L25.4127 29.09" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7.24902 23.7367H11.9465C14.6117 23.8312 17.1368 24.9534 18.9928 26.8684H23.6903C23.9194 26.8272 24.1547 26.8368 24.3796 26.8966C24.6046 26.9563 24.8137 27.0646 24.9922 27.2139C25.1707 27.3632 25.3143 27.5499 25.4128 27.7607C25.5114 27.9716 25.5624 28.2015 25.5624 28.4342C25.5624 28.6669 25.5114 28.8968 25.4128 29.1077C25.3143 29.3185 25.1707 29.5052 24.9922 29.6545C24.8137 29.8038 24.6046 29.9122 24.3796 29.9719C24.1547 30.0316 23.9194 30.0412 23.6903 30H15.0782" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22.9141 6.44654C22.9141 7.06342 23.0356 7.67427 23.2716 8.2442C23.5077 8.81412 23.8537 9.33197 24.2899 9.76818C24.7261 10.2044 25.244 10.5504 25.8139 10.7865C26.3838 11.0225 26.9947 11.144 27.6116 11.144C28.2285 11.144 28.8393 11.0225 29.4092 10.7865C29.9792 10.5504 30.497 10.2044 30.9332 9.76818C31.3694 9.33197 31.7154 8.81412 31.9515 8.2442C32.1876 7.67427 32.3091 7.06342 32.3091 6.44654C32.3091 5.20068 31.8142 4.00585 30.9332 3.12489C30.0523 2.24394 28.8574 1.74902 27.6116 1.74902C26.3657 1.74902 25.1709 2.24394 24.2899 3.12489C23.409 4.00585 22.9141 5.20068 22.9141 6.44654Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15.085 17.4072C15.085 18.0241 15.2065 18.635 15.4425 19.2049C15.6786 19.7748 16.0246 20.2927 16.4608 20.7289C16.897 21.1651 17.4149 21.5111 17.9848 21.7472C18.5547 21.9832 19.1656 22.1047 19.7825 22.1047C20.3994 22.1047 21.0102 21.9832 21.5801 21.7472C22.1501 21.5111 22.6679 21.1651 23.1041 20.7289C23.5403 20.2927 23.8863 19.7748 24.1224 19.2049C24.3585 18.635 24.48 18.0241 24.48 17.4072C24.48 16.7903 24.3585 16.1795 24.1224 15.6096C23.8863 15.0396 23.5403 14.5218 23.1041 14.0856C22.6679 13.6494 22.1501 13.3034 21.5801 13.0673C21.0102 12.8312 20.3994 12.7097 19.7825 12.7097C19.1656 12.7097 18.5547 12.8312 17.9848 13.0673C17.4149 13.3034 16.897 13.6494 16.4608 14.0856C16.0246 14.5218 15.6786 15.0396 15.4425 15.6096C15.2065 16.1795 15.085 16.7903 15.085 17.4072Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19.7822 15.8417V18.9733" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M27.6113 4.88062V8.01229" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className='font-medium text-xl text-forestGreen-700'>Great job!</span>
                <span className="text-forestGreen-700 font-bold text-[1.75rem] sm:text-[2rem] text-center leading-[120%]">You've get {rewardName}!</span>
              </div>
            </div>
        </Modal>

        <Modal
          isModalOpen={rewardNotfModal}
          closeModal={() => setRewardNotffModal(false)}
          acceptModal={GetThisReward}
        >
            <div className="flex flex-col items-center gap-7">
              <div className='w-20 h-20 rounded-full bg-[#00B0E8] flex items-center justify-center'>
                <svg width="32" height="33" viewBox="0 0 32 33" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fillRule="evenodd" clipRule="evenodd" d="M15.9902 0.876221C7.15367 0.876221 -0.00976562 8.03966 -0.00976562 16.8762C-0.00976562 25.7127 7.15367 32.8762 15.9902 32.8762C24.8267 32.8762 31.9902 25.7127 31.9902 16.8762C31.9902 8.03966 24.8267 0.876221 15.9902 0.876221ZM2.8475 16.8762C2.8475 9.61767 8.73168 3.73349 15.9902 3.73349C23.2486 3.73349 29.133 9.61767 29.133 16.8762C29.133 24.1348 23.2486 30.019 15.9902 30.019C8.73168 30.019 2.8475 24.1348 2.8475 16.8762ZM15.9898 10.3041C14.5696 10.3041 13.4183 11.4554 13.4183 12.8756C13.4183 13.6646 12.7786 14.3042 11.9896 14.3042C11.2006 14.3042 10.561 13.6646 10.561 12.8756C10.561 9.87736 12.9915 7.44681 15.9898 7.44681C18.988 7.44681 21.4186 9.87736 21.4186 12.8756C21.4186 15.3794 19.7236 17.4873 17.4184 18.1145V19.1616C17.4184 19.9506 16.7788 20.5902 15.9898 20.5902C15.2008 20.5902 14.5612 19.9506 14.5612 19.1616V16.8758C14.5612 16.0868 15.2008 15.4471 15.9898 15.4471C17.41 15.4471 18.5613 14.2958 18.5613 12.8756C18.5613 11.4554 17.41 10.3041 15.9898 10.3041ZM15.9898 21.7331C17.0944 21.7331 17.9899 22.6286 17.9899 23.7332C17.9899 24.8377 17.0944 25.7333 15.9898 25.7333C14.8852 25.7333 13.9897 24.8377 13.9897 23.7332C13.9897 22.6286 14.8852 21.7331 15.9898 21.7331Z" fill="white"/>
                </svg>
              </div>
              <div className="flex flex-col items-center gap-4">
                <span className="text-forestGreen-700 font-bold text-[1.75rem] sm:text-[2rem] text-center leading-[120%]">You will get {rewardName}</span>
                <span className='font-medium text-xl text-forestGreen-700'>Are you sure?</span>
              </div>
            </div>
        </Modal>
    </div>
  )
}

export default Reward