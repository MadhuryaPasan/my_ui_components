"use client";

import { Button } from '@/components/ui/button'
import { Trash } from 'lucide-react';
import React from 'react'
import { AnimatePresence, motion } from "motion/react"

const Btn_Destructive_1 = () => {

    const [showText, setShowText] = React.useState(false);
    const BtnText:String = "Delete";
    const length= BtnText.length;
       // Add timeout handling
    const handleHoverEnd = () => {
        setTimeout(() => {
            setShowText(false);
        }, 1000); // 1 seconds delay
    };
   
  return (
    <>
      <motion.div
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onHoverStart={() => setShowText(true)}
        onHoverEnd={handleHoverEnd}
      >
        <Button variant={"destructive"} className="w-30 font-bold">
          <Trash />
          <AnimatePresence>
            {showText && (
              <motion.span
                initial={{ opacity: 0, width: 0 }}
                animate={{ opacity: 1, width: length * 10 }} 
                exit={{ opacity: 0, width: 0 }}
                transition={{ duration: 0.5 }}
                key={"delete-text"}
              >
                {BtnText}
              </motion.span>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>
    </>
  );
}



export default Btn_Destructive_1