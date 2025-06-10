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
      className="
        w-full py-2 px-4
        bg-blue-600 text-white rounded-md
        hover:bg-blue-700
        transition-colors
        font-medium
        shadow-sm
        disabled:bg-gray-300 disabled:text-gray-500 disabled:cursor-not-allowed
      "
    >
      {isPending ? 'Logging out...' : 'Logout'}
    </button>
  )
}
