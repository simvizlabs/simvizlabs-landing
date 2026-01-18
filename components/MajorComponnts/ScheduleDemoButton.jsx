import React from 'react'
import Link from 'next/link'

const ScheduleDemoButton = () => {
  return (
    <div className="flex justify-center">
      <Link
        href="/contact"
        className="rounded-full min-w-fit px-4 sm:px-10 py-2 sm:py-4 text-sm sm:text-lg font-semibold bg-[#1381e5] hover:bg-[#106bc0] text-white flex items-center justify-center gap-2 transition-all shadow-lg shadow-blue-500/20"
      >
        Request a Demo
      </Link>
    </div>
  );
}

export default ScheduleDemoButton