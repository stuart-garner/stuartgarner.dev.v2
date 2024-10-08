import { faArrowUp, faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTheme } from "@sg/context/ThemeContext";
import Link from "next/link";
import { useEffect, useState } from "react";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [showScrollTop, setShowScrollTop] = useState(false);
  /*
   *
   *
   * */
  useEffect(() => {
    const controlNavbar = () => {
      window.scrollY > 375 ? setShowScrollTop(true) : setShowScrollTop(false);
    };

    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, []);

  const topFunction = () => {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  };

  return (
    <header className="absolute z-50 h-auto w-full">
      <nav className="flex items-center justify-between bg-transparent px-3 py-3 ">
        <div>
          <Link
            href="/"
            scroll={false}
            aria-label="Link to home page"
            className="font-[Orbitron] text-4xl text-white"
          >
            [SG]
          </Link>
        </div>
        <button
          onClick={toggleTheme}
          className="fixed top-5 right-5 p-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded-xl "
        >
          {theme === "dark" ? (
            <FontAwesomeIcon icon={faSun} className="h-5 w-5" />
          ) : (
            <FontAwesomeIcon icon={faMoon} className="h-5 w-5" />
          )}
        </button>
      </nav>
      <div
        onClick={() => topFunction()}
        className={`fixed bottom-5 right-5 cursor-pointer rounded-xl bg-slate-900 p-6 text-white transition-all duration-300 ${
          showScrollTop ? "bottom-5" : "bottom-[-100px]"
        }`}
      >
        <FontAwesomeIcon icon={faArrowUp} className="h-5 w-5" />
      </div>
    </header>
  );
};

export default Header;
