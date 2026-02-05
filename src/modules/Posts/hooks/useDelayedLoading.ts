import { useState, useEffect } from "react";

const defaultDelay = 500;
export const useDelayedShowLoading = (
  isLoading: boolean,
  delay = defaultDelay,
) => {
  const [showLoading, setShowLoading] = useState(false);

  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => setShowLoading(true), delay);
      return () => clearTimeout(timer);
    } else {
      setShowLoading(false);
    }
  }, [isLoading, delay]);

  return showLoading;
}
