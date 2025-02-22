"use client"
import LeaderboardPlace from "@/components/layout/LeaderboardPlace"
import { useEffect, useState } from "react";

export default function Page() {
    const [leaderboard, setLeaderboard] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchLeaderboard = async () => {
            try {
                const response = await fetch("/api/leaderboard");
                if (!response.ok) {
                    throw new Error("Failed to fetch leaderboard data");
                }
                const data = await response.json();
                setLeaderboard(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchLeaderboard();
    }, []);

    if (loading) return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-3 md:gap-4">
                <div className="rounded-full h-8 md:h-12 w-[180px] bg-forestGreen-600 animate-pulse"></div>
                <div className="rounded-full h-4 md:h-6 w-[260px] bg-forestGreen-400 animate-pulse"></div>
            </div>
            <div className="flex flex-col gap-2">
                <div className="w-full h-16 md:h-20 bg-earthGreen-500 animate-pulse rounded-2xl"></div>
                <div className="w-full h-16 md:h-20 bg-earthGreen-300 animate-pulse rounded-2xl"></div>
            </div>
        </div>
    )
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="flex flex-col gap-10 w-full">
            <div className="flex flex-col gap-1">
                <h1 className="text-forestGreen-700 text-[1.75rem] sm:text-[2.5rem] font-bold">Leaderboards</h1>
                <p className="text-base text-forestGreen-500 font-medium">Check the rankings and see top eco contributors.</p>
            </div>
            <div className="flex flex-col gap-2">
                {leaderboard.map((player, index) =>(
                    <LeaderboardPlace
                        key={index}
                        username={player.username}
                        points={player.points}
                        rank={player.rank}
                        isLast={index == leaderboard.length-1}
                        avatar={player.image}
                    />
                ))}
            </div>
        </div>
    )
}