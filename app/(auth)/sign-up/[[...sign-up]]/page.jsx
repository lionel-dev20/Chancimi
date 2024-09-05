import { SignUp } from '@clerk/nextjs'

export default function Page() {
  return (
  <div className='flex h-screen mx-auto items-center justify-center'>
   <SignUp />
  </div>
  )
}