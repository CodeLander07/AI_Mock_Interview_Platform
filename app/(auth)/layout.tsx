import { isAuthenticated } from '@/lib/actions/auth.action';
import { redirect } from 'next/navigation';
// import { ReactNode } from "react";
// import { redirect } from "next/navigation";

const AuthLayout = async ({children}:{children:React.ReactNode}) => {
  const isUserAuthenticated = await isAuthenticated(); // Replace with actual authentication logic
    if (!isUserAuthenticated && window.location.pathname !== '/') {
      redirect('/sign-in');
    }
  return (
    <div className='auth-layout'>
      {children}
    </div>
  )
}

export default  AuthLayout
