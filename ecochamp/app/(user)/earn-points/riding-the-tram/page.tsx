"use client"
import Modal from "@/components/layout/Modal";
import Input from "@/components/ui/Input"
import Button from "@/components/ui/Button"
import Link from "next/link";
import { useState } from "react";
import { useFetchUserData } from "@/app/hooks/useFetchUserData";
import { useSession, signOut } from "next-auth/react";

export default function Page() {
    const [code, setCode] = useState('');
    const [rewardSuccess, setRewardSuccess] = useState(false);

    const { data: session, status } = useSession();
    const { user, error, loading } = useFetchUserData({ email: session?.user?.email });

    const GetThisReward = () => {
        const email = user?.email;
        if (!email) {
          console.error("Email is not available");
          return;
        }
        redeemCoupon(email, code);
        setRewardSuccess(true);
    };
      

    const redeemCoupon = async (email: string, couponCode: string) => {
        try {
          const response = await fetch('/api/coupons/check', {
            method: 'PUT',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, couponCode }),
          });
      
          const data = await response.json();
      
          if (response.ok) {
            console.log('Success:', data.message, 'New points:', data.newPoints);
          } else {
            console.error('Error:', data.error);
          }
        } catch (error) {
          console.error('An error occurred:', error);
        }
    };

    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <div className="flex-col w-full aspect-[1400/340] max-h-[180px] p-8 flex justify-center rounded-2xl bg-center bg-cover bg-[url('/options/tram.png')]">
                <span className="text-earthGreen-200 font-medium text-md sm:text-xl uppercase">How to earn with:</span>
                <h1 className="text-white text-[1.35rem] sm:text-[2.5rem] font-bold">Riding the tram</h1>
            </div>
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">01</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Ensure you have purchased your ticket either on the tram or at a ticket stand.</h2>
                </div>
                <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5756 46.9958C14.9146 48.3347 17.0854 48.3347 18.4244 46.9958L30.4244 34.9958C31.7633 33.6568 31.7633 31.486 30.4244 30.1471C29.0854 28.8081 26.9146 28.8081 25.5756 30.1471L19.4286 36.2941L19.4286 3.42857C19.4286 1.53497 17.8935 1.67775e-06 16 1.51221e-06C14.1065 1.34668e-06 12.5714 1.53497 12.5714 3.42857L12.5714 36.2941L6.42436 30.147C5.08547 28.8081 2.9145 28.8081 1.57564 30.147C0.236784 31.486 0.236784 33.6568 1.57564 34.9958L13.5756 46.9958Z" fill="#2C6B3F"/>
                </svg>
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">02</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Once you have your ticket, locate the code at the bottom.</h2>
                </div>
                <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5756 46.9958C14.9146 48.3347 17.0854 48.3347 18.4244 46.9958L30.4244 34.9958C31.7633 33.6568 31.7633 31.486 30.4244 30.1471C29.0854 28.8081 26.9146 28.8081 25.5756 30.1471L19.4286 36.2941L19.4286 3.42857C19.4286 1.53497 17.8935 1.67775e-06 16 1.51221e-06C14.1065 1.34668e-06 12.5714 1.53497 12.5714 3.42857L12.5714 36.2941L6.42436 30.147C5.08547 28.8081 2.9145 28.8081 1.57564 30.147C0.236784 31.486 0.236784 33.6568 1.57564 34.9958L13.5756 46.9958Z" fill="#2C6B3F"/>
                </svg>
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">03</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Enter the code in the app.</h2>
                </div>
                <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5756 46.9958C14.9146 48.3347 17.0854 48.3347 18.4244 46.9958L30.4244 34.9958C31.7633 33.6568 31.7633 31.486 30.4244 30.1471C29.0854 28.8081 26.9146 28.8081 25.5756 30.1471L19.4286 36.2941L19.4286 3.42857C19.4286 1.53497 17.8935 1.67775e-06 16 1.51221e-06C14.1065 1.34668e-06 12.5714 1.53497 12.5714 3.42857L12.5714 36.2941L6.42436 30.147C5.08547 28.8081 2.9145 28.8081 1.57564 30.147C0.236784 31.486 0.236784 33.6568 1.57564 34.9958L13.5756 46.9958Z" fill="#2C6B3F"/>
                </svg>
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">04</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Recycle your ticket, collect points, and enjoy the ride!</h2>
                </div>
            </div>
            <div className="flex flex-col items-center my-20 gap-12">
                <Input 
                    type="text"
                    className="scale-[1.3] sm:scale-150"
                    label="Enter Code"
                    id="code"
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                    required
                    darkMode
                />
                <Button className={!code ? 'disabled' : ''} onClick={GetThisReward}>Apply</Button>
                <Link className="text-base font-medium text-forestGreen-600 flex items-center gap-2" href="/earn-points">
                    <svg width="19" height="13" viewBox="0 0 19 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M6.59622 1.62037C6.91853 1.29807 6.91853 0.775485 6.59622 0.453165C6.2739 0.130846 5.75132 0.130846 5.429 0.453165L0.254494 5.62768C-0.0678164 5.94999 -0.0678237 6.47255 0.254477 6.79487L5.42899 11.9697C5.7513 12.292 6.27388 12.292 6.5962 11.9697C6.91853 11.6475 6.91854 11.1248 6.59624 10.8026L2.83057 7.03663H17.6557C18.1116 7.03663 18.4811 6.66711 18.4811 6.21128C18.4811 5.75546 18.1116 5.38594 17.6557 5.38594H2.83065L6.59622 1.62037Z" fill="#286139"/>
                    </svg>
                    Go Back
                </Link>
            </div>

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
                            <span className="text-forestGreen-700 font-bold text-[1.75rem] sm:text-[2rem] text-center leading-[120%]">You've earned [X] points!</span>
                        </div>
                        <p className='text-base font-medium text-forestGreen-500 text-center'>Keep it up and continue making a positive impact!</p>
                    </div>
                </Modal>
        </div>
    )
}