import React from 'react'
import Link from 'next/link'

const ScheduleDemoButton = () => {
  return (
    <div className="mt-8 sm:mt-10">
    <Link
    href="/contact"
    className="h-10 sm:h-11 md:h-12 bg-[#0099FF] text-white hover:bg-[#007acc] px-4 sm:px-6 md:px-8 lg:px-10 py-3 sm:py-3 md:py-3 text-sm sm:text-base md:text-base font-semibold rounded-full"
  >
    Schedule a Demo
  </Link>
  </div>
  );
}

export default ScheduleDemoButton