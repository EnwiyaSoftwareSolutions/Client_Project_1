"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "./ui/navigation-menu";
import { Menu, X, Phone } from "lucide-react";
import logoImage from "../../utils/img/fulllogo_transparent.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Practice Areas", href: "/practice-area" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  // Close menu on route change (skip initial mount)
  const isInitialMount = useRef(true);
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = useCallback(() => {
    setIsMenuOpen((prev) => !prev);
  }, []);

  // Skip rendering on admin pages - must be after all hooks
  if (pathname?.startsWith("/AdminPage")) {
    return null;
  }

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out",
          isScrolled || isMenuOpen
            ? "bg-[#0b0b0b]/95 backdrop-blur-md shadow-lg"
            : "bg-[var(--headder-navbar-color)] backdrop-blur-sm"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-20 items-center justify-between">
            {/* Logo */}
            <Link 
              href="/" 
              className="flex-shrink-0 transition-opacity duration-200 hover:opacity-80"
            >
              <img
                src={logoImage.src}
                alt="Enwiya Lawfare"
                className="h-12 w-auto md:h-14"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:gap-8">
              <NavigationMenu>
                <NavigationMenuList className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    console.log(isActive, "testing active state for", item.href);
                    return (
                      <NavigationMenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                            "rounded-md hover:bg-white/5",
                            isActive
                              ? "text-[var(--headder-text-color)]"
                              : "text-[var(--navbar-font-color)] hover:text-[var(--headder-text-color)]"
                          )}
                        >
                          {item.name}
                          {isActive && (
                            <span className="absolute bottom-0 left-1/2 -translate-x-1/2 h-0.5 w-4 bg-[var(--primary-accent)] rounded-full" />
                          )}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Button
                asChild
                className={cn(
                  "ml-4 transition-all duration-200",
                  "bg-[var(--primary-accent)] text-black font-semibold",
                  "hover:bg-[var(--primary-accent)]/90 hover:scale-105",
                  "shadow-lg hover:shadow-xl"
                )}
              >
                <Link href="/contact" className="flex items-center gap-2">
                  <Phone className="h-4 w-4" />
                  Free Consultation
                </Link>
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMenuOpen}
              className={cn(
                "lg:hidden relative h-10 w-10 rounded-lg",
                "flex items-center justify-center",
                "text-[var(--muted-foreground)] transition-all duration-200",
                "hover:bg-white/10 hover:text-white",
                isMenuOpen && "bg-white/10 text-white"
              )}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" strokeWidth={2} />
              ) : (
                <Menu className="h-6 w-6 text-white" strokeWidth={2} />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer for fixed header */}
      <div className="h-20" />

      {/* Mobile Menu Overlay */}
      <div
        className={cn(
          "fixed inset-0 z-40 lg:hidden transition-all duration-300",
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        )}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Menu Panel */}
        <div
          className={cn(
            "absolute right-0 top-0 h-full w-full max-w-sm",
            "bg-[#0b0b0b] shadow-2xl",
            "transform transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-full flex-col">
            {/* Mobile Header */}
            <div className="flex h-20 items-center justify-between px-6 border-b border-white/10">
              <img
                src={logoImage.src}
                alt="Enwiya Lawfare"
                className="h-10 w-auto"
              />
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="h-10 w-10 rounded-lg flex items-center justify-center text-[var(--muted-foreground)] hover:bg-white/10 hover:text-white transition-all duration-200"
              >
                <X className="h-6 w-6" strokeWidth={2} />
              </button>
            </div>

            {/* Navigation Links */}
            <nav className="flex-1 overflow-y-auto py-6 px-6">
              <div className="flex flex-col gap-2">
                {navItems.map((item, index) => {
                  const isActive = pathname === item.href;
                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        "group flex items-center gap-3 rounded-xl px-4 py-4",
                        "text-lg font-medium transition-all duration-200",
                        "border border-transparent",
                        isActive
                          ? "bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] border-[var(--primary-accent)]/20"
                          : "text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/10"
                      )}
                      style={{
                        animationDelay: `${index * 50}ms`,
                      }}
                    >
                      <span className={cn(
                        "w-2 h-2 rounded-full transition-all duration-200",
                        isActive ? "bg-[var(--primary-accent)]" : "bg-gray-600 group-hover:bg-gray-400"
                      )} />
                      {item.name}
                    </Link>
                  );
                })}
              </div>
            </nav>

            {/* Mobile CTA */}
            <div className="border-t border-white/10 p-6">
              <Button
                asChild
                className={cn(
                  "w-full py-6 text-base font-semibold",
                  "bg-[var(--primary-accent)] text-black",
                  "hover:bg-[var(--primary-accent)]/90",
                  "shadow-lg hover:shadow-xl transition-all duration-200"
                )}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              <p className="mt-4 text-center text-sm text-gray-500">
                Available 24/7 for emergencies
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}



// "use client";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import { useState, useEffect } from "react";
// import { cn } from "../../lib/utils";
// import { Button } from "./ui/button";
// import {
//   NavigationMenu,
//   NavigationMenuItem,
//   NavigationMenuList,
// } from "./ui/navigation-menu";
// import logoImage from "../../utils/img/fulllogo_transparent.png";

