import { useEffect, useState } from "react";

export function useFetchLeaderboard() {
    const [leaderboard, setLeaderboard] = useState<any[]>([]); // Adjust the type as needed
    const [leaderboardLoading, setLeaderboardLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchLeaderboard = async () => {
        setLeaderboardLoading(true);
        try {
          const response = await fetch("/api/leaderboard");
          if (!response.ok) {
            throw new Error("Failed to fetch leaderboard data");
          }
          const data = await response.json();
          console.log(data);
          setLeaderboard(data);
        } catch (err) {
          console.error(err);
        } finally {
          setLeaderboardLoading(false);
        }
      };
  
      fetchLeaderboard();
    }, []);
  
    return { leaderboard, leaderboardLoading };
  }
  