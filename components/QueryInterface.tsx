"use client";

import { useState } from 'react';
import { Search } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '@/lib/utils';
import { SearchHint } from '@/components/SearchHint';
import { QueryTitle } from '@/components/QueryTitle';

export default function QueryInterface() {
  const [query, setQuery] = useState('');
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Query submitted:', query);
  };

  return (
    <Card className="w-full max-w-2xl p-8 bg-white/90 backdrop-blur-lg shadow-2xl border-0">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="space-y-8"
      >
        <QueryTitle />
        
        <form onSubmit={handleSubmit} className="relative">
          <div className="flex gap-3">
            <div className="relative flex-1">
              <AnimatePresence>
                {isFocused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="absolute -inset-px -z-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg blur"
                  />
                )}
              </AnimatePresence>
              <motion.div
                animate={isFocused ? { scale: 1.02 } : { scale: 1 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="relative"
              >
                <Input
                  type="text"
                  placeholder="Ask about insurance coverage, claims, or policies..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onFocus={() => setIsFocused(true)}
                  onBlur={() => setIsFocused(false)}
                  className={cn(
                    "flex-1 h-14 text-lg bg-white border-gray-200 text-gray-900",
                    "placeholder:text-gray-400 focus-visible:ring-blue-400",
                    "transition-all duration-300 ease-out",
                    "shadow-sm hover:shadow-md"
                  )}
                />
              </motion.div>
            </div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                type="submit"
                size="lg"
                className={cn(
                  "h-14 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700",
                  "px-8 font-medium tracking-wide text-white",
                  "transition-all duration-300 ease-out shadow-lg"
                )}
              >
                <Search className="mr-2 h-5 w-5" />
                Search
              </Button>
            </motion.div>
          </div>
          
          <SearchHint isFocused={isFocused} />
        </form>
      </motion.div>
    </Card>
  );
}