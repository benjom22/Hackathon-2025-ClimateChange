"use client"
import Reward from "@/components/ui/Reward"
import { useFetchRewards } from "@/app/hooks/useFetchRewards";
import { useState } from "react";

export default function Page() {
    const { rewards, rewardsLoading } = useFetchRewards();
    const [selectedReward, setSelectedReward] = useState(null);

    return (
        <div>
            {rewardsLoading ? (     
                <div className="flex flex-col gap-10 w-full">
                    <div className="flex flex-col gap-3 md:gap-4">
                        <div className="rounded-full h-8 md:h-12 w-[180px] bg-forestGreen-600 animate-pulse"></div>
                        <div className="rounded-full h-4 md:h-6 w-[260px] bg-forestGreen-400 animate-pulse"></div>
                    </div>
                    <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
                        <div className="w-full h-60 bg-earthGreen-50 animate-pulse rounded-2xl"></div>
                        <div className="w-full h-60 bg-earthGreen-50 animate-pulse rounded-2xl"></div>
                    </div>
                </div>
            ) : (
            
                <div className="flex flex-col gap-10 w-full">
                    <div className="flex flex-col gap-1">
                        <h1 className="text-forestGreen-700 text-[1.75rem] sm:text-[2.5rem] font-bold">Get Rewards</h1>
                        <p className="text-base text-forestGreen-500 font-medium">Redeem your points for exclusive rewards.</p>
                    </div>
                    <div className="grid xl:grid-cols-2 2xl:grid-cols-2 gap-y-8 gap-x-5">
                        {rewards.map((item, index) => (
                            <Reward 
                                key={index}
                                partnerLogo={item?.partner?.logo}
                                rewardName={item?.name}
                                rewardDescription={item?.description}
                                pointsNeeded={item?.value}
                                rewardId={item?.id}
                            />
                        ))}
                    </div>
                </div>
            )
            }
        </div>
    )
}