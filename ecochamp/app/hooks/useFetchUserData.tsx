import { useState, useEffect } from 'react';

type User = {
  id: number;
  username: string;
  email: string;
  points: string;
};

type UseFetchUserDataProps = {
  email: string | undefined;
};

export function useFetchUserData({ email }: UseFetchUserDataProps) {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    // If email is available, fetch user data
    const fetchUserData = async () => {
      if (!email) return;

      setLoading(true);
      try {
        const response = await fetch(`/api/user/fetchemail?email=${email}`);

        if (!response.ok) {
          const errorData = await response.json();
          setError(errorData.error || 'Unknown error');
          return;
        }

        const fetchedUser = await response.json();
        setUser(fetchedUser); // Save the user data
      } catch (error) {
        setError('Network error');
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchUserData();
  }, [email]); // Only run when the email changes

  return { user, error, loading };
}
