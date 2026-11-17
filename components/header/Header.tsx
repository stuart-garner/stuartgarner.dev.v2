"use client";

import { faArrowUp, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState, useSyncExternalStore } from "react";

type Theme = "light" | "dark";

const subscribeToTheme = (onChange: () => void) => {
  const observer = new MutationObserver(onChange);
  observer.observe(document.documentElement, {
    attributes: true,
    attributeFilter: ["class"],
  });
  return () => observer.disconnect();
};

const getTheme = (): Theme =>
  document.documentElement.classList.contains("dark") ? "dark" : "light";

const getServerTheme = (): Theme => "light";

const Header = () => {
  const theme = useSyncExternalStore(
    subscribeToTheme,
    getTheme,
    getServerTheme,
  );
  const [showScrollTop, setShowScrollTop] = useState(false);
  /*
   *
   *
   * */
  useEffect(() => {
    const controlNavbar = () => {
      setShowScrollTop(window.scrollY > 375);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <header className="absolute z-50 h-auto w-full">
      <nav className="flex items-center justify-between bg-transparent px-3 py-3">
        <div>
          <Link
            href="/"
            scroll={false}
            aria-label="Link to home page"
            className="font-orbitron text-4xl text-white"
          >
            [SG]
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          aria-label="Toggle dark mode"
          className="fixed top-5 right-5 rounded-xl bg-gray-200 p-2 text-black dark:bg-gray-700 dark:text-white"
        >
          <FontAwesomeIcon
            icon={theme === "dark" ? faSun : faMoon}
            className="h-5 w-5"
          />
        </button>
      </nav>
      <div
        onClick={topFunction}
        className={`fixed right-5 cursor-pointer rounded-xl bg-slate-900 p-6 text-white transition-all duration-300 ${
          showScrollTop ? "bottom-5" : "bottom-[-100px]"
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
