"use client"
import Button from "@/components/ui/Button"
import { useSession, signOut } from "next-auth/react";
import { useFetchUserData } from "@/app/hooks/useFetchUserData";
import { useFetchLeaderboard } from "@/app/hooks/useFetchLeaderboardData";

export default function Page() {
    const { data: session, status } = useSession();
    const { user, error, loading } = useFetchUserData({ email: session?.user?.email });

    const { leaderboard, leaderboardLoading } = useFetchLeaderboard();

    return (
        <div>
            {loading &&     
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
            }  
            {user &&
            <div className="flex flex-col gap-10 w-full">
                <div className="flex flex-col gap-1">
                    <h1 className="text-forestGreen-700 text-[1.75rem] sm:text-[2.5rem] font-bold">Dashboard</h1>
                    <p className="text-base text-forestGreen-500 font-medium">View your points, current rank, and track progress.</p>
                </div>
                <div className="grid grid-cols-1 xl:grid-cols-2 2xl:grid-cols-3 w-full gap-7">
                    <div className="flex flex-col gap-1 bg-white w-full p-4 rounded-2xl min-h-[240px] justify-between">
                        <div className="flex flex-col gap-4 p-3">
                            <div className="flex items-center gap-2">
                                <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M1 3.625C1 4.28804 1.52678 4.92393 2.46447 5.39277C3.40215 5.86161 4.67392 6.125 6 6.125C7.32608 6.125 8.59785 5.86161 9.53553 5.39277C10.4732 4.92393 11 4.28804 11 3.625C11 2.96196 10.4732 2.32607 9.53553 1.85723C8.59785 1.38839 7.32608 1.125 6 1.125C4.67392 1.125 3.40215 1.38839 2.46447 1.85723C1.52678 2.32607 1 2.96196 1 3.625Z" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M11 6.95833V3.625" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 3.625V16.125C1 17.5083 3.24167 18.625 6 18.625C6.47128 18.6267 6.94202 18.5932 7.40833 18.525" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 13C1 14.3833 3.24167 15.5 6 15.5C6.48254 15.4987 6.96435 15.4625 7.44167 15.3917" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 9.875C1 11.2583 3.24167 12.375 6 12.375C6.47128 12.3767 6.94202 12.3433 7.40833 12.275" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M1 6.75C1 8.13333 3.24167 9.25 6 9.25C6.48254 9.24872 6.96435 9.21251 7.44167 9.14167" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.75 11.3333C9.75 11.9964 10.2768 12.6323 11.2145 13.1011C12.1521 13.5699 13.4239 13.8333 14.75 13.8333C16.0761 13.8333 17.3479 13.5699 18.2855 13.1011C19.2232 12.6323 19.75 11.9964 19.75 11.3333C19.75 10.6703 19.2232 10.0344 18.2855 9.56556C17.3479 9.09672 16.0761 8.83333 14.75 8.83333C13.4239 8.83333 12.1521 9.09672 11.2145 9.56556C10.2768 10.0344 9.75 10.6703 9.75 11.3333Z" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M9.75 11.3333V17.375C9.75 18.7583 11.9917 19.875 14.75 19.875C17.5083 19.875 19.75 18.7583 19.75 17.375V11.3333" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M19.75 14.25C19.75 15.6333 17.5083 16.75 14.75 16.75C11.9917 16.75 9.75 15.6333 9.75 14.25" stroke="#729C7E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-forestGreen-400 text-xl font-medium">Current Points</span>
                            </div>
                            <span className="font-bold text-[3.75rem] text-forestGreen-700 leading-[100%]">{user?.points}<span className="text-[1.5rem]">pts</span></span>
                        </div>
                        <div className="flex flex-wrap gap-3 w-full">
                            <Button href="/earn-points" className="w-full basis-[200px] flex-1">
                                Earn points
                            </Button>
                            <Button style="tertiary" href="/get-rewards" className="w-full basis-[200px] flex-1">
                                Get Rewards
                            </Button>
                        </div>
                    </div>
                    <div className="flex flex-col gap-1 bg-white w-full p-4 rounded-2xl min-h-[240px] justify-between">
                        <div className="flex flex-col gap-4 p-3">
                            <div className="flex items-center gap-2">
                                <svg width="20" height="21" viewBox="0 0 20 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M9.62207 13.8162V19.1222" stroke="#729C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.97949 19.1222H14.2649" stroke="#729C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.97946 1.87782H1V5.85729C1 8.05508 2.78167 9.83675 4.97946 9.83675V1.87782Z" stroke="#729C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.2646 1.87782H18.2441V5.85729C18.2441 8.05508 16.4625 9.83675 14.2646 9.83675V1.87782Z" stroke="#729C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M4.97949 1.87782V9.17351C4.97949 11.7376 7.0581 13.8162 9.6222 13.8162C12.1863 13.8162 14.2649 11.7376 14.2649 9.17351V1.87782H4.97949Z" stroke="#729C7E" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                                <span className="text-forestGreen-400 text-xl font-medium">Leaderboard Position</span>
                            </div>
                            <span className="font-bold text-[3.75rem] text-forestGreen-700 leading-[100%]">#{leaderboard.find(item => item.username === user.username)?.rank}</span>
                        </div>
                        <Button style="tertiary" href="/leaderboards" className="w-full">
                            Check leaderboards
                        </Button>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}