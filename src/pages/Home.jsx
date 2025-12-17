import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Plus,
  Minus,
  Play,
  Users,
  Zap,
  Layout,
  Globe,
  Store,
  MessageSquare,
} from "lucide-react";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

// Assets
const MAIN_SECTION_IMG = "/assets/home/main-section.svg";
const LEADS_IMG = "/assets/leads-image.png";
const CHOOSE_MORE_IMG = "/assets/home/chose-more.svg";

const tabs = [
  { name: "AI Omnibox", icon: "/assets/home/omnibox.svg", id: "omnibox" },
  {
    name: "Whatsapp Storefront",
    icon: "/assets/home/store.svg",
    id: "storefront",
  },
  { name: "AI Chatbot", icon: "/assets/home/chat.svg", id: "chatbot" },
  { name: "Newsletter", icon: "/assets/home/newsletter.svg", id: "newsletter" },
];

const services = [
  {
    title: "Healthcare",
    desc: "Streamline patient communication through automated appointment reminders and instant assistance.",
    icon: "/assets/home/healthcare.svg",
  },
  {
    title: "Real Estate",
    desc: "Win buyers instantly with automated property inquiries, updates, and booking confirmations.",
    icon: "/assets/home/healthcare.svg",
  },
  {
    title: "Automotive",
    desc: "Streamline reminders, offers, and customer service — all via WhatsApp.",
    icon: "/assets/home/automotive.svg",
  },
  {
    title: "Education",
    desc: "Increase student and parent participation with automated messages, reminders, and sharing of information.",
    icon: "/assets/home/healthcare.svg",
  },
];

const faqs = [
  {
    q: "What is Maskchat?",
    a: "Maskchat is an AI-powered messaging platform that helps businesses automate and manage customer conversations across WhatsApp and other channels — instantly, securely, and efficiently.",
  },
  {
    q: "Which industries can use Maskchat?",
    a: "Maskchat works perfectly serves Healthcare, Real Estate, E-commerce, Education, Automotive, Finance, Retail, and any business that wants to talk to customers on WhatsApp.",
  },
  {
    q: "How does Maskchat help with lead conversion?",
    a: "Instant replies, automated follow-ups, personalized campaigns, and interactive CTAs help convert 3x more leads directly inside WhatsApp chats.",
  },
  {
    q: "Can Maskchat automate my WhatsApp marketing?",
    a: "Yes! Send bulk broadcasts, drip campaigns, message templates, and interactive buttons — all 100% WhatsApp Business API compliant.",
  },
  {
    q: "Does Maskchat integrate with platforms like Shopify?",
    a: "Absolutely. Native integrations with Shopify, WooCommerce, HubSpot, Zapier, Google Sheets and 50+ tools.",
  },
];

