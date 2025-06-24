"use client";

import React from 'react'
import { gsap } from "gsap"
import {useGSAP} from "@gsap/react"

const page = () => {

useGSAP(() => {
  gsap.to("#text", {
    rotateX: 70,
    rotateZ: 70,
    
    // rotate: 360,
    repeat: -1,
    duration: 2,
  });
});
   

  
    
  return (
    <>
      page
      <br />
      <br />
      <br />
      <br />
      <div id="text" className="m-10 text-3xl bg-amber-300 w-fit p-5 rounded-lg shadow-lg">
        GSAP
      </div>
    </>
  );
}

export default page