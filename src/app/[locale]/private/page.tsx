import { redirect } from 'next/navigation'
import { LogoutButton } from '@/components/LogoutButton/LogoutButton'

import { createClient } from '@/lib/supabase/server'

type Props = {
  params: {
    locale: string
  }
}

export default async function PrivatePage({ params }: Props) {
  const supabase = await createClient()

  const { data, error } = await supabase.auth.getUser()
  if (error || !data?.user) {
    redirect(`/${params.locale}/login`)
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-gray-100 p-4">
      <div className="max-w-md rounded-lg bg-white p-8 shadow-md">
        <h1 className="mb-4 text-2xl font-semibold text-gray-800">Welcome</h1>
        <p className="text-gray-700">Hello {data.user.email}</p>
        <LogoutButton />
      </div>
    </main>
  )
}