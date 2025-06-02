import { motion } from "framer-motion";
import Button from "@/components/ui/Button";

export default function HeroSection() {
  return (
    <div className="bg-white sm:py-20 border border-b-0">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 pt-6 lg:px-8 text-center">
        <div className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800 mb-6 relative overflow-hidden">
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{
              background: "conic-gradient(from 0deg at 50% 50%, #3b82f6 0deg, transparent 90deg)",
            }}
            initial={{ rotate: 0 }}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <div className="absolute inset-[2px] rounded-full bg-gray-100" />
          <span className="relative z-10">Auto for desktop is here</span>
        </div>

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6">
          Customer <br />
          <span className="text-gray-900">relationship magic.</span>
        </h1>

        <p className="text-lg sm:text-xl text-gray-600 max-w-2xl mx-auto mb-10">
          Attic is the AI-native CRM that builds, scales and<br />
          grows your company to the next level.
        </p>

        <div className="flex flex-col sm:flex-row justify-center items-center gap-3 pb-10">
          <Button className="bg-gray-900 text-white hover:bg-gray-800 transition-colors">Start for Free</Button>
          <Button className="border border-gray-300 hover:bg-gray-50 transition-colors">Talk to Sales</Button>
        </div>
      </div>
    </div>
  );
}