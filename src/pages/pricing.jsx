import React, { useState } from "react";
import { motion } from "framer-motion";
import { Check, X, HelpCircle, ChevronDown, ChevronUp } from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Compare data based on common SaaS features + image influence
const comparisonData = {
    "Core Features": [
        { feature: "AI Chatbot", free: true, pro: true, growth: true, enterprise: true },
        { feature: "Unified Inbox", free: "Limited", pro: true, growth: true, enterprise: true },
        { feature: "Broadcasts", free: false, pro: "500/mo", growth: "10k/mo", enterprise: "Unlimited" },
        { feature: "Team Members", free: "1", pro: "5", growth: "20", enterprise: "Unlimited" },
    ],
    "Analytics": [
        { feature: "Basic Reports", free: true, pro: true, growth: true, enterprise: true },
        { feature: "Export Data", free: false, pro: true, growth: true, enterprise: true },
        { feature: "Advanced Insights", free: false, pro: false, growth: true, enterprise: true },
    ],
    "Support": [
        { feature: "Email Support", free: true, pro: "Priority", growth: "Priority", enterprise: "24/7 Dedicated" },
        { feature: "Onboarding", free: false, pro: false, growth: "Assisted", enterprise: "Dedicated Manager" },
    ]
};

const faqs = [
    {
        question: "Can I change plans anytime?",
        answer: "Yes, you can upgrade, downgrade, or cancel your plan at any time. Changes take effect at the start of the next billing cycle."
    },
    {
        question: "Is there a free trial?",
        answer: "We offer a 14-day free trial on our Pro and Growth plans so you can experience the full power of Maskchat risk-free."
    },
    {
        question: "What payment methods do you accept?",
        answer: "We accept all major credit cards, Stripe, and PayPal. For Enterprise plans, we also support bank transfers."
    },
    {
        question: "Do I need technical skills?",
        answer: "No! Maskchat is designed to be user-friendly. Our no-code chatbot builder lets you create flows in minutes without writing a single line of code."
    }
];

