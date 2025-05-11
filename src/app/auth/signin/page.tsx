import SignIn from '@/components/Auth/SignIn' // or SignUp for signup page
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Sign In', // or 'Sign Up'
  description: 'Access your medicine tracker account',
}

export default function Page() {
  return <SignIn /> // or <SignUp /> for signup page
}