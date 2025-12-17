import { ChevronDown, Menu, X, MessageSquare, ShoppingBag, Building2, Car, GraduationCap, Coins } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const products = [
  { name: "AI Omnibox", desc: "Unified inbox for all channels", path: "/products/omnibox" },
  { name: "Whatsapp Storefront", desc: "Sell directly on WhatsApp", path: "/products/WhatsappStorefront" },
  { name: "AI Chatbot", desc: "Automate support 24/7", path: "/products/aichatbot" },
  { name: "Newsletter", desc: "Broadcast updates easily", path: "/products/newsletter" }
];

const industries = [
  { name: "Ecommerce", desc: "Boost sales & recovery", path: "/industries/ecommerce", icon: ShoppingBag },
  { name: "Real Estate", desc: "Automate property inquiries", path: "/industries/real-estate", icon: Building2 },
  { name: "Automotive", desc: "Book test drives instantly", path: "/industries/automotive", icon: Car },
  { name: "Education", desc: "Scale student enrollment", path: "/industries/education", icon: GraduationCap },
  { name: "Finance", desc: "Secure customer support", path: "/industries/finance", icon: Coins }
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${scrolled ? "bg-white/90 backdrop-blur-xl shadow-sm py-2" : "bg-white py-4"
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2 group">
            <div className="relative">
              <div className="w-10 h-10 bg-[#4338ca] rounded-xl flex items-center justify-center text-white transform group-hover:rotate-3 transition-transform">
                <MessageSquare className="w-6 h-6 fill-white" />
              </div>
              <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-[#a855f7] rounded-full border-2 border-white"></div>
            </div>
            <span className="text-2xl font-bold text-[#1e1b4b] tracking-tight">
              mask-chat
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Products Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-[#4338ca] font-medium py-2 transition-colors">
                Products <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="w-72 bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 overflow-hidden p-2">
                  {products.map((item) => (
                    <Link key={item.name} to={item.path} className="flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#4338ca] flex items-center justify-center shrink-0 mt-0.5">
                        <div className="w-2 h-2 bg-current rounded-full" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Industries Dropdown */}
            <div className="relative group">
              <button className="flex items-center gap-1.5 text-gray-600 hover:text-[#4338ca] font-medium py-2 transition-colors">
                Industries <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:-rotate-180" />
              </button>

              <div className="absolute top-full left-1/2 -translate-x-1/2 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform group-hover:translate-y-0 translate-y-2">
                <div className="w-80 bg-white rounded-2xl shadow-xl ring-1 ring-gray-100 overflow-hidden p-2">
                  {industries.map((item) => (
                    <Link key={item.name} to={item.path} className="flex items-start gap-3 p-3 rounded-xl hover:bg-indigo-50 transition-colors">
                      <div className="w-8 h-8 rounded-lg bg-indigo-100 text-[#4338ca] flex items-center justify-center shrink-0 mt-0.5">
                        <item.icon className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900">{item.name}</div>
                        <div className="text-xs text-gray-500">{item.desc}</div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link to="/about" className="text-gray-600 hover:text-[#4338ca] font-medium transition-colors">About Us</Link>
            <Link to="/pricing" className="text-gray-600 hover:text-[#4338ca] font-medium transition-colors">Pricing</Link>
            <Link to="/resources" className="text-gray-600 hover:text-[#4338ca] font-medium transition-colors">Resources</Link>
          </nav>

          {/* Desktop Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <Link
              to="/contact-us"
              className="px-6 py-2.5 rounded-xl font-semibold text-gray-700 bg-white border border-gray-200 hover:border-gray-300 hover:bg-gray-50 shadow-sm transition-all"
            >
              Contact us
            </Link>
            <button className="px-6 py-2.5 rounded-xl font-semibold text-white bg-gradient-to-r from-[#4338ca] to-[#3b82f6] hover:shadow-lg hover:shadow-indigo-500/30 transition-all transform hover:-translate-y-0.5">
              Book a demo
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden border-t border-gray-100 bg-white shadow-lg overflow-hidden"
          >
            <div className="p-4 space-y-4">
              <div className="space-y-2">
                <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider px-3">Products</div>
                {products.map(p => (
                  <Link key={p.name} to={p.path} className="flex items-start gap-3 px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#4338ca] rounded-lg text-sm font-medium">
                    <div className="w-5 h-5 rounded-md bg-indigo-100 text-[#4338ca] flex items-center justify-center shrink-0 mt-0.5">
                      <div className="w-1.5 h-1.5 bg-current rounded-full" />
                    </div>
                    <div>
                      <div className="font-semibold">{p.name}</div>
                      <div className="text-xs opacity-75 font-normal">{p.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-gray-100 my-2"></div>

              <div className="space-y-2">
                <div className="font-semibold text-gray-400 text-xs uppercase tracking-wider px-3">Industries</div>
                {industries.map(item => (
                  <Link key={item.name} to={item.path} className="flex items-start gap-3 px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#4338ca] rounded-lg text-sm font-medium">
                    <div className="w-5 h-5 rounded-md bg-indigo-100 text-[#4338ca] flex items-center justify-center shrink-0 mt-0.5">
                      <item.icon className="w-3 h-3" />
                    </div>
                    <div>
                      <div className="font-semibold">{item.name}</div>
                      <div className="text-xs opacity-75 font-normal">{item.desc}</div>
                    </div>
                  </Link>
                ))}
              </div>

              <div className="h-px bg-gray-100 my-2"></div>

              <div className="space-y-2">
                <Link to="/about" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#4338ca] rounded-lg font-medium">About Us</Link>
                <Link to="/pricing" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#4338ca] rounded-lg font-medium">Pricing</Link>
                <Link to="/resources" className="block px-3 py-2 text-gray-700 hover:bg-indigo-50 hover:text-[#4338ca] rounded-lg font-medium">Resources</Link>
              </div>

              <div className="pt-4 flex flex-col gap-3">
                <Link to="/contact-us" className="w-full py-3 rounded-xl font-semibold text-center border border-gray-200">Contact us</Link>
                <button className="w-full py-3 rounded-xl font-semibold text-white bg-[#4338ca] text-center shadow-lg">Book a demo</button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}