'use server'

import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'

import { createClient } from '@/lib/supabase/server'

export async function login(formData: FormData) {
  const locale = formData.get('locale') as string
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  console.log('Attempting login with email:', data.email)
  
  const { data: authData, error } = await supabase.auth.signInWithPassword(data)

  if (error) {
    console.error('Login error:', error)
    // Add error to searchParams for display
    const searchParams = new URLSearchParams({
      error: error.message,
      code: error.status?.toString() || '500'
    })
    redirect(`/${locale}/login?${searchParams.toString()}`)
  }

  console.log('Login successful, session:', authData?.session)

  revalidatePath(`/${locale}`, 'layout')
  redirect(`/${locale}`)
}

export async function signup(formData: FormData) {
  const locale = formData.get('locale') as string
  const supabase = await createClient()

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    email: formData.get('email') as string,
    password: formData.get('password') as string,
  }

  const { error } = await supabase.auth.signUp(data)

  if (error) {
    const searchParams = new URLSearchParams({
      error: error.message,
      code: error.status?.toString() || '500'
    })
    redirect(`/${locale}/login?${searchParams.toString()}`)
  }

  revalidatePath(`/${locale}`, 'layout')
  redirect(`/${locale}`)
}