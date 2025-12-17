import React, { useState } from "react";
import { motion } from "framer-motion";
import {
    MessageSquare, Mail, Smartphone,
    Users, Zap, Check, ArrowRight,
    Inbox, Share2, Bot
} from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// We'll use placeholder images or reuse existing assets for now since we don't have the specific Figma exports
const MOCK_DASHBOARD = "/assets/leads-image.png";

const Omnibox = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Header />

            {/* HERO SECTION */}
            <section className="relative pt-24 pb-32 overflow-hidden bg-white">
                {/* Abstract Backgrounds */}
                <div className="absolute top-0 right-0 -mr-20 -mt-20 w-[600px] h-[600px] bg-indigo-50/50 rounded-full blur-3xl opacity-60"></div>
                <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-[500px] h-[500px] bg-purple-50/50 rounded-full blur-3xl opacity-60"></div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center max-w-4xl mx-auto mb-16">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-indigo-600 bg-indigo-50 rounded-full border border-indigo-100">
                                AI Omnibox
                            </span>
                            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-[#1e1b4b] tracking-tight mb-8 leading-tight">
                                One Inbox. <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-purple-600">
                                    Every Conversation.
                                </span>
                            </h1>
                            <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed">
                                Connect WhatsApp, Email, Instagram, and more into a single collaborative workspace.
                                Respond faster, work together, and let AI handle the busywork.
                            </p>

                            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
                                <button className="px-8 py-4 bg-[#6366f1] text-white font-semibold rounded-2xl hover:bg-indigo-700 transition-all shadow-lg hover:shadow-indigo-500/30 hover:-translate-y-1">
                                    Start Free Trial
                                </button>
                                <button className="px-8 py-4 bg-white text-gray-700 font-semibold rounded-2xl border border-gray-200 hover:bg-gray-50 transition-all flex items-center gap-2">
                                    <span className="w-8 h-8 rounded-full bg-indigo-100 flex items-center justify-center">
                                        <Zap className="w-4 h-4 text-indigo-600 fill-current" />
                                    </span>
                                    Book Demo
                                </button>
                            </div>
                        </motion.div>
                    </div>

                    {/* Hero Image / Dashboard Mockup */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3, duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative rounded-[2rem] bg-gray-900 p-2 shadow-2xl ring-1 ring-gray-900/10 max-w-6xl mx-auto">
                            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-full bg-indigo-500/20 blur-[100px] -z-10"></div>
                            <img
                                src={MOCK_DASHBOARD}
                                alt="Omnibox Dashboard"
                                className="rounded-[1.8rem] w-full h-auto border border-gray-800 opacity-90"
                            />

                            {/* Floating Badges */}
                            <motion.div
                                animate={{ y: [0, -10, 0] }}
                                transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
                                className="absolute -top-10 -right-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs hidden md:flex"
                            >
                                <div className="w-12 h-12 bg-[#25D366] rounded-full flex items-center justify-center">
                                    <MessageSquare className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">New Lead</div>
                                    <div className="text-xs text-gray-500">via WhatsApp</div>
                                </div>
                            </motion.div>

                            <motion.div
                                animate={{ y: [0, 10, 0] }}
                                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut", delay: 1 }}
                                className="absolute bottom-20 -left-10 bg-white p-4 rounded-2xl shadow-xl flex items-center gap-4 max-w-xs hidden md:flex"
                            >
                                <div className="w-12 h-12 bg-gradient-to-tr from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                                    <Smartphone className="text-white w-6 h-6" />
                                </div>
                                <div>
                                    <div className="font-bold text-gray-900">Support Ticket</div>
                                    <div className="text-xs text-gray-500">via Instagram</div>
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* CHANNELS SECTION */}
            <section className="py-20 bg-gray-50/50">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <p className="text-sm font-semibold uppercase tracking-widest text-gray-400 mb-10">Integrates with everything you use</p>
                    <div className="flex flex-wrap justify-center gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
                        {/* Mock Logos */}
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-500"><MessageSquare /> WhatsApp</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-500"><Mail /> Gmail</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-500"><Smartphone /> Messenger</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-500"><Inbox /> Slack</div>
                        <div className="flex items-center gap-2 text-xl font-bold text-slate-500"><Share2 /> Shopify</div>
                    </div>
                </div>
            </section>

            {/* FEATURE 1: Unified View */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-50 rounded-[3rem] rotate-3 transform scale-95"></div>
                            <img src={MOCK_DASHBOARD} className="relative rounded-[2.5rem] shadow-2xl z-10 border border-gray-100" alt="Unified View" />
                        </div>

                        <div className="space-y-8">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                <Inbox className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Stop constantly switching tabs.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Bring every customer conversation from WhatsApp, Email, SMS, and Social Media into one organized stream. Never miss a message again.
                            </p>

                            <ul className="space-y-4 pt-4">
                                {['Universal Search across all channels', 'Consistent customer profiles & history', 'Real-time sync'].map((item, i) => (
                                    <li key={i} className="flex items-center gap-3 text-gray-700 font-medium">
                                        <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
                                            <Check className="w-3.5 h-3.5" />
                                        </div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURE 2: Collaboration */}
            <section className="py-32 bg-[#1e1b4b] text-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <div className="space-y-8 order-2 lg:order-1">
                            <div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-indigo-300 mb-6">
                                <Users className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold leading-tight">
                                Built for Team Collaboration.
                            </h2>
                            <p className="text-lg text-indigo-200 leading-relaxed">
                                Assign conversations to the right agent automatically. Collaborate with internal notes, mentions, and shared drafts without leaving the chat.
                            </p>

                            <div className="grid grid-cols-2 gap-6 pt-6">
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-3xl font-bold mb-1">2.5x</div>
                                    <div className="text-sm text-indigo-300">Faster Resolution</div>
                                </div>
                                <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                                    <div className="text-3xl font-bold mb-1">0</div>
                                    <div className="text-sm text-indigo-300">Missed Messages</div>
                                </div>
                            </div>
                        </div>

                        <div className="relative order-1 lg:order-2">
                            {/* Decorative Gradient */}
                            <div className="absolute -inset-10 bg-gradient-to-r from-purple-500/30 to-indigo-500/30 blur-3xl rounded-full"></div>
                            <img src={MOCK_DASHBOARD} className="relative rounded-[2.5rem] shadow-2xl z-10 border border-white/10 bg-gray-900" alt="Collaboration" />
                        </div>

                    </div>
                </div>
            </section>

            {/* FEATURE 3: AI Copilot */}
            <section className="py-32 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">

                        <div className="relative">
                            <div className="absolute inset-0 bg-blue-50 rounded-[3rem] -rotate-2 transform scale-95"></div>
                            <img src={MOCK_DASHBOARD} className="relative rounded-[2.5rem] shadow-2xl z-10 border border-gray-100" alt="AI Copilot" />

                            {/* AI Badge */}
                            <div className="absolute -right-8 top-12 bg-white p-4 rounded-xl shadow-lg border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                                <Bot className="w-8 h-8 text-indigo-600" />
                                <div>
                                    <div className="font-bold text-gray-900">AI Suggested Reply</div>
                                    <div className="text-xs text-gray-500">98% Confidence</div>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-8">
                            <div className="w-14 h-14 bg-indigo-100 rounded-2xl flex items-center justify-center text-indigo-600 mb-6">
                                <Zap className="w-7 h-7" />
                            </div>
                            <h2 className="text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Your AI-Powered Copilot.
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Let AI draft responses, tag conversations, and summarize long threads. Omnibox learns from your best agents to automate the routine.
                            </p>

                            <button className="text-indigo-600 font-bold flex items-center gap-2 hover:gap-3 transition-all">
                                See AI in Action <ArrowRight className="w-5 h-5" />
                            </button>
                        </div>

                    </div>
                </div>
            </section>

            {/* CTA SECTION */}
            <section className="py-10 mb-20">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="bg-[#4338ca] rounded-[3rem] p-12 md:p-24 text-center relative overflow-hidden">
                        {/* Background Rings */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border-[50px] border-white/5 rounded-full"></div>
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border-[30px] border-white/5 rounded-full"></div>
                        </div>

                        <div className="relative z-10 max-w-3xl mx-auto">
                            <h2 className="text-4xl md:text-5xl font-bold text-white mb-8 leading-tight">
                                Ready to organize your inbox?
                            </h2>
                            <p className="text-indigo-200 text-xl mb-10">
                                Join 500+ businesses using Maskchat Omnibox to delight their customers.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                <button className="px-10 py-4 bg-white text-indigo-900 font-bold rounded-2xl hover:bg-indigo-50 transition shadow-xl">
                                    Get Started Free
                                </button>
                                <button className="px-10 py-4 bg-transparent border border-white/30 text-white font-bold rounded-2xl hover:bg-white/10 transition">
                                    Contact Sales
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Omnibox;
