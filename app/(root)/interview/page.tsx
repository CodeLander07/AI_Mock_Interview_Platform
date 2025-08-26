
import React from 'react'
import Agent from '@/components/Agent'
import { getCurrentUser } from '@/lib/actions/auth.action'
import { isAuthenticated } from '@/lib/actions/auth.action'
import { redirect } from 'next/navigation'

const page = async () => {

const user = await getCurrentUser();
  const isUserAuthenticated = await isAuthenticated();
  if (isUserAuthenticated) {
    redirect('/Subscription');
  }


  return (
    <>
    <h3>Interview Generation</h3>

 <Agent
        userName={user?.name!}
        userId={user?.id}
        // profileImage={user?.profileURL}
        type="generate"
      />
    </>
  )
}

export default page