const Pricing = () => {
    const [billingCycle, setBillingCycle] = useState("monthly"); // "monthly" or "yearly"
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (index) => {
        setOpenFaq(openFaq === index ? null : index);
    };

    return (
        <div className="font-sans text-gray-900 bg-white">
            <Header />

            {/* HERO / PRICING TOGGLE SECTION */}
            <section className="pt-24 pb-16 bg-white text-center">
                <div className="max-w-7xl mx-auto px-6">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 text-[#4338ca] text-sm font-semibold border border-indigo-100 mb-6">
                            Pricing Plans
                        </div>
                        <h1 className="text-4xl md:text-6xl font-bold text-[#1e1b4b] mb-6 tracking-tight">
                            All plans scale with your <br className="hidden md:block" /> business & needs
                        </h1>
                        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
                            Choose the perfect plan to engage your customers and grow your sales on WhatsApp.
                        </p>

                        {/* Toggle Switch */}
                        <div className="flex items-center justify-center gap-4 mb-16">
                            <span className={`text-sm font-semibold ${billingCycle === "monthly" ? "text-[#1e1b4b]" : "text-gray-500"}`}>Monthly</span>
                            <button
                                onClick={() => setBillingCycle(billingCycle === "monthly" ? "yearly" : "monthly")}
                                className="relative w-14 h-8 bg-gray-200 rounded-full p-1 transition-colors duration-300 focus:outline-none"
                            >
                                <motion.div
                                    layout
                                    className="w-6 h-6 bg-white rounded-full shadow-md"
                                    animate={{ x: billingCycle === "monthly" ? 0 : 24 }}
                                />
                            </button>
                            <div className="flex items-center gap-2">
                                <span className={`text-sm font-semibold ${billingCycle === "yearly" ? "text-[#1e1b4b]" : "text-gray-500"}`}>Yearly</span>
                                <span className="bg-green-100 text-green-700 text-xs font-bold px-2 py-0.5 rounded-full">Save 20%</span>
                            </div>
                        </div>

                        {/* Pricing Cards */}
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto text-left">
                            {/* FREE PLAN */}
                            <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">Free</h3>
                                <p className="text-sm text-gray-500 mb-6">For individuals starting out.</p>
                                <div className="text-4xl font-bold text-[#1e1b4b] mb-6">$0<span className="text-base font-normal text-gray-500">/mo</span></div>
                                <button className="w-full py-3 rounded-xl font-semibold text-[#4338ca] bg-indigo-50 hover:bg-indigo-100 transition-colors mb-8">
                                    Get Started
                                </button>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> 1 Team Member</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Basic Chatbot</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> 100 Conversations/mo</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Unified Inbox</li>
                                </ul>
                            </div>

                            {/* PRO PLAN */}
                            <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300 relative overflow-hidden">
                                <div className="absolute top-0 right-0 bg-[#4338ca] text-white text-xs font-bold px-3 py-1 rounded-bl-xl">POPULAR</div>
                                <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">Pro</h3>
                                <p className="text-sm text-gray-500 mb-6">For growing teams.</p>
                                <div className="text-4xl font-bold text-[#1e1b4b] mb-6">${billingCycle === "monthly" ? "29" : "24"}<span className="text-base font-normal text-gray-500">/mo</span></div>
                                <button className="w-full py-3 rounded-xl font-semibold text-white bg-[#4338ca] hover:bg-indigo-700 transition-colors mb-8 shadow-lg shadow-indigo-500/20">
                                    Start Free Trial
                                </button>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> 5 Team Members</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Advanced Chatflow</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> 1000 Conversations/mo</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Automated Broadcasts</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> CRM Integration</li>
                                </ul>
                            </div>

                            {/* GROWTH PLAN */}
                            <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">Growth</h3>
                                <p className="text-sm text-gray-500 mb-6">For scaling businesses.</p>
                                <div className="text-4xl font-bold text-[#1e1b4b] mb-6">${billingCycle === "monthly" ? "79" : "65"}<span className="text-base font-normal text-gray-500">/mo</span></div>
                                <button className="w-full py-3 rounded-xl font-semibold text-[#4338ca] bg-white border border-gray-200 hover:bg-gray-50 transition-colors mb-8">
                                    Start Free Trial
                                </button>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> 20 Team Members</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Unlimited Chatflows</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> 10k Conversations/mo</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Advanced Analytics</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Dedicated API Access</li>
                                </ul>
                            </div>

                            {/* ENTERPRISE PLAN */}
                            <div className="p-8 rounded-3xl border border-gray-100 bg-white hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                                <h3 className="text-xl font-bold text-[#1e1b4b] mb-2">Enterprise</h3>
                                <p className="text-sm text-gray-500 mb-6">For large organizations.</p>
                                <div className="text-4xl font-bold text-[#1e1b4b] mb-6">Custom</div>
                                <button className="w-full py-3 rounded-xl font-semibold text-[#4338ca] bg-white border border-gray-200 hover:bg-gray-50 transition-colors mb-8">
                                    Contact Sales
                                </button>
                                <ul className="space-y-4 text-sm text-gray-600">
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Unlimited Team Members</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Custom AI Training</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Unlimited Conversations</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> Dedicated Account Manager</li>
                                    <li className="flex items-center gap-3"><Check className="w-4 h-4 text-green-500" /> SSO & Audit Logs</li>
                                </ul>
                            </div>
                        </div>

                    </motion.div>
                </div>
            </section>

            {/* COMPARISON TABLE */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-[#1e1b4b] mb-4">Find the plan that suits you</h2>
                        <p className="text-gray-600">Access full feature breakdown to make the right choice.</p>
                    </div>

                    <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="grid grid-cols-5 p-6 border-b border-gray-100 bg-gray-50/50 text-sm font-bold text-[#1e1b4b]">
                            <div className="col-span-1">Features</div>
                            <div className="text-center">Free</div>
                            <div className="text-center text-[#4338ca]">Pro</div>
                            <div className="text-center">Growth</div>
                            <div className="text-center">Enterprise</div>
                        </div>

                        {Object.entries(comparisonData).map(([category, features], catIndex) => (
                            <div key={category}>
                                <div className="px-6 py-3 bg-gray-50 text-xs font-bold uppercase tracking-wider text-gray-500 border-b border-gray-100 mt-0">
                                    {category}
                                </div>
                                {features.map((item, i) => (
                                    <div key={i} className="grid grid-cols-5 p-6 border-b border-gray-100 text-sm hover:bg-gray-50 transition-colors">
                                        <div className="font-medium text-gray-800 flex items-center gap-2">
                                            {item.feature}
                                            <HelpCircle className="w-3 h-3 text-gray-300" />
                                        </div>
                                        <div className="text-center text-gray-600 flex justify-center">
                                            {item.free === true ? <Check className="w-5 h-5 text-green-500" /> : item.free === false ? <X className="w-5 h-5 text-gray-300" /> : item.free}
                                        </div>
                                        <div className="text-center text-[#4338ca] font-medium flex justify-center">
                                            {item.pro === true ? <Check className="w-5 h-5 text-green-500" /> : item.pro === false ? <X className="w-5 h-5 text-gray-300" /> : item.pro}
                                        </div>
                                        <div className="text-center text-gray-600 flex justify-center">
                                            {item.growth === true ? <Check className="w-5 h-5 text-green-500" /> : item.growth === false ? <X className="w-5 h-5 text-gray-300" /> : item.growth}
                                        </div>
                                        <div className="text-center text-gray-600 flex justify-center">
                                            {item.enterprise === true ? <Check className="w-5 h-5 text-green-500" /> : item.enterprise === false ? <X className="w-5 h-5 text-gray-300" /> : item.enterprise}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ SECTION */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-[#1e1b4b] mb-12 text-center">Frequently asked questions</h2>

                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-gray-50 rounded-2xl overflow-hidden border border-transparent hover:border-gray-200 transition-colors duration-300"
                            >
                                <button
                                    onClick={() => toggleFaq(index)}
                                    className="w-full flex items-center justify-between p-6 text-left"
                                >
                                    <span className="font-semibold text-lg text-[#1e1b4b]">{faq.question}</span>
                                    {openFaq === index ?
                                        <ChevronUp className="w-5 h-5 text-[#4338ca]" /> :
                                        <ChevronDown className="w-5 h-5 text-gray-500" />
                                    }
                                </button>
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: openFaq === index ? "auto" : 0, opacity: openFaq === index ? 1 : 0 }}
                                    className="overflow-hidden"
                                >
                                    <div className="px-6 pb-6 text-gray-600 leading-relaxed">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            </div>
                        ))}
                    </div>

                    <div className="mt-16 text-center">
                        <p className="text-gray-500 mb-6">Still have questions?</p>
                        <div className="flex justify-center gap-8 text-sm font-semibold">
                            <a href="#" className="flex items-center gap-2 text-[#4338ca] hover:underline">
                                Contact Support
                            </a>
                            <a href="#" className="flex items-center gap-2 text-[#4338ca] hover:underline">
                                Sales Inquiry
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default Pricing;
