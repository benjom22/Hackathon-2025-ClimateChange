"use client"
import LeaderboardPlace from "@/components/layout/LeaderboardPlace"
import { leaderboardssample } from "@/app/content/leaderboards"

export default function Page() {
    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-1">
                <h1 className="text-forestGreen-700 text-[1.75rem] sm:text-[2.5rem] font-bold">Leaderboards</h1>
                <p className="text-base text-forestGreen-500 font-medium">Check the rankings and see top eco contributors.</p>
            </div>
            <div className="flex flex-col gap-2">
                {leaderboardssample.map((player, index) =>(
                    <LeaderboardPlace
                        key={index}
                        nick={player.nick}
                        points={player.points}
                        place={player.place}
                        isLast={index == leaderboardssample.length-1}
                        avatar={player.image}
                    />
                ))}
            </div>
        </div>
    )
}