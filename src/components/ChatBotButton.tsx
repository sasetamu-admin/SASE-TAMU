import React, {useState} from 'react';
import {ChatBot} from './ChatBot';

export const ChatBotButton: React.FC = () => {
    const [isChatBotOpen, SetIsChatBotOpen] = useState(false);

    return (
        <>
            {/* Chatbot toggle button */}
            {!isChatBotOpen && (
                <button 
                    onClick={() => SetIsChatBotOpen(true)}
                    className="fixed bottom-4 right-4 z-50 bg-gradient-to-r from-sky-600 to-sky-700 hover:from-sky-700 hover:to-sky-800 text-white p-4 rounded-full shadow-2xl transition-all duration-300 hover:scale-110 animate-pulse"
                    aria-label= "Open chat assistant"
                >
                <div className='relative'>
                    <svg
                        className='w-6 h-6'
                        fill='none'
                        stroke="currentColor"
                        viewBox='0 0 24 24'
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            strokeWidth="2"
                            d="M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72A8.963 8.963 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8zM8 12h.01M12 12h.01M16 12h.01"
                        />
                    </svg>
                </div>
             </button>
            )}

            {/* Chatbot component */}
            <ChatBot 
                isOpen={isChatBotOpen}
                onClose={() => SetIsChatBotOpen(false)}
            />
        </>
    );
};