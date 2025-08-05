// src/components/TransitionPage.tsx
import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

export default function TransitionPage({ children }: { children: ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 600 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 1, y: 0 }}
      transition={{
        type: "tween",       
        duration: 1,
        ease: [0.4, 0, 0.2, 1],
      }}
    >
      {children}  
    </motion.div>
  );
}
