// app/private/page.tsx
import { redirect } from 'next/navigation'
import { createServerSupabase } from 'src/lib/supabase/server'

export default async function PrivatePage() {
  const supabase = createServerSupabase()
  const { data: { user }, error } = await supabase.auth.getUser()
  if (error || !user) return redirect('/login')
  return <p>Hello, {user.email}</p>
}