

import { useState, useEffect } from 'react';

export function useAuth() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function checkAuth() {
      try {
        const res = await fetch("/api/protect", {
          method: 'GET',       
        });

        if (res.ok) {
          const data = await res.json();
          setUser(data); 
        } else {
          console.log('Authentication failed');
        }
      } catch (error) {
        console.error('Error fetching authentication', error);
      } finally {
        setLoading(false);
      }
    }

    checkAuth();
  }, []);

  return { user, loading };
}
