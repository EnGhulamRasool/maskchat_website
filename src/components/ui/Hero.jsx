import React from 'react';
import { Bot, Store, MessageSquare, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative pt-32 pb-20 bg-white overflow-hidden">
      
      {/* 1. The Exact Background Gradient Blob */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] aspect-square rounded-full bg-[radial-gradient(closest-side,rgba(99,102,241,0.15)_0%,rgba(59,130,246,0.05)_50%,transparent_100%)] blur-3xl -z-10 -mt-96"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        
        {/* 2. Headline & Subtext */}
        <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 tracking-tight mb-6">
          One Chat. Endless Conversations.
        </h1>
        {/* CORRECTED LINE: Ensures the <p> tag is properly closed */}
        <p className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-12 leading-relaxed">
          Maskchat powers your customer conversations with AI — instant, secure, and at the ready wherever your customers message you.
        </p>

        {/* 3. Feature Selection Buttons (The four pill buttons) */}
        <div className="flex flex-wrap justify-center gap-4 mb-16">
          {/* Active Button (Gradient Background) */}
          <button className="flex items-center gap-2 px-6 py-3 bg-brand-gradient text-white rounded-xl font-semibold shadow-lg shadow-brand-purple/30">
            <Bot className="w-5 h-5" />
            AI Omnibox
          </button>
          {/* Inactive Buttons (White Background, subtle border) */}
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 border border-purple-100 rounded-xl font-semibold hover:bg-purple-50 transition">
            <Store className="w-5 h-5" />
            Whatsapp Storefront
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 border border-purple-100 rounded-xl font-semibold hover:bg-purple-50 transition">
            <MessageSquare className="w-5 h-5" />
            AI Chatbot
          </button>
          <button className="flex items-center gap-2 px-6 py-3 bg-white text-gray-600 border border-purple-100 rounded-xl font-semibold hover:bg-purple-50 transition">
            <Mail className="w-5 h-5" />
            Newsletter
          </button>
        </div>

        {/* 4. Dashboard Image Placeholder */}
        <div className="relative mx-auto max-w-5xl -mb-20">
          <div className="bg-white p-2 rounded-2xl shadow-2xl shadow-purple-200/50 border border-purple-100/50 backdrop-blur-xl">
             <img 
               src="/assets/Finance & Banking.png" 
               alt="MaskChat Application Dashboard" 
               className="rounded-xl w-full h-auto border border-gray-100"
             />
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;