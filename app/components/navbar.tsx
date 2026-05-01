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
  const [isMobileHeaderVisible, setIsMobileHeaderVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isPracticeRoute = pathname?.startsWith("/practice-area");

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setIsScrolled(currentScrollY > 20);

      if (isMenuOpen) {
        setIsMobileHeaderVisible(true);
        lastScrollY.current = currentScrollY;
        return;
      }

      const isScrollingDown = currentScrollY > lastScrollY.current;
      const hasScrolledEnough = currentScrollY > 80;

      if (isScrollingDown && hasScrolledEnough) {
        setIsMobileHeaderVisible(false);
      } else {
        setIsMobileHeaderVisible(true);
      }

      lastScrollY.current = currentScrollY;
    };

    lastScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isMenuOpen]);

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
    setIsMobileHeaderVisible(true);
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
          "fixed inset-x-0 top-0 z-50 transform transition-all duration-300 ease-in-out lg:translate-y-0",
       
        )}
      >
        <div className="mx-auto max-w-7xl px-3 pt-3 sm:px-6 lg:px-8">
          <div
            className={cn(
              "flex h-16 items-center justify-between rounded-2xl border px-3 sm:px-4",
              isScrolled || isMenuOpen
                ? "border-white/15 bg-[#050505]/75 shadow-[0_12px_45px_-20px_rgba(0,0,0,0.9)]"
                : "border-white/10 bg-[#080808]/90"
            )}
          >
            {/* Logo */}
            <Link 
              href="/" 
              className="flex flex-shrink-0 items-center transition-opacity duration-200 hover:opacity-85"
            >
              <img
                src={logoImage.src}
                alt="Enwiya Lawfare"
                className="h-9 w-auto sm:h-12"
              />
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex lg:items-center lg:gap-4">
              <NavigationMenu viewport={false}>
                <NavigationMenuList className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1 backdrop-blur-xl">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <NavigationMenuItem key={item.name}>
                        <Link
                          href={item.href}
                          className={cn(
                            "relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                            isActive
                              ? "bg-[var(--item-color-schema)]/15 text-[var(--item-color-schema)]"
                              : "text-[var(--navbar-font-color)] hover:bg-white/8 hover:text-[var(--item-color-schema)]"
                          )}
                        >
                          {item.name}
                          {isActive && (
                            <span className="absolute bottom-1 left-1/2 h-0.5 w-5 -translate-x-1/2 rounded-full bg-[var(--primary-accent)]" />
                          )}
                        </Link>
                      </NavigationMenuItem>
                    );
                  })}

                  <NavigationMenuItem>
                    <NavigationMenuTrigger
                     className={cn(
                            "relative rounded-full px-4 py-2 text-sm font-medium tracking-wide transition-all duration-200",
                            isPracticeRoute
                              ? "bg-[var(--primary-accent)]/15 text-[var(--item-color-schema)]"
                              : "text-[var(--navbar-font-color)] hover:bg-white/8 hover:text-[var(--item-color-schema)]"
                          )}
                    
                    >
                      <span className="inline-flex items-center gap-1.5">
                        Practice Areas
                        {/* <ChevronDown className="h-3.5 w-3.5" /> */}
                      </span>
                    </NavigationMenuTrigger>
                    <NavigationMenuContent className="m-0 w-auto !bg-transparent p-0">
                      <div className="w-[320px] mt-[10px] rounded-xl border border-white/10 bg-[#0b0b0b]/80 p-2 shadow-2xl backdrop-blur-2xl">
                        <Link
                          href="/practice-area"
                          className="mb-1 block rounded-lg px-3 py-2 text-sm font-semibold text-[var(--headder-text-color)] transition-colors hover:bg-white/5 hover:text-[var(--primary-accent)]"
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
                                    "block rounded-lg px-3 py-2 text-sm transition-colors",
                                    isActive
                                      ? "bg-[var(--primary-accent)]/15 text-[var(--primary-accent)]"
                                      : "text-white/90 hover:bg-white/5 hover:text-[var(--primary-accent)]"
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
                  "ml-1 rounded-full border border-[var(--item-color-schema)]/30 px-5 transition-all duration-200",
                  "bg-[var(--item-color-schema)]/95 text-black font-semibold",
                  "hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_30px_-10px_var(--item-color-schema)]"
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
                "lg:hidden relative h-10 w-10 rounded-xl border border-white/15",
                "flex items-center justify-center",
                "text-[var(--muted-foreground)] transition-all duration-200",
                "bg-white/[0.03] hover:bg-white/10 hover:text-white",
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
      <div className="h-[88px]" />

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
            "border-l border-white/10 bg-[#070707]/95 shadow-2xl backdrop-blur-2xl",
            "transform transition-transform duration-300 ease-out",
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          )}
        >
          <div className="flex h-full flex-col">
            {/* Mobile Header */}
            <div className="flex h-20 items-center justify-between border-b border-white/10 px-6">
              {/* <img
                src={logoImage.src}
                alt="Enwiya Lawfare"
                className="h-9 w-auto"
              /> */}
              <button
                onClick={() => setIsMenuOpen(false)}
                aria-label="Close menu"
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/15 text-[var(--muted-foreground)] transition-all duration-200 hover:bg-white/10 hover:text-white"
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
                        "group flex items-center gap-3 rounded-2xl px-4 py-4",
                        "text-lg font-medium transition-all duration-200",
                        "border",
                        isActive
                          ? "border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/15 text-[var(--primary-accent)]"
                          : "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
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
                    "group flex w-full items-center justify-between rounded-2xl px-4 py-4",
                    "text-lg font-medium transition-all duration-200",
                    "border",
                    isPracticeRoute || isPracticeMenuOpen
                      ? "border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/15 text-[var(--primary-accent)]"
                      : "border-white/10 text-gray-300 hover:border-white/20 hover:bg-white/5 hover:text-white"
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
                        "rounded-xl border px-3 py-2 text-sm font-semibold transition-all duration-200",
                        pathname === "/practice-area"
                          ? "border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/15 text-[var(--primary-accent)]"
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
                            "rounded-xl border px-3 py-2 text-sm transition-all duration-200",
                            isActive
                              ? "border-[var(--primary-accent)]/30 bg-[var(--primary-accent)]/15 text-[var(--primary-accent)]"
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
                  "w-full rounded-xl border border-[var(--primary-accent)]/30 py-6 text-base font-semibold",
                  "bg-[var(--primary-accent)] text-black",
                  "transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--primary-accent)]/95 hover:shadow-[0_0_30px_-10px_var(--primary-accent)]"
                )}
              >
                <Link href="/contact" className="flex items-center justify-center gap-2">
                  <Phone className="h-5 w-5" />
                  Free Consultation
                </Link>
              </Button>
              {/* <p className="mt-4 text-center text-sm text-gray-500">
                Available 24/7 for emergencies
              </p> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


