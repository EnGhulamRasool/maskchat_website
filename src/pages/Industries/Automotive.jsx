import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Placeholders
const HERO_IMAGE = "/assets/leads-image.png";
const DASHBOARD_IMAGE = "/assets/leads-image.png";

const Automotive = () => {
    return (
        <div className="font-sans text-gray-900 bg-white">
            <Header />

            {/* HERO SECTION */}
            <section className="pt-20 pb-20 bg-white">
                <div className="max-w-7xl mx-auto px-6 text-center">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-5xl md:text-6xl font-bold text-[#2e1065] mb-16 tracking-tight"
                    >
                        Automotive
                    </motion.h1>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-[400px] md:h-[500px]">
                        <img
                            src={HERO_IMAGE}
                            alt="Automotive Hero"
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                    </div>
                </div>
            </section>

            {/* SECTION 1: Drive Leads (Light Purple Background) */}
            <section className="py-24 bg-gradient-to-b from-indigo-50 to-purple-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Book Test Drives Instantly
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Let customers schedule test drives directly through WhatsApp. Automate the booking process and send reminders to reduce no-shows.
                            </p>
                            <button className="px-8 py-3 bg-[#4338ca] text-white font-semibold rounded-lg hover:bg-indigo-700 transition shadow-md">
                                Book a demo
                            </button>
                        </div>
                        <div className="relative">
                            <img
                                src={DASHBOARD_IMAGE}
                                alt="Maskchat Dashboard"
                                className="rounded-xl shadow-2xl border border-white/50 bg-white"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 2: Customer Inquiries (White Background) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Instant Vehicle Information
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Share brochures, specs, and pricing instantly. Answer common questions about financing and availability 24/7 with AI agents.
                            </p>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-[400px]">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Vehicle Information"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Service Reminders (Dark Background) */}
            <section className="py-24 bg-[#1e0b36]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative p-10">
                            <div className="absolute inset-0 bg-[#2e1065] rounded-[2.5rem] opacity-50"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Service Reminders"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Automated Service Reminders
                            </h2>
                            <p className="text-lg text-indigo-100 leading-relaxed">
                                Send timely maintenance reminders to existing customers. Allow them to book service appointments seamlessly within the chat.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 4: Personalized Offers (White Background) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Targeted Promotions & Upgrades
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Inform customers about new models or trade-in offers. Use purchase history to send relevant promotions that drive repeat business.
                            </p>
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl bg-black h-[400px] flex items-center justify-center order-first lg:order-last">
                            <img
                                src={HERO_IMAGE}
                                alt="Promotions"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Post Sales (Dark Background) */}
            <section className="py-24 bg-[#1e0b36]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative p-10">
                            <div className="absolute inset-0 bg-[#2e1065] rounded-[2.5rem] opacity-50"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Post Sales Support"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Post-Sales Support
                            </h2>
                            <p className="text-lg text-indigo-100 leading-relaxed">
                                Ensure customer satisfaction after the purchase. Collect feedback and resolve minor issues quickly via WhatsApp.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Parts Ordering (White Background) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Easy Parts & Accessories Ordering
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Allow customers to inquire about and order spare parts or accessories. Send quotes and confirm orders instantly.
                            </p>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-[400px]">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Parts Ordering"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: DMS Integration (Dark Background) */}
            <section className="py-24 bg-[#1e0b36]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative p-10">
                            <div className="absolute inset-0 bg-[#2e1065] rounded-[2.5rem] opacity-50"></div>
                            <div className="relative z-10 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-2xl border border-white/10 flex items-center justify-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-bold text-gray-700">D</span>
                                </div>
                                <div className="h-px w-12 border-t-2 border-dashed border-white/30"></div>
                                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-bold text-white">W</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                DMS Integration
                            </h2>
                            <p className="text-lg text-indigo-100 leading-relaxed">
                                Connect with your Dealership Management System. Sync customer data, appointment slots, and inventory in real-time.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* FINAL CTA SECTION */}
            <section className="relative py-24 overflow-hidden bg-white">
                <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
                    <div className="absolute top-[-50%] -left-[10%] w-[150%] h-[200%] bg-gradient-to-r from-indigo-50/50 to-purple-50/50 transform rotate-12 origin-top-left"></div>
                </div>

                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div className="relative flex justify-center md:justify-start pl-10">
                            <svg className="absolute -top-12 -left-4 w-72 h-72 z-0 opacity-80" viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <linearGradient id="gradient-arc" x1="0%" y1="0%" x2="100%" y2="0%">
                                        <stop offset="0%" stopColor="#f97316" />
                                        <stop offset="100%" stopColor="#22c55e" />
                                    </linearGradient>
                                </defs>
                                <path d="M160,40 Q10,50 30,160" stroke="url(#gradient-arc)" strokeWidth="4" strokeLinecap="round" fill="none" />
                                <path d="M30,160 L20,145 M30,160 L45,150" stroke="#22c55e" strokeWidth="4" strokeLinecap="round" />
                            </svg>

                            <div className="relative z-10 w-64 h-80 md:w-80 md:h-96">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Transform Sales"
                                    className="w-full h-full object-cover rounded-2xl shadow-none grayscale-0"
                                    style={{ maskImage: 'linear-gradient(to bottom, black 80%, transparent 100%)' }}
                                />
                            </div>
                        </div>

                        <div className="space-y-8">
                            <h2 className="text-3xl md:text-5xl font-bold text-[#1e1b4b] leading-[1.15]">
                                With Maskchat Automotive, <br className="hidden md:block" />
                                accelerate your sales <br className="hidden md:block" />
                                via WhatsApp.
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

export default Automotive;
