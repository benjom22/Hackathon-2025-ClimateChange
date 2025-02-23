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
        const [processStart, setProcessStart] = useState(false);
        const [errorMessage, setErrorMessage] = useState('');
    
        const { data: session, status } = useSession();
        const { user, error, loading } = useFetchUserData({ email: session?.user?.email });
        const [ pointsGained, setPointsGained ] = useState('');
    
        const GetThisReward = () => {
            const email = user?.email;
            if (!email) {
              console.error("Email is not available");
              return;
            }
            setProcessStart(true);
            setRewardSuccess(true);
            redeemCoupon(email, code);
        };
    
        const closeModal = () => {
            setRewardSuccess(false);
            setProcessStart(false);
            setErrorMessage('');
        }
          
    
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
                setPointsGained(data.pointsDifference);
                setErrorMessage('');
                setRewardSuccess(true);
                setProcessStart(false);
              } else {
                console.log('Error:', data.error);
                setErrorMessage(data.error);
              }
            } catch (error) {
              console.log('An error occurred:', error);
              setErrorMessage(error);
            }
        };
    return (
        <div className="flex flex-col items-center gap-12 w-full">
            <div className="flex-col w-full aspect-[1400/340] max-h-[180px] p-8 flex justify-center rounded-2xl bg-center bg-cover bg-[url('/options/bottle-recycling.png')]">
                <span className="text-earthGreen-200 font-medium text-md sm:text-xl uppercase">How to earn with:</span>
                <h1 className="text-white text-[1.35rem] sm:text-[2.5rem] font-bold">Bottle Recycling</h1>
            </div>
            <div className="flex flex-col items-center gap-12">
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">01</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Check if the item you are recycling is a plastic bottle or a glass jar.</h2>
                </div>
                <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5756 46.9958C14.9146 48.3347 17.0854 48.3347 18.4244 46.9958L30.4244 34.9958C31.7633 33.6568 31.7633 31.486 30.4244 30.1471C29.0854 28.8081 26.9146 28.8081 25.5756 30.1471L19.4286 36.2941L19.4286 3.42857C19.4286 1.53497 17.8935 1.67775e-06 16 1.51221e-06C14.1065 1.34668e-06 12.5714 1.53497 12.5714 3.42857L12.5714 36.2941L6.42436 30.147C5.08547 28.8081 2.9145 28.8081 1.57564 30.147C0.236784 31.486 0.236784 33.6568 1.57564 34.9958L13.5756 46.9958Z" fill="#2C6B3F"/>
                </svg>
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">02</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Skenirajte QR kod na flaši pomoću aplikacije za reciklažu.</h2>
                </div>
                <svg width="32" height="48" viewBox="0 0 32 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M13.5756 46.9958C14.9146 48.3347 17.0854 48.3347 18.4244 46.9958L30.4244 34.9958C31.7633 33.6568 31.7633 31.486 30.4244 30.1471C29.0854 28.8081 26.9146 28.8081 25.5756 30.1471L19.4286 36.2941L19.4286 3.42857C19.4286 1.53497 17.8935 1.67775e-06 16 1.51221e-06C14.1065 1.34668e-06 12.5714 1.53497 12.5714 3.42857L12.5714 36.2941L6.42436 30.147C5.08547 28.8081 2.9145 28.8081 1.57564 30.147C0.236784 31.486 0.236784 33.6568 1.57564 34.9958L13.5756 46.9958Z" fill="#2C6B3F"/>
                </svg>
                <div className="flex flex-col gap-3 items-center max-w-[400px]">
                    <div className="w-16 h-16 rounded-full bg-earthGreen-300 flex items-center justify-center">
                        <span className="text-2xl font-bold text-forestGreen-700">03</span>
                    </div>
                    <h2 className="text-forestGreen-500 font-medium text-xl sm:text-2xl text-center">Odložite flašu u odgovarajući kontejner za plastiku ili staklo.</h2>
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
                closeModal={closeModal}
                >
                    {processStart ? (
                        errorMessage ? (
                            <div className="flex flex-col items-center gap-5">
                                <svg width="58" height="58" viewBox="0 0 58 58" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <circle cx="29" cy="29" r="29" fill="#FF3838"/>
                                    <path d="M31.1078 29.1651C31.0859 29.1445 31.0684 29.1196 31.0565 29.092C31.0446 29.0644 31.0384 29.0347 31.0384 29.0046C31.0384 28.9745 31.0446 28.9447 31.0565 28.9171C31.0684 28.8895 31.0859 28.8647 31.1078 28.8441L39.5941 20.3428C39.7227 20.2157 39.8248 20.0643 39.8945 19.8974C39.9641 19.7306 40 19.5515 40 19.3707C40 19.1898 39.9641 19.0108 39.8945 18.8439C39.8248 18.677 39.7227 18.5257 39.5941 18.3986C39.3352 18.1432 38.9863 18 38.6227 18C38.2591 18 37.9102 18.1432 37.6513 18.3986L29.165 26.8907C29.1436 26.9129 29.118 26.9306 29.0896 26.9426C29.0613 26.9547 29.0308 26.9609 29 26.9609C28.9692 26.9609 28.9387 26.9547 28.9104 26.9426C28.882 26.9306 28.8564 26.9129 28.835 26.8907L20.3487 18.3986C20.0898 18.1432 19.7409 18 19.3773 18C19.0137 18 18.6648 18.1432 18.4059 18.3986C18.2773 18.5257 18.1752 18.677 18.1055 18.8439C18.0359 19.0108 18 19.1898 18 19.3707C18 19.5515 18.0359 19.7306 18.1055 19.8974C18.1752 20.0643 18.2773 20.2157 18.4059 20.3428L26.8922 28.8441C26.9141 28.8647 26.9316 28.8895 26.9435 28.9171C26.9554 28.9447 26.9616 28.9745 26.9616 29.0046C26.9616 29.0347 26.9554 29.0644 26.9435 29.092C26.9316 29.1196 26.9141 29.1445 26.8922 29.1651L18.4059 37.6572C18.2773 37.7843 18.1752 37.9357 18.1055 38.1026C18.0359 38.2694 18 38.4485 18 38.6293C18 38.8102 18.0359 38.9892 18.1055 39.1561C18.1752 39.323 18.2773 39.4743 18.4059 39.6014C18.6648 39.8568 19.0137 40 19.3773 40C19.7409 40 20.0898 39.8568 20.3487 39.6014L28.835 31.1093C28.8564 31.0871 28.882 31.0694 28.9104 31.0574C28.9387 31.0453 28.9692 31.0391 29 31.0391C29.0308 31.0391 29.0613 31.0453 29.0896 31.0574C29.118 31.0694 29.1436 31.0871 29.165 31.1093L37.6513 39.6014C37.9102 39.8568 38.2591 40 38.6227 40C38.9863 40 39.3352 39.8568 39.5941 39.6014C39.7227 39.4743 39.8248 39.323 39.8945 39.1561C39.9641 38.9892 40 38.8102 40 38.6293C40 38.4485 39.9641 38.2694 39.8945 38.1026C39.8248 37.9357 39.7227 37.7843 39.5941 37.6572L31.1078 29.1651Z" fill="white"/>
                                </svg>
                                <span className="text-[#FF3838] text-xl font-bold text-center">
                                    {errorMessage}
                                </span>
                            </div>
                        ): (
                            <div className="flex flex-col gap-4 items-center">
                                <span className="font-bold text-forestGreen-500 text-xl">Processing..</span>
                                <svg aria-hidden="true" className="w-12 h-12 text-earthGreen-500 animate-spin fill-earthGreen-700" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                </svg>
                            </div>
                        )
                    ):(
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
                                <span className="text-forestGreen-700 font-bold text-[1.75rem] sm:text-[2rem] text-center leading-[120%]">You've earned {pointsGained} points!</span>
                            </div>
                            <p className='text-base font-medium text-forestGreen-500 text-center'>Keep it up and continue making a positive impact!</p>
                        </div>
                    )}
                        
            </Modal>
        </div>
    )
}