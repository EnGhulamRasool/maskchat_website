import React from "react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import { Phone, Mail } from "lucide-react";

export default function Contact() {
    return (
        <>
            <Header />

            {/* Main Wrapper */}
            <div className="min-h-screen bg-white font-sans text-gray-900 pb-20">

                {/* Title Section with Gradient Background */}
                <section className="relative pt-40 pb-20">
                    {/* Top Background Gradient */}
                    <div className="absolute top-0 left-0 right-0 h-[600px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-indigo-100/60 via-purple-50/30 to-white -z-10"></div>

                    <h1 className="text-5xl md:text-6xl font-bold text-center text-[#2e1065] tracking-tight">
                        Contact Us
                    </h1>
                </section>

                {/* Content Section */}
                <section className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-10 items-start">

                        {/* LEFT COLUMN: Image + Contact Cards */}
                        <div className="space-y-6">

                            {/* Team Image Container */}
                            <div className="relative rounded-[2.5rem] overflow-hidden bg-[#6366f1] h-[550px] w-full flex items-end">
                                {/* Decorative Circles Background (CSS Art) */}
                                <div className="absolute inset-0 opacity-20 pointer-events-none">
                                    <div className="absolute -top-20 -left-20 w-[600px] h-[600px] rounded-full border-[60px] border-white/20"></div>
                                    <div className="absolute top-20 left-20 w-[300px] h-[300px] rounded-full border-[40px] border-white/20"></div>
                                </div>

                                {/* Image with Purple Mix Blend or Overlay */}
                                <div className="absolute inset-0 bg-indigo-600/20 mix-blend-multiply z-10"></div>
                                <img
                                    src="/assets/leads-image.png"
                                    alt="Contact Support Team"
                                    className="w-full h-full object-cover object-center relative z-0"
                                />
                            </div>

                            {/* Small Info Cards */}
                            <div className="grid grid-cols-2 gap-6">
                                {/* Phone Card - Soft Lilac */}
                                <div className="bg-[#d8b4fe] p-8 rounded-[2rem] text-white flex flex-col justify-center min-h-[180px] shadow-lg shadow-purple-200 transition-transform hover:-translate-y-1">
                                    <Phone className="w-8 h-8 mb-4 fill-white text-white" />
                                    <h3 className="text-xl font-bold mb-1">Contact Number</h3>
                                    <p className="font-medium text-white/90">248 434 7683</p>
                                </div>

                                {/* Mail Card - Bright Blue */}
                                <div className="bg-[#3b82f6] p-8 rounded-[2rem] text-white flex flex-col justify-center min-h-[180px] shadow-lg shadow-blue-200 transition-transform hover:-translate-y-1">
                                    <Mail className="w-8 h-8 mb-4 fill-white text-white" />
                                    <h3 className="text-xl font-bold mb-1">Contact Mail</h3>
                                    <p className="font-medium text-white/90">info@maskchat.com</p>
                                </div>
                            </div>
                        </div>

                        {/* RIGHT COLUMN: Contact Form */}
                        <div className="bg-white p-8 md:p-12 rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.08)] border border-gray-100">
                            <h2 className="text-3xl font-bold mb-8 text-gray-900">Get In Touch</h2>

                            <form className="space-y-5">
                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800 ml-1">Full Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your full name"
                                        className="w-full bg-[#f3f4f6] rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338ca] transition-all border-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800 ml-1">Email Address</label>
                                    <input
                                        type="email"
                                        placeholder="Enter your email address"
                                        className="w-full bg-[#f3f4f6] rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338ca] transition-all border-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800 ml-1">Company Name</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your company name"
                                        className="w-full bg-[#f3f4f6] rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338ca] transition-all border-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800 ml-1">Role</label>
                                    <input
                                        type="text"
                                        placeholder="Enter your role"
                                        className="w-full bg-[#f3f4f6] rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338ca] transition-all border-none"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label className="text-sm font-semibold text-gray-800 ml-1">Message</label>
                                    <textarea
                                        rows={4}
                                        placeholder="Write your message here"
                                        className="w-full bg-[#f3f4f6] rounded-xl px-4 py-4 text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#4338ca] transition-all border-none resize-none"
                                    ></textarea>
                                </div>

                                <div className="pt-4">
                                    <button
                                        type="button"
                                        className="w-full bg-[#3730a3] text-white font-bold text-lg py-4 rounded-xl hover:bg-[#312e81] transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
                                    >
                                        Book a demo
                                    </button>
                                </div>
                            </form>
                        </div>

                    </div>
                </section>

            </div>
            <Footer />
        </>
    );
}
