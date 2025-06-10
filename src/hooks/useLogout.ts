'use client'

import { useTransition } from 'react'
import { createClient } from '@/lib/supabase/client'
import { redirect } from '@/i18n/navigation'

export function useLogout() {
  const [isPending, startTransition] = useTransition()

  async function logout() {
    const supabase = createClient()
    await supabase.auth.signOut()

    startTransition(() => {
      redirect({
        href: '/',
        locale: 'en',
      })
    })
  }

  return { logout, isPending }
}