// src/lib/hooks/useTrack.ts
"use client";

import { createClient } from "@/lib/supabase/client";
import { useEffect, useState } from "react";

export function useIsLoggedIn() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    useEffect(() => {
        const checkLoggedIn = async () => {
            const supabase = createClient();
            const { data: { user } } = await supabase.auth.getUser()
            setIsLoggedIn(user !== null);
        }
        checkLoggedIn();
    }, []);
    return isLoggedIn;
}