"use client";

import { motion } from "framer-motion";
import { reviews } from "@/lib/data";

export function Reviews() {
  return (
    <section className="py-32 px-6 md:px-12 relative bg-[#030008]" id="reviews">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="text-4xl md:text-6xl font-black tracking-tighter text-white mb-6">
            Client Success
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg md:text-xl font-light">
            Trusted by founders and startups globally to deliver highly reliable software infrastructure on time.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15, duration: 0.6 }}
              className="p-8 md:p-10 rounded-3xl bg-white/[0.03] border border-white/[0.08] hover:bg-white/[0.05] transition-colors flex flex-col justify-between"
            >
              <div className="mb-8">
                {/* 5 stars */}
                <div className="flex gap-1 mb-6">
                  {[1,2,3,4,5].map((star) => (
                    <svg key={star} className="w-5 h-5 text-purple-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-300 leading-relaxed font-light text-lg italic">
                  "{review.text}"
                </p>
              </div>
              <div>
                <h4 className="text-white font-bold text-lg tracking-wide">{review.client}</h4>
                <p className="text-purple-400 font-mono text-xs uppercase tracking-widest mt-1">{review.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
