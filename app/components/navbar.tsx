"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect, useCallback, useRef } from "react";
import { cn } from "../../lib/utils";
import { Button } from "./ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "./ui/navigation-menu";
import { Menu, X, Phone, ChevronDown } from "lucide-react";
import logoImage from "../../utils/img/fulllogo_transparent.png";

const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Reviews", href: "/reviews" },
  { name: "Contact", href: "/contact" },
];

const practiceAreaItems = [
  { name: "Corporate Law", href: "/practice-area/corporate" },
  { name: "Estate Planning", href: "/practice-area/estate" },
  { name: "Immigration Law", href: "/practice-area/immigration" },
  { name: "Probate", href: "/practice-area/probate" },
];

export function Navbar() {
  const pathname = usePathname();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPracticeMenuOpen, setIsPracticeMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const isPracticeRoute = pathname?.startsWith("/practice-area");

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
    setIsPracticeMenuOpen(false);
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
            ? "bg-[#0b0b0b]/95 backdrop-blur-md shadow-lg border-b border-white/10"
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
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex items-center gap-1">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <NavigationMenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "relative px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                            "rounded-md hover:bg-white/5",
                            isActive
                              ? "text-[var(--headder-text-color)] "
                              : "text-[var(--navbar-font-color)] hover:text-[var(--headder-text-color)]"
                          )}
                        >
                          {item.name}
                          {isActive && (
                            <span className="absolute bottom-0 left-1/2 h-0.5 w-6 -translate-x-1/2 rounded-full bg-[var(--primary-accent)]" />
                          )}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                      className={cn(
                        "relative rounded-md bg-transparent px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                        "hover:bg-white/5 hover:text-[var(--headder-text-color)]data-[state=open]:text-[var(--headder-text-color)]",
                        isPracticeRoute
                          ? "text-[var(--headder-text-color)]"
                          : "text-[var(--navbar-font-color)]"
                      )}
                    >
                      <span className="inline-flex items-center gap-1.5">
                        Practice Areas
                        {/* <ChevronDown className="h-3.5 w-3.5" /> */}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <div className="w-[300px] rounded-lg border border-white/10 bg-[#0b0b0b]/95 p-2 shadow-xl backdrop-blur-md">
                        <Link
                          href="/practice-area"
                          className="mb-1 block rounded-md px-3 py-2 text-sm font-semibold text-[var(--headder-text-color)] transition-colors"
                        >
                          View All Practice Areas
                        </Link>
                        <ul className="space-y-1">
                        {practiceAreaItems.map((area) => {
                          const isActive = pathname === area.href;
                          return (
                            <li key={area.href}>
                              <NavigationMenuLink asChild>
                                <Link
                                  href={area.href}
                                  className={cn(
                                    "block rounded-md px-3 py-2 text-sm transition-colors",
                                    isActive
                                      ? "bg-white/5 text-[var(--headder-text-color)]"
                                      : "text-[var(--navbar-font-color)] hover:bg-white/5 hover:text-[var(--headder-text-color)]"
                                  )}
                                >
                                  {area.name}
                                </Link>
                              </NavigationMenuLink>
                            </li>
                          );
                        })}
                        </ul>
                      </div>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>

              {/* CTA Button */}
              <Button
                asChild
                className={cn(
                  "ml-4 transition-all duration-200",
                  "bg-[var(--headder-text-color)] text-black font-semibold",
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

                <button
                  type="button"
                  onClick={() => setIsPracticeMenuOpen((prev) => !prev)}
                  aria-expanded={isPracticeMenuOpen}
                  className={cn(
                    "group flex w-full items-center justify-between rounded-xl px-4 py-4",
                    "text-lg font-medium transition-all duration-200",
                    "border border-transparent",
                    isPracticeRoute || isPracticeMenuOpen
                      ? "bg-[var(--primary-accent)]/10 text-[var(--primary-accent)] border-[var(--primary-accent)]/20"
                      : "text-gray-300 hover:bg-white/5 hover:text-white hover:border-white/10"
                  )}
                >
                  <span className="flex items-center gap-3">
                    <span
                      className={cn(
                        "h-2 w-2 rounded-full transition-all duration-200",
                        isPracticeRoute || isPracticeMenuOpen
                          ? "bg-[var(--primary-accent)]"
                          : "bg-gray-600 group-hover:bg-gray-400"
                      )}
                    />
                    Practice Areas
                  </span>
                  <ChevronDown
                    className={cn(
                      "h-4 w-4 transition-transform duration-200",
                      isPracticeMenuOpen && "rotate-180"
                    )}
                  />
                </button>

                {isPracticeMenuOpen && (
                  <div className="ml-5 mt-1 flex flex-col gap-2">
                    <Link
                      href="/practice-area"
                      className={cn(
                        "rounded-lg border px-3 py-2 text-sm font-semibold transition-all duration-200",
                        pathname === "/practice-area"
                          ? "border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)]"
                          : "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                      )}
                    >
                      View All Practice Areas
                    </Link>
                    {practiceAreaItems.map((area) => {
                      const isActive = pathname === area.href;
                      return (
                        <Link
                          key={area.href}
                          href={area.href}
                          className={cn(
                            "rounded-lg border px-3 py-2 text-sm transition-all duration-200",
                            isActive
                              ? "border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/10 text-[var(--primary-accent)]"
                              : "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
                          )}
                        >
                          {area.name}
                        </Link>
                      );
                    })}
                  </div>
                )}
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
