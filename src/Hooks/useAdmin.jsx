import { useState, useEffect } from 'react';

function useAdmin() {
  const [isAdmin, setAdmin] = useState(false);

  useEffect(() => {
    const session = localStorage.getItem('sesionActiva') === 'true';
    setAdmin(session);
  }, []);

  useEffect(() => {
    const handleStorageChange = () => {
      const session = localStorage.getItem('sesionActiva') === 'true';
      setAdmin(session);
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []);

  return isAdmin;
}

export default useAdmin;