// const navItems = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Reviews", href: "/reviews" },
//   { name: "Stories", href: "/stories" },
//   { name: "Practice Areas", href: "/practice-area" },
//   { name: "Contact", href: "/contact" },
// ];

// export function Navbar() {
//   const pathname = usePathname();
//   const [open, setOpen] = useState(false);

//   // prevent body scroll when mobile menu is open
//   useEffect(() => {
//     if (typeof window === "undefined") return;
//     document.body.style.overflow = open ? "hidden" : "";
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [open]);

//   return (
//     <div className="flex">
//       {pathname.startsWith("/AdminPage") ? null : (
//         <header className=" sticky top-0 z-50 w-full bg-[var(--headder-navbar-color)] to-transparent backdrop-blur  border-border">
//           {/* Absolute logo anchored to the far left */}
//           <div style={{ display: "flex" }}>
//           <div className="flex-1 relative">
//             {/* <Link href="/" className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2"> */}
//             <img
//               src={logoImage.src}
//               alt="Enwiya Lawfare Logo"
//               className="h-10 md:h-15 pt-2 ml-5 w-auto"
//             />
//             {/* </Link> */}
//           </div>

//           <div style={{float:"right"}} className="flex-1 mx-auto flex h-16 max-w-7xl items-center justify-between px-6 md:pl-20">
//             {/* Site title (kept as link) */}
//             {/* <Link href="/" className="flex items-center gap-2">
//           <span className="text-lg font-semibold tracking-wide text-[#d4af37]">
//             Enwiya Lawfare
//           </span>
//         </Link> */}

//             {/* Desktop Navigation */}
//             <NavigationMenu className="hidden md:flex">
//               <NavigationMenuList className="gap-6">
//                 {navItems.map((item) => {
//                   const isActive = pathname === item.href;

//                   return (
//                     <NavigationMenuItem key={item.name}>
//                       <Link
//                         href={item.href}
//                         className={cn(
//                           "text-sm font-medium transition-colors",
//                           isActive
//                             ? "text-[var(--primary-accent)]"
//                             : "text-[var(--muted-foreground)] hover:text-[var(--primary-accent)]",
//                         )}
//                       >
//                         {item.name}
//                       </Link>
//                     </NavigationMenuItem>
//                   );
//                 })}
//               </NavigationMenuList>
//             </NavigationMenu>

//             {/* CTA (desktop) */}
//             <div className="hidden md:flex">
//               <Button asChild>
//                 <Link href="/contact">Free Consultation</Link>
//               </Button>
//             </div>

//             {/* Mobile Menu (hamburger) */}
//             <div className="md:hidden">
//               <button
//                 aria-label={open ? "Close menu" : "Open menu"}
//                 onClick={() => setOpen((v) => !v)}
//                 className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-transparent text-[var(--muted-foreground)] hover:bg-[var(--card)]/6"
//               >
//                 {!open ? (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M4 6h16M4 12h16M4 18h16"
//                     />
//                   </svg>
//                 ) : (
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 )}
//               </button>
//             </div>
//           </div>
//           </div>
//         </header>
//       )}

//       {/* Mobile menu panel */}
//       {open && (
//         <div className="fixed inset-0 z-50 md:hidden">
//           <div
//             className="absolute inset-0 bg-[#0b0b0b]/95 backdrop-blur"
//             onClick={() => setOpen(false)}
//           />
//           <nav className="relative z-50 h-full w-full overflow-auto">
//             <div className="flex h-full flex-col gap-6 p-6">
//               <div className="flex items-center justify-between">
//                 <Link href="/" className="flex items-center gap-2">
//                   <img
//                     src={logoImage.src}
//                     alt="Enwiya Lawfare Logo"
//                     className="h-10 w-auto"
//                   />
//                 </Link>
//                 <button
//                   aria-label="Close menu"
//                   onClick={() => setOpen(false)}
//                   className="h-10 w-10 rounded-md bg-transparent text-[var(--muted-foreground)]"
//                 >
//                   <svg
//                     xmlns="http://www.w3.org/2000/svg"
//                     className="h-6 w-6"
//                     fill="none"
//                     viewBox="0 0 24 24"
//                     stroke="currentColor"
//                   >
//                     <path
//                       strokeLinecap="round"
//                       strokeLinejoin="round"
//                       strokeWidth={2}
//                       d="M6 18L18 6M6 6l12 12"
//                     />
//                   </svg>
//                 </button>
//               </div>

//               <div className="mt-4 grid grid-cols-2 gap-4">
//                 {navItems.map((item) => (
//                   <Link
//                     key={item.href}
//                     href={item.href}
//                     onClick={() => setOpen(false)}
//                     className={cn(
//                       "text-lg font-medium",
//                       pathname === item.href
//                         ? "text-[var(--primary-accent)]"
//                         : "text-white",
//                     )}
//                   >
//                     {item.name}
//                   </Link>
//                 ))}
//               </div>

//               <div className="mt-auto">
//                 <Button asChild className="w-full bg-[var(--headder-text-color)] text-black">
//                   <Link href="/contact" onClick={() => setOpen(false)}>
//                     Free Consultation
//                   </Link>
//                 </Button>
//               </div>
//             </div>
//           </nav>
//         </div>
//       )}
//     </div>
//   );
// }
