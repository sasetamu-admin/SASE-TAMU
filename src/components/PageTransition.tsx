import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

export const PageTransition = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

    useEffect(() => {
    void import("ldrs").then(({ quantum }) => quantum.register());
    }, []);

  useEffect(() => {
    const start = () => setLoading(true);
    const end = () => setLoading(false);

    router.events.on("routeChangeStart", start);
    router.events.on("routeChangeComplete", end);
    router.events.on("routeChangeError", end);

    return () => {
      router.events.off("routeChangeStart", start);
      router.events.off("routeChangeComplete", end);
      router.events.off("routeChangeError", end);
    };
  }, [router]);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 z-[100] flex items-center justify-center bg-navy"
        >
          <l-quantum size="60" speed="1.75" color="#FFB7C5" />
        </motion.div>
      )}
    </AnimatePresence>
  );
};