import React from 'react';
import { motion } from 'framer-motion';
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Target, Users, ArrowRight } from "lucide-react";
const About = () => {
    return (
        <>
            <Header />
            <div className="min-h-screen bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="text-center mb-12"
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-slate-900">
                            About <span className="text-[#6366f1]">Us</span>
                        </h1>
                    </motion.div>

                    {/* Hero Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="mb-16"
                    >
                        <div className="relative aspect-[21/9] w-full overflow-hidden rounded-2xl bg-slate-100">
                            <img
                                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80"
                                alt="Team collaboration"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </motion.div>

                    {/* Content Section */}
                    <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                        {/* Badge Column */}
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-3 lg:col-span-4 flex justify-start md:justify-center"
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-slate-200 bg-white shadow-sm">
                                <span className="h-2 w-2 rounded-full bg-[#6366f1]"></span>
                                <span className="text-sm font-medium text-slate-700">About</span>
                            </div>
                        </motion.div>

                        {/* Text Content Column */}
                        <motion.div
                            initial={{ opacity: 0, x: 20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className="md:col-span-9 lg:col-span-8"
                        >
                            <p className="text-xl md:text-2xl text-slate-800 leading-relaxed font-medium">
                                Maskchat delivers cutting-edge <span className="text-[#6366f1] font-semibold">AI-powered tools</span> to
                                enhance customer interactions and streamline operations through conversational commerce.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Growth Section */}
            <section className="py-24 bg-[#1e1b4b] text-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Text Content */}
                        <div className="space-y-8">
                            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
                                AI Conversations That<br />
                                Drive Growth
                            </h2>
                            <div className="space-y-6 text-indigo-100 text-lg leading-relaxed">
                                <p>
                                    Our solution enables companies to automate support, manage
                                    conversations across channels, and increase sales — all
                                    through clever, human-like chat experiences.
                                </p>
                                <p>
                                    Through combining AI, APIs, and live communication, Maskchat
                                    enables brands to engage with customers on platforms they're
                                    already on — WhatsApp, Facebook, and Instagram —
                                    transforming ordinary chats into business-driving
                                    opportunities.
                                </p>
                            </div>
                            <button className="px-8 py-4 bg-[#6366f1] hover:bg-[#5558e3] text-white font-semibold rounded-xl transition-colors shadow-lg shadow-indigo-500/20">
                                Get Started Today
                            </button>
                        </div>

                        {/* Images Grid */}
                        <div className="relative">
                            <div className="grid grid-cols-2 gap-4">
                                {/* Left Vertical Image */}
                                <div className="row-span-2 relative">
                                    <img
                                        src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80"
                                        alt="Business meeting"
                                        className="h-full w-full object-cover rounded-2xl"
                                    />
                                    <div className="absolute bottom-4 left-4 w-10 h-10 bg-[#6366f1] rounded-full flex items-center justify-center">
                                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                                        </svg>
                                    </div>
                                </div>

                                {/* Right Top Image */}
                                <div className="aspect-square">
                                    <img
                                        src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80"
                                        alt="Handshake"
                                        className="h-full w-full object-cover rounded-2xl"
                                    />
                                </div>

                                {/* Right Bottom Card */}
                                <div className="relative overflow-hidden rounded-2xl bg-[#0f0c29] p-6 flex flex-col justify-end">
                                    <div className="absolute inset-0 bg-gradient-to-br from-indigo-600/50 to-purple-600/50"></div>
                                    <div className="relative z-10">
                                        <div className="text-4xl font-bold text-white mb-1">100+</div>
                                        <div className="text-sm text-indigo-100">Small Businesses<br />Supported</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* Mission & Vision Section */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative">
                            <div className="absolute inset-0 bg-indigo-600 rounded-3xl rotate-3 opacity-10"></div>
                            <img
                                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80"
                                alt="Team working"
                                className="relative rounded-3xl shadow-xl w-full"
                            />
                        </div>

                        {/* Cards */}
                        <div className="space-y-8">
                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-6 text-indigo-600">
                                    <Target className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Mission</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To transform business communication using smart, conversational
                                    technology that makes all interactions easy, efficient, and enjoyable.
                                </p>
                            </div>

                            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 hover:shadow-lg transition-shadow duration-300">
                                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-6 text-purple-600">
                                    <Users className="w-6 h-6" />
                                </div>
                                <h3 className="text-2xl font-bold text-slate-900 mb-4">Our Vision</h3>
                                <p className="text-slate-600 leading-relaxed">
                                    To lead the world in conversational commerce infrastructure,
                                    empowering businesses of all sizes to engage with their customers
                                    in rich, AI-driven ways.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Light CTA Section */}
            <section className="relative py-32 overflow-hidden bg-gradient-to-tr from-purple-50 via-white to-indigo-50">
                {/* Background Elements */}
                <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-purple-200/50 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-96 h-96 bg-indigo-200/50 rounded-full blur-3xl"></div>

                <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    {/* Left - Girl with Arrow */}
                    <div className="relative order-2 lg:order-1">
                        <img
                            src="/assets/leads-image.png"
                            alt="Happy customer"
                            className="rounded-3xl shadow-2xl relative z-10"
                        />
                        {/* Curved Arrow */}
                        <svg className="absolute -top-10 -left-10 w-40 h-40 text-orange-400 z-20" viewBox="0 0 100 100">
                            <path
                                d="M 80,20 A 40,40 0 1,1 20,80"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="4"
                                strokeLinecap="round"
                                strokeDasharray="10 5"
                            />
                            <path d="M 20,80 L 10,70 L 20,60" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
                        </svg>
                    </div>

                    {/* Right - Text + Button */}
                    <div className="order-1 lg:order-2">
                        <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6 leading-tight">
                            Ready to Transform Your<br />
                            Customer Conversations?
                        </h2>
                        <p className="text-lg text-slate-600 mb-10 leading-relaxed max-w-lg">
                            Leave your contact details and get a free demo to see how Maskchat
                            automates, organizes, and elevates every chat.
                        </p>
                        <button className="group px-8 py-4 bg-[#6366f1] hover:bg-[#5558e3] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 flex items-center gap-2">
                            Get Started Today
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </div>
                </div>
            </section>
            <Footer />

        </>
    );
};

export default About;
