import { useEffect, useState } from "react";

export function useFetchRewards() {
    const [rewards, setRewards] = useState<any[]>([]); // Adjust the type as needed
    const [rewardsLoading, setRewardsLoading] = useState<boolean>(true);
  
    useEffect(() => {
      const fetchRewards = async () => {
        setRewardsLoading(true);
        try {
          const response = await fetch("/api/partnereward/rewards");
          if (!response.ok) {
            throw new Error("Failed to fetch rewards data");
          }
          const data = await response.json();
          console.log(data);
          setRewards(data);
        } catch (err) {
          console.error(err);
        } finally {
          setRewardsLoading(false);
        }
      };
  
      fetchRewards();
    }, []);
  
    return { rewards, rewardsLoading };
  }
  