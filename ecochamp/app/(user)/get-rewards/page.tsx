"use client"
import Reward from "@/components/ui/Reward"

export default function Page() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-1">
                <h1 className="text-forestGreen-700 text-[1.75rem] sm:text-[2.5rem] font-bold">Get Rewards</h1>
                <p className="text-base text-forestGreen-500 font-medium">Redeem your points for exclusive rewards.</p>
            </div>
            <div className="grid xl:grid-cols-2 2xl:grid-cols-2 gap-y-8 gap-x-5">
                <Reward 
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dm_Logo.svg/1280px-Dm_Logo.svg.png"
                    discountName="10% Discount"
                    discountDescription="Enjoy a 10% discount on your next purchase from DM."
                    pointsNeeded="200"
                />
                <Reward 
                    image="https://upload.wikimedia.org/wikipedia/commons/thumb/5/50/Dm_Logo.svg/1280px-Dm_Logo.svg.png"
                    discountName="10% Discount"
                    discountDescription="Enjoy a 10% discount on your next purchase from DM."
                    pointsNeeded="200"
                />
            </div>
        </div>
    )
}