"use client";

import { useEffect, useState } from "react";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import Loading from "@/app/loading";
import ScrollToTop from "@/components/ui/ScrollToTop";
// import WhatsappButton from "@/components/ui/WhatsappButton";
import SmoothScroll from "@/components/ui/SmoothScroll";
import { AnimatePresence, motion } from "framer-motion";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
        <AnimatePresence mode="wait">
        {loading ? (
            <Loading key="loader" />
        ) : (
            <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            >
            <Header />
            <ScrollToTop />
            <SmoothScroll>{children}</SmoothScroll>
            <Footer />
            </motion.div>
        )}
        </AnimatePresence>
    );
}