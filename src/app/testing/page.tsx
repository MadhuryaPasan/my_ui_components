// npm i gsap @gsap/react

"use client";

import React, { useRef } from 'react'
import { gsap } from "gsap"
import {useGSAP} from "@gsap/react"
import { Button } from '@/components/ui/button';
import { ScrollTrigger } from 'gsap/all';

gsap.registerPlugin(ScrollTrigger);

const page = () => {

  const scrollRef = useRef<HTMLDivElement>(null);

const timeline = gsap.timeline({
  repeat: -1,
  yoyo: true,
  repeatDelay: 1,
});

  useGSAP(() => {
    gsap.to("#to", {
      x: 500,
      repeat: -1,
      duration: 2,
      yoyo: true,
      rotation: 360,
      ease: "bounce.in",
    })
    
    gsap.from("#from", {
      x: 500,
      repeat: -1,
      duration: 2,
      yoyo: true,
      rotation: 360,
      ease: "bounce.in",
    });

    // from --- to
    gsap.fromTo(
      "#fromTo",
      {
        x: 0,
        rotation: 0,
        borderRadius: "0%",
      },
      {
        x: 500,
        repeat: -1,
        duration: 2,
        yoyo: true,
        rotation: 360,
        ease: "bounce.in",
        borderRadius: "50%",
      }
    );


    // timeline
    timeline.to("#timeline", {
      x: 500,
      repeat: -1,
      duration: 2,
      rotation: 360,
      ease: "bounce.in",
    });

    timeline.to("#timeline", {
      y: -100,
      scale: 1.5,
      duration: 2,
      rotation: 360,
      ease: "bounce.inOut",
    })

    timeline.to("#timeline", {
      x: 750,
      duration: 2,
      rotation: 360,
      ease: "bounce.out",
    });



    // stagger
    gsap.fromTo(
      ".stagger-box",
      { y: 0,
        scale: 0.0,
       },
      {
        y: -50,
        scale: 1.0,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        duration: 1,
        borderRadius: "50%",
      }
    );


    // stagger
    gsap.fromTo(
      ".stagger-box",
      { y: 0,
        scale: 0.0,
       },
      {
        y: -50,
        scale: 1.0,
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
        duration: 1,
        borderRadius: "50%",
      }
    );


    gsap.to(".stagger-box2", {
      y: 100,
      scale: 1.0,
      repeat: -1,
      yoyo: true,
      duration: 1,
      stagger: {
        amount:1.5,
        grid:[2,1],
        axis: "y",
        ease : "bounce.inout",
        from: "center",
      },

    });

    // ScrollTrigger
    const boxes = gsap.utils.toArray(scrollRef.current?.children || []);

    boxes.forEach((box:any) => {
      gsap.to(box, {
        x: 500 + boxes.indexOf(box) + 5,
        rotation: 360,
        scale: 1.5,
        borderRadius: "100%",
        scrollTrigger: {
          trigger: box,
          start: "bottom bottom",
          end: "top 10%",
          scrub: true,
        },
        ease: "power1.inOut",
      });
    })



    gsap.to("#Text",{
      ease: "back.in",
      y: 100,
      repeat: -1,
      duration: 2,
      yoyo: true,

    })



  },[]);

  return (
    <>

    <h1 id="Text" className='text-4xl font-bold text-center'>GSAP Animation Text</h1>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
      <div className='h-screen  bg-amber-50 mt-30' ref={scrollRef}>
        <br />
        <br />
        <br />
        <div id="ScrollBox-blue" className="w-20 h-20 bg-blue-500 "></div>
        <div id="ScrollBox-red" className="w-20 h-20 bg-red-500 "></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      page
      {/* Stagger */}
      <div className=" text-4xl">Stagger - from to</div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <div className="w-10 h-20 bg-amber-100 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-200 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-300 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-400 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-500 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-600 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-700 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-800 stagger-box"></div>
        <div className="w-10 h-20 bg-amber-900 stagger-box"></div>
      </div>
      <br />
      <br />
      <br />
      <div className=" text-4xl">Stagger - to</div>
      <div className="flex flex-wrap gap-2 justify-center items-center">
        <div className="w-10 h-20 bg-amber-100 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-200 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-300 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-400 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-500 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-600 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-700 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-800 stagger-box2"></div>
        <div className="w-10 h-20 bg-amber-900 stagger-box2"></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* to */}
      <div
        id="to"
        className="m-10 text-3xl bg-amber-300 w-fit p-5 rounded-lg shadow-lg"
      >
        GSAP - to
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* from */}
      <div
        id="from"
        className="m-10 text-3xl bg-amber-300 w-fit p-5 rounded-lg shadow-lg"
      >
        GSAP - from
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* fromTo */}
      <div
        id="fromTo"
        className="m-10 text-3xl bg-amber-300 w-fit p-5 rounded-lg shadow-lg"
      >
        GSAP - fromTo
      </div>
      <br />
      <br />
      <br />
      <br />
      {/* timeline */}
      <Button
        onClick={() => {
          if (timeline.paused()) {
            timeline.play();
          } else {
            timeline.pause();
          }
        }}
      >
        Play/Pause
      </Button>
      <div
        id="timeline"
        className="m-10 text-3xl bg-amber-300 w-fit p-5 rounded-lg shadow-lg"
      >
        GSAP - timeline
      </div>
    </>
  );
}

export default page