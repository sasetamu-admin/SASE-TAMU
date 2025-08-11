import React, {useState, useRef, useEffect} from "react";
import {EBoardOfficers, GeneralOfficers} from "~/constants/CurrentOfficerList";
import {Advisors} from "~/constants/Advisor";

interface Message {
    id: number;
    text: string;
    isUser: boolean;
    timestamp: Date;
    isTyping?: boolean;
}

interface ChatBotProps {
    onClose: () => void;
    isOpen: boolean;
}

export const ChatBot: React.FC<ChatBotProps> = ({onClose, isOpen}) => {
    const [messages, setMessages] = useState<Message[]>([
        {
            id: 1,
            text: "Howdy! I'm Sabastian, SASE's helpful chatbot. I can help answer questions about our organization, events, and how to get involved. How can I assist you today?",
            isUser: false,
            timestamp: new Date(),
        },
    ]);

    const [inputText, setInputText] = useState("");
    const [isTyping, setIsTyping] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({behavior: "smooth"});
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    const getResponse = (userMessage: string): string => {
        const message = userMessage.toLowerCase();

        if (message.includes("hi") || message.includes("hello") || message.includes("hey")) {
            return "Hello! How can I assist you today?";
        }

        return "I'm not sure how to respond to that. Can you please rephrase your question?";
    };

    const typewriterEffect = (text: string, messageId: number) => {
        let currentText = '';
        let index = 0;

        const typeInterval = setInterval(() => {
            if (index < text.length) {
                currentText += text[index];
                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === messageId 
                        ? {...msg, text: currentText, isTyping: true}
                        : msg
                    )
                )
            }
            else {
                setMessages(prev =>
                    prev.map(msg =>
                        msg.id === messageId 
                        ? {...msg, isTyping: false}
                        : msg
                    )
                );
                setIsTyping(false);
                clearInterval(typeInterval);
            }
        }, 20)
    };

    const handleSendMessage = async () => {
        if (!inputText.trim()) return;

        const userMessage: Message = {
            id: messages.length + 1,
            text: inputText,
            isUser: true,
            timestamp: new Date(),
        };

        setMessages(prev => [...prev, userMessage]);
        const responseText = getResponse(inputText);
        setInputText("");
        setIsTyping(true);

        setTimeout(() => {
            const botMessageId = messages.length + 2;
            const botResponse: Message = {
                id: botMessageId,
                text: '',
                isUser: false,
                timestamp: new Date(),
                isTyping: true,
            };

            setMessages(prev => [...prev, botResponse]);

            setTimeout(() => {
                typewriterEffect(responseText, botMessageId);
            }, 300);
        }, 500);
    };

    const handleKeyPress = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleSendMessage();
        }
    }

    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed bottom-4 right-4 z-50 w-80 h-96 bg-gradient-to-br from-slate-50 to-white border-0 rounded-2xl shadow-2xl flex flex-col overflow-hidden backdrop-blur-sm">
            {/* header */}
            <div className="bg-gradient-to-r from-sky-600 to-sky-700 text-white p-4 flex justify-between items-center">
                <div className="flex items-center space-x-2">
                    <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                        <span className="text-sm font-bold">🤖</span>
                    </div>
                    <h3 className="font-semibold text-lg">Sabastian</h3>
                </div>
                <button
                    onClick={onClose}
                    className="text-white/80 hover:text-white hover:bg-white/20 rounded-full w-8 h-8 flex items-center justify-center transition-all duration-200 text-xl font-bold"
                >
                    x
                </button>
            </div>
           
            {/* messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-3 bg-gradient-to-b from-slate-50/50 to-white/80">
                {messages.map((message) => (
                    <div
                        key = {message.id}
                        className={`flex ${message.isUser ? "justify-end" : "justify-start"}`}>
                        <div
                            className={`max-w-xs p-3 rounded-2xl shadow-sm ${
                                message.isUser
                                    ? "bg-gradient-to-r from-sky-600 to-sky-700 text-white ml-4"
                                    : "bg-green-200 text-gray-900 mr-4 border border-gray-200 shadow-xl"
                            }`}
                        >
                            <div className="relative">
                                {message.text}
                                {message.isTyping && (
                                    <span className="inline-block w-2 h-4 bg-gray-600 ml-1 animate-pulse"></span>
                                )}
                            </div>
                        </div>
                    </div>
                ))}
                {isTyping && !messages.some(m => m.isTyping) && (
                    <div className="flex justify-start">
                        <div className="bg-white text-gray-900 p-3 rounded-2xl text-sm mr-4 border border-gray-200 shadow-md">
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 bg-gradient-to-r from-sky-500 to-sky-600 rounded-full animate-bounce"></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-sky-600 to-sky-700 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                                <div className="w-2 h-2 bg-gradient-to-r from-sky-700 to-sky-800 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
                            </div>
                        </div>
                    </div>
                )}
                <div ref={messagesEndRef} />
            </div>
            {/* input */}
            <div className="p-4 bg-white/90 backdrop-blur-sm border-t border-gray-200">
                <div className="flex space-x-3">
                    <input
                        type="text"
                        value={inputText}
                        onChange={(e) => setInputText(e.target.value)}
                        onKeyDown={handleKeyPress}
                        placeholder="Ask about SASE TAMU..."
                        className="flex-1 p-3 border border-gray-300 rounded-xl text-sm text-gray-900 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:border-transparent bg-white placeholder-gray-600 shadow-sm"
                    />
                    <button
                        onClick={handleSendMessage}
                        disabled={!inputText.trim() || isTyping}
                        className="bg-gradient-to-r from-sky-600 to-sky-700 text-white px-4 py-3 rounded-xl text-sm font-medium hover:from-sky-700 hover:to-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-600 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed shadow-md"
                    >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.5 19.5l9-7.5-9-7.5v6h-7v3h7v6z"/>
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    );
};
