import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Placeholder image (reusing existing asset)
const BLOG_IMAGE = "/assets/leads-image.png";

const blogPosts = [
    {
        id: 1,
        title: "10 Ways Chatbots Increase Sales Without Discounting",
        category: "E-Commerce Automation",
        date: "12/9/2025",
        image: BLOG_IMAGE,
    },
    {
        id: 2,
        title: "Reducing Support Tickets with Intelligent Self-Service Bots",
        category: "Customer Support",
        date: "12/9/2025",
        image: BLOG_IMAGE,
    },
    {
        id: 3,
        title: "How AI Helps You Retarget Customers on Chat Channels",
        category: "Marketing & Engagement",
        date: "12/9/2025",
        image: BLOG_IMAGE,
    },
    {
        id: 4,
        title: "Automating COD, Returns & Order Tracking Through WhatsApp",
        category: "E-Commerce Automation",
        date: "12/9/2025",
        image: BLOG_IMAGE,
    },
    {
        id: 5,
        title: "Upsell & Cross-Sell Tactics Powered by Smart Chatflows",
        category: "E-Commerce Automation",
        date: "12/9/2025",
        image: BLOG_IMAGE,
    },
    {
        id: 6,
        title: "When to Use a Live Agent vs. AI: A Practical Guide",
        category: "Customer Support",
        date: "12/9/2025",
        image: BLOG_IMAGE,
    },
];

const Blog = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Header />

            {/* HERO SECTION */}
            <section className="pt-24 pb-16 bg-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h1 className="text-4xl md:text-5xl font-bold text-[#2e1065] mb-6 tracking-tight">
                            Our Resources
                        </h1>
                    </motion.div>
                </div>
            </section>

            {/* BLOG GRID SECTION */}
            <section className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-2xl md:text-3xl font-bold text-[#1e1b4b]">
                            Explore Our Latest Insights
                        </h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post, index) => (
                            <motion.div
                                key={post.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                className="group cursor-pointer flex flex-col h-full"
                            >
                                <div className="relative overflow-hidden rounded-2xl mb-6 shadow-sm border border-gray-100 h-64">
                                    <img
                                        src={post.image}
                                        alt={post.title}
                                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>
                                <div className="flex flex-col flex-grow">
                                    <div className="flex items-center gap-2 mb-3">
                                        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#6366f1] text-white">
                                            {post.category}
                                        </span>
                                    </div>
                                    <h3 className="text-xl font-bold text-[#1e1b4b] mb-3 leading-snug group-hover:text-[#4338ca] transition-colors">
                                        {post.title}
                                    </h3>
                                    <div className="mt-auto flex items-center text-sm text-gray-500">
                                        {post.date}
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION: Transform WhatsApp */}
            <section className="relative py-24 overflow-hidden bg-white mt-12">
                {/* Diagonal Background Stripe */}
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-50%] -left-[10%] w-[150%] h-[200%] bg-gradient-to-r from-indigo-50/50 to-purple-50/50 transform rotate-12 origin-top-left"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative flex justify-center md:justify-start pl-10">
                            {/* Decorative Arrow (Curved line) */}
                            <svg className="absolute -top-12 -left-4 w-72 h-72 z-0 opacity-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#f97316" /> {/* Orange */}
                                        <stop offset="100%" stopColor="#22c55e" /> {/* Green */}
                                    </linearGradient>
                                </defs>
                                <path d="M160,40 Q10,50 30,160" stroke="url(#gradient-arc)" strokeWidth="4" strokeLinecap="round" fill="none" />
                                <path d="M30,160 L20,145 M30,160 L45,150" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                            </svg>

                            {/* Image of Woman (Using placeholder but styled to look cut-out/clean) */}
                            <div className="relative z-10 w-64 h-80 md:w-80 md:h-96">
                                <img
                                    src={BLOG_IMAGE}
                                    alt="Transform Sales"
                                    className="w-full h-full object-cover rounded-2xl shadow-none grayscale-0"
                                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b] leading-[1.15]">
                                With the WhatsApp Store Front, <br className="hidden md:block" />
                                transform WhatsApp into your <br className="hidden md:block" />
                                most powerful sales channel.
                            </h2>
                            <button className="group flex items-center gap-2 px-8 py-4 bg-[#6366f1] text-white font-semibold rounded-lg hover:bg-[#4f46e5] transition-all shadow-lg hover:shadow-indigo-500/30">
                                Get started today - book your demo
                                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Blog;
