'use client'

import { useIsLoggedIn } from '@/hooks/useIsLoggedIn';
import { useLogout } from '@/hooks/useLogout';

export function LogoutButton() {
  const { logout, isPending } = useLogout()
  const isLoggedIn = useIsLoggedIn()

  return (
    <button
        onClick={logout}
      disabled={isPending || !isLoggedIn}
      className="rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600 disabled:opacity-50"
    >
      {isPending ? 'Logging out...' : 'Logout'}
    </button>
  )
}
