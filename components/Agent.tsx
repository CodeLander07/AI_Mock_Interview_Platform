import React from 'react'
import Image from 'next/image';
import { cn } from "@/lib/utils";


const isSpeaking = true; 
    enum CallStatus {
        INACTIVE='INACTIVE',
        CONNECTING='CONNECTING',
        ACTIVE='ACTIVE',
        FINSHED='FINSHED',
    }
const Agent = ({userName}:AgentProps) => {
    
    const callStatus = CallStatus.FINSHED; // Example status, can be INACTIVE, CONNECTING, ACTIVE, or FINSHED
    const messege = [
        'Hello, how are you?',
        'I am fine, thank you',
        'How is your day going?',
        'It is going well, thank you',
        'How is your family?',
        'They are fine, thank you',
        'How is your work?',
        'It is going well, thank you',
        'How is your health?',
        'It is going well, thank you',
    ];
    const lastMessege = messege[messege.length - 1];
    
  return (
    <>
     <div className='call-view'>
    <div className='card-interviewer'>
        <div className='avatar'>
            <Image src="/ai-avatar.png" className='object-cover' alt="Avatar" width={65} height={54} />
            {isSpeaking && <span className="animate-speak"/>}

        </div>
        <h3>AI Interviewer</h3>
    </div>

    

        <div className='card-border'>
            <div className='card-content'>
                <Image src="/user-avatar.png" className='rounded-full object-cover size-[120px]' alt="Avatar" width={540} height={540} />
            <h3>{userName}</h3>
            </div>
        </div>
    </div>
    {messege.length > 0 && (
        <div className="transcript-border">
            <div className='transcript'>
                <p key={lastMessege} className={cn('transition-opacity duration-500 opacity-0 ','animate-fadeIn opacity-100')}>
                    {lastMessege}
                </p>
            </div>
        </div>
    )
    }

    <div className='w-full flex justify-center'>
        { callStatus !== 'ACTIVE' ? (
            <button className='relative btn-call' >
                <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus === 'CONNECTING' & 'hidden')} />
                    
               <span>   {callStatus === 'INACTIVE' || callStatus === 'FINSHED' ? 'call':'Connecting...'}    </span>
            </button>
        ) : (
            <button className='btn-disconnect'> Disconnect</button>
        )}
    </div>
    </>
   
  )
}

export default Agent
