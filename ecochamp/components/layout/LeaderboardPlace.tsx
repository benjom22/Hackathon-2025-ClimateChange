import React from 'react'
import Image from 'next/image';

type LeaderboardPlace = {
  rank?: string;
  username?: string;
  points?: string;
  isLast?: string;
  avatar?: string;
};

const LeaderboardPlace:React.FC<LeaderboardPlace> = ({rank, username, points, isLast, avatar}) => {
    
  return (
    rank == '1' ? (
        <div className='flex items-center justify-between gap-8 p-4 md:p-5 rounded-2xl bg-earthGreen-500'>
            <div className="flex items-center gap-3 md:gap-5">
                <span className='text-xl md:text-3xl font-bold text-white/60'>#{rank}</span>
                <div className="flex items-center gap-2 md:gap-3">
                    <Image src={avatar ? avatar : 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'} width={100} height={100} alt='Avatar' className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"></Image>
                    <span className='font-medium text-lg md:text-2xl text-white'>{username}</span>
                </div>
            </div>
            <span className='font-bold text-[1.75rem] md:text-[2rem] text-white shrink-0'>{points}<span className='ml-1 font-bold text-base text-earthGreen-100'>pts</span></span>
        </div>
    ) : rank == '2' ? (
        <div className='flex items-center justify-between gap-8 p-4 md:p-5 rounded-2xl bg-earthGreen-300'>
            <div className="flex items-center gap-3 md:gap-5">
                <span className='text-xl md:text-3xl font-bold text-white/60'>#{rank}</span>
                <div className="flex items-center gap-2 md:gap-3">
                    <Image src={avatar ? avatar : 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'} width={100} height={100} alt='Avatar' className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"></Image>
                    <span className='font-medium text-lg md:text-2xl text-forestGreen-700'>{username}</span>
                </div>
            </div>
            <span className='font-bold text-[1.75rem] md:text-[2rem] text-forestGreen-700'>{points}<span className='ml-1 font-bold text-base text-forestGreen-500'>pts</span></span>
        </div>
    ) : rank == '3' ? (
        <div className='flex items-center justify-between gap-8 p-4 md:p-5 rounded-2xl bg-earthGreen-200'>
            <div className="flex items-center gap-3 md:gap-5">
                <span className='text-xl md:text-3xl font-bold text-white/60'>#{rank}</span>
                <div className="flex items-center gap-2 md:gap-3">
                    <Image src={avatar ? avatar : 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'} width={100} height={100} alt='Avatar' className="w-10 md:w-12 h-10 md:h-12 rounded-full object-cover"></Image>
                    <span className='font-medium text-lg md:text-2xl text-forestGreen-700'>{username}</span>
                </div>
            </div>
            <span className='font-bold text-[1.75rem] md:text-[2rem] text-forestGreen-700'>{points}<span className='ml-1 font-bold text-base text-forestGreen-500'>pts</span></span>
        </div>
    ) : (
        <div className="flex flex-col gap-2">
            <div className='flex items-center justify-between gap-8 px-5 py-3'>
                <div className="flex items-center gap-5">
                    <span className='text-lg font-bold text-forestGreen-200'>#{rank}</span>
                    <div className="flex items-center gap-3">
                        <Image src={avatar ? avatar : 'https://img.freepik.com/free-vector/illustration-businessman_53876-5856.jpg'} width={100} height={100} alt='Avatar' className="w-7 h-7 md:w-8 md:h-8 rounded-full object-cover"></Image>
                        <span className='font-medium text-lg md:text-xl text-forestGreen-700'>{username}</span>
                    </div>
                </div>
                <span className='font-bold text-lg text-forestGreen-700'>{points}<span className='ml-1 font-bold text-base text-forestGreen-500'>pts</span></span>
            </div>
            <div className={`w-full h-[1px] bg-earthGreen-200 ${isLast ? 'hidden' : 'block'}`}></div>
        </div>
    )
  )
}

export default LeaderboardPlace