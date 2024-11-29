"use client";

import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

interface SearchHintProps {
  isFocused: boolean;
}

export function SearchHint({ isFocused }: SearchHintProps) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.5 }}
      className="absolute -bottom-6 left-0 right-0 flex justify-center"
    >
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger>
            <motion.span 
              className="text-blue-600 text-sm flex items-center gap-2 hover:text-purple-600 transition-colors"
              whileHover={{ scale: 1.05 }}
            >
              <Sparkles className="h-4 w-4" /> Making insurance questions easy
            </motion.span>
          </TooltipTrigger>
          <TooltipContent className="max-w-[280px] bg-gradient-to-r from-blue-500 to-purple-500 text-white">
            <p>Get instant answers about coverage, claims, and policies in simple terms.</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </motion.div>
  );
}