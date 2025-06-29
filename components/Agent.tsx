"use client"
// import React, {  } from 'react';
import Image from 'next/image';
import { cn } from "@/lib/utils";
import { useRouter } from 'next/navigation';
import { useState ,useEffect } from 'react';
import { set } from 'zod';
import { vapi,  } from '@/lib/vapi.sdk';
import { ca } from 'zod/v4/locales';


enum CallStatus {
    INACTIVE = 'INACTIVE',
    CONNECTING = 'CONNECTING',
    ACTIVE = 'ACTIVE',
    FINISHED = 'FINISHED',
}

interface SavedMessage{
    role : 'user' | 'assistant' | 'system';
    content: string;
}

const Agent = ({userName , userId , type}:AgentProps) => {
    // For demonstration, use useState to allow callStatus to be any CallStatus value

    const router = useRouter();
    const [isSpeaking, setIsSpeaking] = useState(false);
    const [callStatus, setcallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
    const [message , setMessage] = useState<SavedMessage[]>([]);

    useEffect(() => {
        const onCallStart = () => setcallStatus(CallStatus.ACTIVE);
        const onCallEnd = () => setcallStatus(CallStatus.FINISHED);
        // const onCallConnecting = () => setcallStatus(CallStatus.CONNECTING);
        const onMessage = (message: Message) => {
            if(message.type === 'transcript' && message.transcriptType === 'final') {
                const newMessage = {role :message.role, content :message.transcript};

                setMessage((prev) => [...prev, newMessage]);

            }
        }

        const onSpeechStart = () => setIsSpeaking(true);
        const onSpeechEnd = () => setIsSpeaking(false);

        const onCallError = (error: Error) => {
            console.error('Call error:', error);
        };

        vapi.on('call-start', onCallStart);
        vapi.on('call-end', onCallEnd);
        // vapi.on('call-connecting', () => setcallStatus(CallStatus.CONNECTING));
        vapi.on('message', onMessage);
        vapi.on('speech-start', onSpeechStart);
        vapi.on('speech-end', onSpeechEnd);
        vapi.on('error', onCallError);
    },[]);
    useEffect(() => {
        if(callStatus === CallStatus.FINISHED) router.push('/'); 
    },[message,callStatus,type,userId]);

    const handleCall = async () => {
        
        setcallStatus(CallStatus.CONNECTING);

        await vapi.start(process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID!, {
            variableValues: {
                username: userName,
                userid: userId,
            }
        });
    };
    const handleDisconnect = async () => {
        setcallStatus(CallStatus.FINISHED);
        await vapi.stop();
        // router.push('/');
    }

    const latestMessage = message[message.length - 1]?.content;
    const isCallInactiveOrFinished = callStatus === CallStatus.INACTIVE || callStatus === CallStatus.FINISHED;


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
    {message.length > 0 && (
        <div className="transcript-border">
            <div className='transcript'>
                <p key={latestMessage} className={cn('transition-opacity duration-500 opacity-0 ','animate-fadeIn opacity-100')}>
                    {latestMessage}
                </p>
            </div>
        </div>
    )
    }

    <div className='w-full flex justify-center'>
        { callStatus !== CallStatus.ACTIVE ? (
            <button className='relative btn-call'  onClick={handleCall}>
                <span className={cn('absolute animate-ping rounded-full opacity-75', callStatus === 'CONNECTING' && 'hidden')} />
                    
               <span>   {isCallInactiveOrFinished ?'Call':'Connecting...'}    </span>
            </button>
        ) : (
            <button className='btn-disconnect' onClick={handleDisconnect}> Disconnect</button>
        )}
    </div>
    </>
   
  )
}

export default Agent
