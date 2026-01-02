"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import {
  motion,
  AnimatePresence,
  useScroll,
} from "motion/react";

import React, { useRef, useState } from "react";
import { useRouter } from 'next/navigation';
import Link from "next/link";

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItem {
  name: string;
  link: string;
  children?: NavItem[]; // Add children for dropdown
  icon?: React.ElementType; // Add icon for dropdown items
  listMenu?: NavItem[];
}

interface NavItemsProps {
  items: NavItem[]; // Use the updated NavItem type
  className?: string;
  onItemClick?: (link: string) => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navItems: NavItem[];
  handleNavItemClick: (link: string) => void;
}

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const {  } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const [visible, ] = useState<boolean>(false);

  // useMotionValueEvent(, "change", (latest) => {
  //   if (latest > 100) {
  //     (true);
  //   } else {
  //     setVisible(false);
  //   }
  // });

  return (
    <motion.div
      ref={ref}
      // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      className={cn("fixed bg-white inset-x-0 top-0 z-40 w-full shadow-md ", className)}
    >
      {React.Children.map(children, (child) => {
        if (!React.isValidElement(child)) {
          return child;
        }
        // Only pass visible prop to components that accept it, not to DOM elements
        const isDOMElement = typeof child.type === 'string';
        if (isDOMElement) {
          return child;
        }
        return React.cloneElement(
          child as React.ReactElement<{ visible?: boolean }>,
          { visible },
        );
      })}
    </motion.div>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "40%" : "100%",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-[60] mx-auto hidden w-full max-w-7xl grid grid-cols-3 items-center self-start rounded-full bg-transparent px-2 py-2 lg:grid dark:bg-transparent",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      <div className="flex justify-start">
        {React.Children.toArray(children)[0]}
      </div>
      <div className="flex justify-center">
        {React.Children.toArray(children)[1]}
      </div>
      <div className="flex justify-end">
        {React.Children.toArray(children)[2]}
      </div>
    </motion.div>
  );
};

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null);
  const timeoutRef = useRef<number | null>(null);
  const router = useRouter();

  const handleMouseEnter = (idx: number) => {
    if (timeoutRef.current) {
      window.clearTimeout(timeoutRef.current);
    }
    setHovered(idx);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = window.setTimeout(() => {
      setHovered(null);
    }, 100);
  };

  return (
    <motion.div
      className={cn(
        "hidden flex-1 flex-row items-center justify-center lg:flex",
        className,
      )}
    >
      <div className="flex items-center justify-center gap-2 lg:gap-8">
        {items.find(item => item.listMenu)?.listMenu?.map((item, idx) => (
          <div
            key={`link-${idx}`}
            className="relative"
            onMouseEnter={() => handleMouseEnter(idx)}
            onMouseLeave={handleMouseLeave}
          >
            <Link
              href={item.link}
              onClick={(e) => {
                e.preventDefault();
                if (item.link.startsWith("#")) {
                  onItemClick?.(item.link);
                } else {
                  router.push(item.link);
                }
              }}
              className="relative flex items-center gap-1 px-3 py-2 text-neutral-600 transition-colors duration-200 hover:text-neutral-900 dark:text-neutral-300 dark:hover:text-white"
            >
              {hovered === idx && (
                <motion.div
                  layoutId="hovered"
                  className="absolute inset-0 h-full w-full rounded-full bg-gray-100/80 backdrop-blur-sm dark:bg-neutral-800/80"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    mass: 0.5
                  }}
                />
              )}
              <span className="relative whitespace-nowrap text-sm font-medium transition-all duration-200">
                {item.name}
              </span>
            
            </Link>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? "blur(10px)" : "none",
        boxShadow: visible
          ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
          : "none",
        width: visible ? "95%" : "100%",
        paddingRight: visible ? "8px" : "0px",
        paddingLeft: visible ? "8px" : "0px",
        borderRadius: visible ? "12px" : "2rem",
        y: visible ? 20 : 0,
      }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        "relative z-50 mx-auto flex w-full max-w-[calc(100vw-1rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden",
        visible && "bg-white/80 dark:bg-neutral-950/80",
        className,
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        "flex w-full flex-row items-center justify-between",
        className,
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  isOpen,
  onClose,
  navItems,
  handleNavItemClick,
}: MobileNavMenuProps) => {
  const router = useRouter();
  const listMenu = navItems.find(item => item.listMenu)?.listMenu;

  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className={cn(
            "fixed inset-0 z-50 flex w-full flex-col items-start justify-start gap-4 bg-white px-4 py-8 dark:bg-neutral-950",
          )}
        >
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="w-full flex justify-end"
          >
            <MobileNavToggle isOpen={isOpen} onClick={onClose} />
          </motion.div>
          <div className="w-full flex-1 flex flex-col items-center justify-center">
            {listMenu?.map((item, idx) => (
              <motion.div
                key={`mobile-link-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ 
                  duration: 0.3,
                  delay: isOpen ? idx * 0.1 : (listMenu.length - idx - 1) * 0.1,
                  ease: "easeOut"
                }}
                className="w-full text-center py-4"
              >
                <Link
                  href={item.link}
                  className="text-2xl font-medium text-muted-foreground hover:text-foreground"
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
              </motion.div>
            ))}
          </div>
          {/* <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ 
              duration: 0.3,
              delay: isOpen ? (listMenu?.length || 0) * 0.1 : 0,
              ease: "easeOut"
            }}
            className="w-full flex flex-col gap-4 pb-8"
          >
            <NavbarButton
              href="/contact"
              onClick={onClose}
              variant="primary"
              className="w-full"
            >
              Contact Us
            </NavbarButton>
          </motion.div> */}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

interface MobileNavToggleProps {
  isOpen: boolean;
  onClick: () => void;
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: MobileNavToggleProps) => {
  return isOpen ? (
    <IconX className="text-black dark:text-white" onClick={onClick} />
  ) : (
    <IconMenu2 className="text-black dark:text-white" onClick={onClick} />
  );
};

import Image from "next/image";

export const NavbarLogo = () => {
  return (
    <a
      href="#"
      className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal text-black"
    >
      <Image src="/logo.png" alt="SimvizLabs Logo" width={32} height={32} className="mr-2" />
      <span className="font-bold text-black dark:text-white">SimViz Labs</span>
    </a>
  );
};

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string;
  as?: React.ElementType;
  children: React.ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "dark" | "gradient";
} & (
  | React.ComponentPropsWithoutRef<"a">
  | React.ComponentPropsWithoutRef<"button">
)) => {
  const baseStyles =
    "px-4 py-2 rounded-md bg-white button bg-white text-black text-sm font-bold relative cursor-pointer hover:-translate-y-0.5 transition duration-200 inline-block text-center";

  const variantStyles = {
    primary:
      "shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]",
    secondary: "bg-transparent shadow-none dark:text-white",
    dark: "bg-black text-white shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,255,255,0.1)_inset]",
    gradient:
      "bg-gradient-to-b from-blue-500 to-blue-700 text-white shadow-[0px_2px_0px_0px_rgba(255,255,255,0.3)_inset]",
  };

  return (
    <Tag
      href={href || undefined}
      className={cn(baseStyles, variantStyles[variant], className)}
      {...props}
    >
      {children}
    </Tag>
  );
};
