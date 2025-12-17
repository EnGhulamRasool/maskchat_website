import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Header from "../../components/layout/Header";
import Footer from "../../components/layout/Footer";

// Placeholders
const HERO_IMAGE = "/assets/leads-image.png";
const DASHBOARD_IMAGE = "/assets/leads-image.png";

const Education = () => {
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
                        Education
                    </motion.h1>

                    <div className="relative rounded-[2rem] overflow-hidden shadow-sm h-[400px] md:h-[500px]">
                        <img
                            src={HERO_IMAGE}
                            alt="Education Hero"
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
                                Scale Student Enrollment and Engagement
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Automate admissions inquiries, course information, and student support. Connect with prospective students on the platform they use most.
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
                                Instant Course Information
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Provide details about curriculum, fees, and schedules instantly. AI chatbots handle common FAQs, freeing up staff for complex queries.
                            </p>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-[400px]">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Course Information"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 3: Application Assistance (Dark Background) */}
            <section className="py-24 bg-[#1e0b36]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative p-10">
                            <div className="absolute inset-0 bg-[#2e1065] rounded-[2.5rem] opacity-50"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Application Assistance"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Guide Students Through Applications
                            </h2>
                            <p className="text-lg text-indigo-100 leading-relaxed">
                                Send reminders for deadlines and missing documents. Assist students step-by-step through the enrollment process to reduce drop-offs.
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
                                Personalized Learning Updates
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Keep students informed about class schedules, exam dates, and results personally via WhatsApp. Build a connected campus community.
                            </p>
                        </div>
                        <div className="relative rounded-[2.5rem] overflow-hidden shadow-xl bg-black h-[400px] flex items-center justify-center order-first lg:order-last">
                            <img
                                src={HERO_IMAGE}
                                alt="Student Updates"
                                className="w-full h-full object-cover opacity-80"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 5: Alumni Network (Dark Background) */}
            <section className="py-24 bg-[#1e0b36]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative p-10">
                            <div className="absolute inset-0 bg-[#2e1065] rounded-[2.5rem] opacity-50"></div>
                            <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Alumni Network"
                                    className="w-full h-auto object-cover"
                                />
                            </div>
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                Engage Alumni Network
                            </h2>
                            <p className="text-lg text-indigo-100 leading-relaxed">
                                Keep alumni connected with efficient broadcasts about events, fundraising, and networking opportunities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 6: Parent Communication (White Background) */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="space-y-6">
                            <h2 className="text-3xl md:text-4xl font-bold text-[#1e1b4b] leading-tight">
                                Seamless Parent Communication
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Send automated attendance updates and progress reports to parents. Ensure transparency and build trust with families.
                            </p>
                        </div>
                        <div className="relative order-first lg:order-last">
                            <div className="rounded-[2.5rem] overflow-hidden shadow-xl h-[400px]">
                                <img
                                    src={HERO_IMAGE}
                                    alt="Parent Communication"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* SECTION 7: LMS Integration (Dark Background) */}
            <section className="py-24 bg-[#1e0b36]">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-20 items-center">
                        <div className="relative p-10">
                            <div className="absolute inset-0 bg-[#2e1065] rounded-[2.5rem] opacity-50"></div>
                            <div className="relative z-10 h-64 bg-gradient-to-br from-indigo-400/20 to-purple-400/20 rounded-2xl border border-white/10 flex items-center justify-center gap-6">
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-bold text-orange-600">L</span>
                                </div>
                                <div className="h-px w-12 border-t-2 border-dashed border-white/30"></div>
                                <div className="w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg">
                                    <span className="text-3xl font-bold text-white">W</span>
                                </div>
                            </div>
                        </div>
                        <div className="space-y-6 text-white">
                            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
                                LMS Integration
                            </h2>
                            <p className="text-lg text-indigo-100 leading-relaxed">
                                Integrate with your Learning Management System. Notify students about new assignments, grades, and resources automatically.
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
                                With Maskchat Education, <br className="hidden md:block" />
                                modernize your campus <br className="hidden md:block" />
                                communication.
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

export default Education;