export default function Home() {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="font-sans text-gray-900 overflow-x-hidden">
      <Header />

      {/* HERO SECTION */}
      <section className="relative pt-20 pb-32 bg-white overflow-hidden">
        {/* Background Image Pattern */}
        <div
          className="absolute inset-0 -z-10 pointer-events-none bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: "url(/assets/main-section-bg.jpg)",
            opacity: 0.3,
          }}
        ></div>

        <div className="max-w-7xl mx-auto px-6 text-center relative z-10">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl lg:text-[5rem] font-bold text-gray-900 leading-[1.1] tracking-tight mb-6"
          >
            One Chat. Endless Conversations.
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed mb-8"
          >
            Maskchat powers your customer conversations with AI — instant,
            secure,
            <br className="hidden md:block" />
            and at the ready wherever your customers message you.
          </motion.p>

          {/* TABS */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {tabs.map((tab, i) => {
              return (
                <button
                  key={i}
                  onClick={() => setActiveTab(i)}
                  className={`px-6 py-3.5 rounded-lg font-medium flex items-center gap-2.5 text-sm transition-all duration-300 ${
                    i === activeTab
                      ? "bg-[#6366f1] text-white shadow-lg shadow-indigo-500/30 ring-1 ring-indigo-500"
                      : "bg-[#F3F4F6] text-gray-600 hover:bg-gray-200 border border-transparent"
                  }`}
                >
                  <img
                    src={tab.icon}
                    alt={tab.name}
                    className={`w-4 h-4 transition-all duration-300 ${i === activeTab ? "brightness-0 invert" : ""}`}
                  />
                  {tab.name}
                </button>
              );
            })}
          </motion.div>

          {/* HERO IMAGE - Chat Interface Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="relative mt-8"
          >
            <div className="relative max-w-6xl mx-auto rounded-xl overflow-hidden shadow-xl border border-gray-200 bg-white transform -rotate-1 hover:rotate-0 transition-transform duration-300">
              <img
                src={MAIN_SECTION_IMG}
                alt="Maskchat Dashboard Interface"
                className="w-full h-auto"
              />
            </div>
          </motion.div>

          {/* TRUSTED BY - Infinite Scroll */}
          <div className="mt-28 mb-16">
            <div className="relative overflow-hidden">
              {/* Gradient overlays for smooth fade effect */}
              <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
              <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

              {/* Infinite scroll container */}
              <div className="flex items-center gap-12 animate-scroll">
                {/* First set of logos */}
                <div className="flex items-center gap-12 shrink-0">
                  <img
                    src="/assets/home/focalpoint.svg"
                    alt="FocalPoint"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/crop.svg"
                    alt="Crop"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/layer.svg"
                    alt="Layers"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/catalog.svg"
                    alt="Catalog"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/sisyphus.svg"
                    alt="Sisyphus"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/spherule.svg"
                    alt="Spherule"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-12 shrink-0">
                  <img
                    src="/assets/home/focalpoint.svg"
                    alt="FocalPoint"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/crop.svg"
                    alt="Crop"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/layer.svg"
                    alt="Layers"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/catalog.svg"
                    alt="Catalog"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/sisyphus.svg"
                    alt="Sisyphus"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                  <img
                    src="/assets/home/spherule.svg"
                    alt="Spherule"
                    className="h-8 w-auto opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* SERVICES */}
          <div className="mt-32 mb-10">
            <div className="flex justify-center mb-16">
              <span className="inline-flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full text-sm font-semibold text-gray-600 shadow-sm">
                <div className="w-2 h-2 bg-[#6366f1] rounded-full border-2 border-[#a5b4fc]"></div>
                Our Services
              </span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto text-left">
              {services.map((service, i) => (
                <div
                  key={i}
                  className="group bg-[#F9FAFB] hover:bg-white p-8 rounded-[2rem] transition-all duration-300 hover:shadow-xl border border-transparent hover:border-gray-100"
                >
                  <div className="flex justify-end mb-4">
                    <div className="w-14 h-14 bg-[#6366f1] rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform">
                      <img
                        src={service.icon}
                        alt={service.title}
                        className="w-6 h-6 brightness-0 invert"
                      />
                    </div>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-8">
                    {service.desc}
                  </p>
                  <a
                    href="#"
                    className="inline-flex items-center text-[#6366f1] font-semibold text-sm hover:gap-2 transition-all"
                  >
                    Read More <ArrowRight className="w-4 h-4 ml-1" />
                  </a>
                </div>
              ))}
            </div>

            {/* Pagination Dots */}
            <div className="flex justify-center gap-2 mt-12">
              <div className="w-2.5 h-2.5 bg-[#6366f1] rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-[#a7f3d0] rounded-full"></div>
              <div className="w-2.5 h-2.5 bg-[#a7f3d0] rounded-full"></div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSE MORE LEADS SECTION */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
              Close more leads, less effort
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img
                src={CHOOSE_MORE_IMG}
                alt="Team collaboration"
                className="rounded-3xl object-cover shadow-2xl w-full"
              />
              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="absolute top-10 left-[-44px] bg-[#6366f1]/80 backdrop-blur-sm text-white p-5 rounded-xl shadow-xl"
              >
                <div className="text-3xl font-bold mb-1">50%</div>
                <div className="text-sm font-medium leading-tight">
                  Faster Task Completion
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="absolute bottom-10 right-[-40px] bg-[#6366f1]/80 backdrop-blur-sm text-white p-5 rounded-xl shadow-xl"
              >
                <div className="text-3xl font-bold mb-1">30%</div>
                <div className="text-sm font-medium leading-tight">
                  Quicker Data Entry & Verification
                </div>
              </motion.div>
            </div>

            <div className="space-y-12">
              <h3 className="text-3xl font-bold text-gray-900">
                With Maskchat, your team can:
              </h3>

              <div className="space-y-8">
                {[
                  {
                    icon: "/assets/home/bulb.svg",
                    text: "Reply Instantly and keep prospects engaged.",
                  },
                  {
                    icon: "/assets/home/chart.svg",
                    text: "Follow Up Automatically to boost response rates.",
                  },
                  {
                    icon: "/assets/home/target.svg",
                    text: "Stay Organized with every chat in one place.",
                  },
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center shrink-0">
                      <img
                        src={item.icon}
                        alt=""
                        className="w-6 h-6"
                        style={{
                          filter:
                            "brightness(0) saturate(100%) invert(47%) sepia(95%) saturate(1352%) hue-rotate(230deg) brightness(98%) contrast(96%)",
                        }}
                      />
                    </div>
                    <p className="text-lg text-gray-800 font-medium pt-2">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              <button className="px-10 py-4 bg-[#6366f1] text-white font-semibold rounded-xl hover:bg-indigo-700 transition shadow-lg shadow-indigo-200">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* DARK SECTION - INSTANT SUPPORT & MARKETING */}
      <section className="bg-[#1e1b4b] overflow-hidden">
        {/* Instant Support */}
        <div className="py-24 relative">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            {/* Text Content */}
            <div className="text-white">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                Instant Support
              </h2>
              <p className="text-white text-lg mb-10 leading-relaxed max-w-lg">
                Be present where your customers are — responsive, reliable, and
                real-time on WhatsApp.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  "Round-the-clock automated help.",
                  "Seamless collaboration across your support team.",
                  "Response times your customers will remember.",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-4 text-white text-lg"
                  >
                    <div className="flex items-center justify-center shrink-0">
                      <Check className="text-[#6366f1] w-6 h-6" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3.5 bg-[#6366f1] text-white font-semibold rounded-lg hover:bg-indigo-600 transition shadow-lg">
                Learn More
              </button>
            </div>

            {/* Dashboard UI Cards */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-[#6366f1]/20 to-purple-500/20 rounded-3xl blur-2xl"></div>
              
              {/* Main Card Container */}
              <div className="relative bg-[#111827]/80 backdrop-blur-sm rounded-3xl p-6 border border-white/10 shadow-2xl">
                {/* Sales Card - Top */}
                <div className="bg-[#1f2937]/60 rounded-2xl p-4 border border-white/5 mb-4">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-white text-sm font-medium">Sales</span>
                    <span className="text-green-400 text-sm font-semibold bg-green-400/20 px-2 py-1 rounded">+40</span>
                  </div>
                  <div className="relative h-20 bg-[#0f172a] rounded-lg overflow-hidden">
                    {/* Area Graph - More wavy and vibrant */}
                    <svg className="w-full h-full" viewBox="0 0 200 80" preserveAspectRatio="none">
                      <defs>
                        <linearGradient id="salesGradient" x1="0%" y1="0%" x2="0%" y2="100%">
                          <stop offset="0%" stopColor="#6366f1" stopOpacity="0.5" />
                          <stop offset="50%" stopColor="#8b5cf6" stopOpacity="0.3" />
                          <stop offset="100%" stopColor="#6366f1" stopOpacity="0" />
                        </linearGradient>
                      </defs>
                      {/* Wavy line path */}
                      <path
                        d="M 0 65 Q 25 55, 40 50 Q 60 45, 80 40 Q 100 30, 120 28 Q 140 25, 160 22 Q 180 20, 200 18"
                        stroke="#6366f1"
                        strokeWidth="3"
                        fill="none"
                      />
                      {/* Area fill */}
                      <path
                        d="M 0 65 Q 25 55, 40 50 Q 60 45, 80 40 Q 100 30, 120 28 Q 140 25, 160 22 Q 180 20, 200 18 L 200 80 L 0 80 Z"
                        fill="url(#salesGradient)"
                      />
                    </svg>
                  </div>
                </div>

                {/* Combined Card - Marketing & AI Automation - Bottom, slightly offset */}
                <div className="bg-[#1f2937]/60 rounded-2xl p-4 border border-white/5 ml-8 mt-[-20px]">
                  <div className="space-y-4">
                    {/* Marketing & ads */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                          <img src="/assets/home/chart.svg" alt="Chart" className="w-5 h-5 brightness-0 invert" />
                        </div>
                        <span className="text-white text-sm font-medium">Marketing & ads</span>
                      </div>
                      <div className="w-full h-2 bg-[#0f172a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full" style={{ width: '65%' }}></div>
                      </div>
                    </div>

                    {/* AI Automation */}
                    <div>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-8 h-8 bg-white/10 rounded-lg flex items-center justify-center">
                          <img src="/assets/home/stars.svg" alt="Stars" className="w-5 h-5 brightness-0 invert" />
                        </div>
                        <span className="text-white text-sm font-medium">AI Automation</span>
                      </div>
                      <div className="w-full h-2 bg-[#0f172a] rounded-full overflow-hidden">
                        <div className="h-full bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] rounded-full" style={{ width: '80%' }}></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* WhatsApp Marketing */}
        <div className="py-24 relative bg-[#2e1065]/20">
          <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">
            {/* Image Left */}
            <div className="relative order-2 lg:order-1">
              <div className="absolute -inset-4 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-full blur-3xl"></div>
              <div className="bg-[#111827] rounded-3xl p-6 border border-white/10 shadow-2xl relative flex items-center justify-center min-h-[400px]">
                {/* Central Icon Cluster Mock */}
                <div className="relative">
                  <div className="w-20 h-20 bg-green-500 rounded-2xl flex items-center justify-center shadow-lg shadow-green-900/50 z-10 relative">
                    <MessageSquare className="text-white w-10 h-10" />
                  </div>
                  {/* Orbiting Icons */}
                  <div className="absolute top-0 left-0 w-full h-full animate-spin-slow">
                    <div className="absolute -top-12 -left-12 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                      <Users className="text-gray-400 w-5 h-5" />
                    </div>
                    <div className="absolute -bottom-12 -right-12 w-12 h-12 bg-gray-800 rounded-full flex items-center justify-center border border-gray-700">
                      <Zap className="text-gray-400 w-5 h-5" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Text Right */}
            <div className="text-white order-1 lg:order-2">
              <h2 className="text-4xl md:text-5xl font-bold mb-6">
                WhatsApp for Marketing
              </h2>
              <p className="text-indigo-200 text-lg mb-10 leading-relaxed">
                Maskchat helps you reach customers where they already are — on
                WhatsApp.
              </p>

              <ul className="space-y-6 mb-12">
                {[
                  "Reach 90%+ of Your Audience with high open rates",
                  "Create Campaigns Faster with easy to use message templates",
                  "Build Your Contact List through",
                  "Boost Conversions with interactive, CTA driven messages",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-start gap-4 text-indigo-100 text-lg"
                  >
                    <div className="w-6 h-6 rounded-full border border-purple-400 flex items-center justify-center shrink-0 mt-0.5">
                      <Check className="text-purple-400 w-3 h-3" />
                    </div>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <button className="px-8 py-3.5 bg-[#6366f1] text-white font-semibold rounded-full hover:bg-indigo-600 transition shadow-lg shadow-indigo-900/50">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* TRANSFORM SECTION */}
      <section className="py-32 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-20 leading-tight">
            Transform the way your
            <br /> business communicates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Purple Card */}
            <div className="bg-[#4338ca] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
                  Simplify communication, organize every conversation, and
                  deliver seamless customer experiences.
                </h3>
              </div>

              <div className="relative mt-8 group">
                {/* Mock UI */}
                <div className="bg-white rounded-2xl p-4 shadow-xl transform group-hover:translate-y-[-10px] transition-transform duration-500 max-w-sm mx-auto">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                    <div>
                      <div className="h-3 w-24 bg-gray-100 rounded"></div>
                      <div className="h-2 w-16 bg-gray-100 rounded mt-2"></div>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div className="h-24 w-full bg-gray-50 rounded-xl relative overflow-hidden">
                      <div className="absolute top-2 left-2 right-2 h-2 bg-gray-200 rounded-full w-1/2"></div>
                      <div className="absolute top-6 left-2 right-2 bottom-2 bg-gray-200 rounded-lg"></div>
                    </div>
                  </div>
                </div>
                {/* Floating elements */}
                <div className="absolute top-0 -right-2 bg-white text-gray-900 px-6 py-4 rounded-2xl shadow-lg transform rotate-6 border border-gray-100">
                  <div className="font-semibold text-sm text-gray-500 mb-1">
                    Payment Confirmed!
                  </div>
                  <div className="text-3xl font-black text-gray-900">$399</div>
                  <button className="w-full mt-2 bg-[#4338ca] text-white text-xs py-2 rounded-lg">
                    View Now
                  </button>
                </div>
              </div>
            </div>

            {/* Green Card */}
            <div className="bg-[#10b981] rounded-[2.5rem] p-10 md:p-14 text-white relative overflow-hidden flex flex-col justify-between min-h-[550px] shadow-2xl">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold leading-relaxed mb-4">
                  With smarter communication, you'll retain more customers,
                  increase revenue, and grow faster with less effort.
                </h3>
              </div>

              <div className="relative mt-8 flex justify-center items-center h-64">
                {/* Globe Abstract */}
                <div className="w-72 h-72 border border-white/20 rounded-full flex items-center justify-center relative">
                  <div className="w-56 h-56 border border-white/20 rounded-full"></div>
                  <Globe className="w-32 h-32 text-white/20" />

                  {/* Floating avatars */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ repeat: Infinity, duration: 4 }}
                    className="absolute top-4 left-12"
                  >
                    <img
                      src="/assets/leads-image.png"
                      className="w-14 h-14 rounded-full border-4 border-emerald-400 shadow-lg object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ repeat: Infinity, duration: 5, delay: 1 }}
                    className="absolute bottom-12 right-12"
                  >
                    <img
                      src="/assets/leads-image.png"
                      className="w-16 h-16 rounded-full border-4 border-emerald-400 shadow-lg object-cover"
                    />
                  </motion.div>
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ repeat: Infinity, duration: 6, delay: 0.5 }}
                    className="absolute top-1/2 -left-4"
                  >
                    <img
                      src="/assets/leads-image.png"
                      className="w-12 h-12 rounded-full border-4 border-emerald-400 shadow-lg object-cover"
                    />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-24 bg-[#f8fafc]">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            See What Our Customers{" "}
            <span className="text-[#6366f1]">Customers</span>
            <div className="flex justify-center -space-x-4 mt-4">
              {[1, 2, 3].map((i) => (
                <img
                  key={i}
                  src={LEADS_IMG}
                  className="w-12 h-12 rounded-full border-4 border-white bg-gray-300 object-cover"
                />
              ))}
            </div>
          </h2>
          <p className="text-xl text-gray-500 mb-16">
            Are Saying About Maskchat
          </p>

          <div className="flex gap-8 overflow-x-auto pb-12 hide-scrollbar snap-x snap-mandatory px-4">
            {[
              {
                name: "Dr. Sarah Jensen",
                role: "Clinical Ops Manager",
                text: "Maskchat streamlined our trial setup process — saving us weeks in site onboarding!",
              },
              {
                name: "Michael Tran",
                role: "Head of Site Mgmt",
                text: "The automation features have transformed our workflow, making everything faster.",
              },
              {
                name: "Priya Desai",
                role: "Regulatory Affairs",
                text: "We've reduced compliance issues significantly. It's a game-changer!",
              },
              {
                name: "James Rutherford",
                role: "Project Coordinator",
                text: "Reliable, efficient, and easy to use. Maskchat is essential for us.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="min-w-[320px] md:min-w-[380px] bg-white rounded-3xl overflow-hidden shadow-lg snap-center relative group cursor-pointer hover:shadow-2xl transition-all duration-300"
              >
                <div className="h-56 bg-gray-200 relative overflow-hidden">
                  <img
                    src={LEADS_IMG}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/10 transition">
                    <div className="w-14 h-14 bg-white/90 backdrop-blur rounded-full flex items-center justify-center pl-1 shadow-lg group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6 text-[#6366f1] fill-current" />
                    </div>
                  </div>
                </div>
                <div className="p-8 text-left">
                  <p className="text-lg text-gray-700 leading-relaxed mb-6">
                    "{item.text}"
                  </p>
                  <div>
                    <div className="font-bold text-gray-900 text-lg">
                      {item.name}
                    </div>
                    <div className="text-sm text-gray-500">{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2">
            {[0, 1, 2, 3].map((i) => (
              <div
                key={i}
                className="w-2 h-2 rounded-full bg-gray-300 hover:bg-[#6366f1] transition-colors cursor-pointer"
              ></div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-[#1e1b4b]">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-16">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div
                key={i}
                className="border border-white/10 rounded-2xl overflow-hidden bg-white/5 backdrop-blur-sm"
              >
                <details className="group">
                  <summary className="flex justify-between items-center cursor-pointer list-none p-6 text-white text-lg font-medium hover:bg-white/5 transition">
                    {faq.q}
                    <span className="w-8 h-8 rounded-full border border-white/30 flex items-center justify-center group-open:bg-white group-open:text-purple-900 transition-all">
                      <Plus className="w-4 h-4 group-open:hidden" />
                      <Minus className="w-4 h-4 hidden group-open:block" />
                    </span>
                  </summary>
                  <div className="text-indigo-200 px-6 pb-6 leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-0 bg-white">
        <div className="bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-6 py-32 grid md:grid-cols-2 items-center gap-16 relative z-10">
            <div className="relative order-2 md:order-1">
              <img
                src={LEADS_IMG}
                className="rounded-[2.5rem] object-cover h-[500px] w-full shadow-2xl z-10 relative"
              />

              {/* Curved Arrow SVG */}
              <div className="absolute -top-16 -left-16 z-20">
                <svg
                  width="150"
                  height="150"
                  viewBox="0 0 100 100"
                  fill="none"
                  className="text-amber-400 rotate-[-10deg]"
                >
                  <path
                    d="M 80 20 Q 20 20 20 80"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeDasharray="1 0"
                  />
                  <path
                    d="M 20 80 L 10 65 M 20 80 L 35 70"
                    stroke="currentColor"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>

            <div className="text-left relative order-1 md:order-2">
              {/* Background Shape */}
              <div className="absolute -bottom-[50%] -right-[50%] w-[150%] h-[150%] bg-[#f3f4f6] rounded-full -z-10 blur-3xl"></div>

              <div className="relative">
                <svg
                  className="absolute -left-8 -top-8 w-16 h-16 text-[#6366f1]/20"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 22h20L12 2zm0 4l6.5 13h-13L12 6z" />
                </svg>
                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                  Ready to Transform Your <br />
                  <span className="text-[#6366f1]">Customer Conversation?</span>
                </h2>
              </div>

              <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                Leave your contact details and get a free demo to see how
                Maskchat automates, organizes, and elevates every chat.
              </p>
              <button className="px-12 py-5 bg-[#6366f1] text-white font-bold text-lg rounded-full shadow-xl hover:shadow-indigo-500/30 hover:-translate-y-1 transition-all">
                Get Started Today
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
