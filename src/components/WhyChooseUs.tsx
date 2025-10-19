"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";


const content = [
  {
    title: "Proven Results",
    description:
      "We don't just promise growth; we deliver it. Our data-driven strategies are designed to achieve measurable results that directly impact your bottom line.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Collaborative Editing
      </div>
    ),
  },
  {
    title: "Tailored Solutions",
    description:
      "Your business is unique, and so is our approach. We create custom digital marketing plans that align perfectly with your specific goals and industry.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <img
          src="/linear.webp"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt="linear board demo"
        />
      </div>
    ),
  },
  {
    title: "Transparent Partnership",
    description:
      "We believe in complete transparency. You'll have full access to performance reports, clear communication, and a dedicated team member to guide you every step of the way.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--orange-500),var(--yellow-500))] text-white">
        Version control
      </div>
    ),
  },
  {
    title: "Expert Team",
    description:
      "Our team is a dynamic collective of seasoned digital marketing professionals who seamlessly integrate their specialized skills in technical SEO, compelling content creation, social media strategy, and advanced analytics to drive measurable results for our clients.",
    content: (
      <div className="flex h-full w-full items-center justify-center bg-[linear-gradient(to_bottom_right,var(--cyan-500),var(--emerald-500))] text-white">
        Running out of content
      </div>
    ),
  },
];
export function WhyChooseUs() {
  return (
    <div className="w-full ">
      <StickyScroll content={content} />
    </div>
  );
}
