"use client";

import { motion } from 'framer-motion';

export function QueryTitle() {
  const titleVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  };

  const subtitleVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.8,
        delay: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <div className="space-y-2">
      <motion.h1 
        variants={titleVariants}
        initial="hidden"
        animate="visible"
        className="text-4xl font-light text-center bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
      >
        RAG Query System
      </motion.h1>
      <motion.p 
        variants={subtitleVariants}
        initial="hidden"
        animate="visible"
        className="text-center text-gray-500 text-sm tracking-wide"
      >
        INTELLIGENT INSURANCE ASSISTANT • ESTABLISHED 2024
      </motion.p>
    </div>
  );
}