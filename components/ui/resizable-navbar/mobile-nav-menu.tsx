import React from "react";
import Link from "next/link";
import { useRouter } from 'next/navigation';
import { AnimatePresence, motion } from "motion/react";
import { cn } from "@/lib/utils";

interface NavItem {
  name: string;
  link: string;
  children?: NavItem[];
  icon?: React.ElementType;
}

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  handleNavItemClick: (link: string) => void;
}

const MobileNavMenu: React.FC<MobileNavMenuProps> = ({ 
  isOpen, 
  onClose, 
  navItems, 
  handleNavItemClick 
}) => {
  const router = useRouter();
  
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            "absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-white px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,255,255,0.1)_inset] dark:bg-neutral-950",
          )}
        >
          {navItems.map((item, idx) => (
            <div key={`mobile-link-${idx}`} className="w-full">
              {item.children ? (
                <div>
                  <h6 className="font-semibold text-foreground">{item.name}</h6>
                  <ul className="ml-4 mt-2 space-y-2">
                    {item.children.map((child) => (
                      <li key={child.name}>
                        <Link
                          href={child.link}
                          className="text-muted-foreground hover:text-foreground block py-1"
                          onClick={() => {
                            onClose();
                            if (child.link.startsWith('#')) {
                              handleNavItemClick(child.link);
                            } else {
                              router.push(child.link);
                            }
                          }}
                        >
                          {child.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              ) : (
                <Link
                  href={item.link}
                  className="text-muted-foreground hover:text-foreground block py-2"
                  onClick={() => {
                    onClose();
                    if (item.link.startsWith('#')) {
                      handleNavItemClick(item.link);
                    } else {
                      router.push(item.link);
                    }
                  }}
                >
                  {item.name}
                </Link>
              )}
            </div>
          ))}
          <div className="flex w-full flex-col gap-4">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]"
            >
              Contact Us
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileNavMenu;
