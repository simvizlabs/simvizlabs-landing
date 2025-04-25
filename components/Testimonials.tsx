import React from "react";

export const Testimonials: React.FC<{ quote: string; author: string }> = ({ quote, author }) => (
  <blockquote className="max-w-2xl mx-auto text-center">
    <p className="text-xl italic">“{quote}”</p>
    <footer className="mt-4">{author}</footer>
  </blockquote>
);
