import { Logo } from "@/components/logo";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-black py-16 text-white/60 border-t border-white/10">
      <div className="container mx-auto px-4 sm:px-8">
        <div className="grid gap-12 lg:grid-cols-4">
          
          {/* Brand & Address */}
          <div className="space-y-6 lg:col-span-1">
            <div className="flex items-center gap-2 text-white">
                <Logo />
                <span className="text-xl font-bold">SimViz Labs</span>
            </div>
            <p className="text-sm">
                Next Generation Aviation Solutions.
            </p>
            <address className="text-sm not-italic leading-relaxed">
                Headquarters XXX, USA<br />
                Technology Center XXX, India<br />
                Regional Office XXX, Singapore
            </address>
          </div>

          {/* Links Section */}
          <div className="grid grid-cols-2 gap-8 lg:col-span-3 lg:grid-cols-3">
             {/* Solutions */}
             <div>
                <h3 className="mb-4 text-sm font-semibold text-white">Our Solutions</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="#" className="hover:text-white transition-colors">Airlines</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Aeronautical Schools</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Type Rating Organizations</Link></li>
                </ul>
             </div>

             {/* Products */}
             <div>
                <h3 className="mb-4 text-sm font-semibold text-white">Our Products</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="#" className="hover:text-white transition-colors">A320</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">B737</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">B747</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">LMS</Link></li>
                </ul>
             </div>

             {/* Legal */}
             <div>
                <h3 className="mb-4 text-sm font-semibold text-white">Legal</h3>
                <ul className="space-y-3 text-sm">
                    <li><Link href="#" className="hover:text-white transition-colors">Terms</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Privacy</Link></li>
                    <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
                </ul>
             </div>
          </div>
        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="text-sm">
                © 2025 SimvizLabs LLC. All rights reserved.
            </p>
            <div className="flex gap-4">
                {/* Social Icons Placeholders */}
                <div className="h-6 w-6 rounded bg-white/10"></div>
                <div className="h-6 w-6 rounded bg-white/10"></div>
                <div className="h-6 w-6 rounded bg-white/10"></div>
                <div className="h-6 w-6 rounded bg-white/10"></div>
            </div>
        </div>
      </div>
    </footer>
  );
}
