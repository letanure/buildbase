// src/lib/hooks/useTrack.ts
"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function useIsLoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const supabase = createClient();

  useEffect(() => {
    // Check if user is logged in on mount
    const checkLoggedIn = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setIsLoggedIn(user !== null);
    };

    checkLoggedIn();

    // Listen to auth state changes (login/logout)
    const { data: listener } = supabase.auth.onAuthStateChange((event) => {
      if (event === 'SIGNED_IN') {
        setIsLoggedIn(true);
      } else if (event === 'SIGNED_OUT') {
        setIsLoggedIn(false);
      }
    });

    // Clean up the subscription on unmount
    return () => {
      listener.subscription.unsubscribe();
    };
  }, [supabase]);

  return isLoggedIn;
}