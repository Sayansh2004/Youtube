import React from 'react'

export default function ChatMessage({name,message}) {
  return (
    <div className='flex items-center shadow-md p-2'>
        <img src="https://plus.unsplash.com/premium_vector-1727955579176-073f1c85dcda?q=80&w=880&auto=format&fit=crop" alt="user img"
        className='rounded-full h-8 w-8'
        />
        <span className='font-bold px-2'>{name}</span>
        <span>{message}</span>
    </div>
  )
}
