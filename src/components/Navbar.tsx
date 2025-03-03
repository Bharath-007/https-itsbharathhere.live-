import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0 },
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/90 backdrop-blur-md py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <NavLink to="/" className="text-2xl font-bold gradient-text">
          Bharath's Portfolio
        </NavLink>

        {/* Desktop Navigation */}
        <motion.nav
          className="hidden md:flex space-x-8"
          initial="hidden"
          animate="visible"
          variants={navVariants}
        >
          <motion.div variants={itemVariants}>
            <NavLink
              to="/"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link text-accent" : ""}`
              }
            >
              Home
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link text-accent" : ""}`
              }
            >
              About
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink
              to="/projects"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link text-accent" : ""}`
              }
            >
              Projects
            </NavLink>
          </motion.div>
          <motion.div variants={itemVariants}>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `nav-link ${isActive ? "active-link text-accent" : ""}`
              }
            >
              Contact
            </NavLink>
          </motion.div>
          {/* <motion.div variants={itemVariants}>
            <a
              href="/BharathResume.pdf"
              className="btn btn-outline flex items-center gap-2"
              download
            >
              <Download size={16} />
              Resume
            </a>
          </motion.div> */}
        </motion.nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden fixed inset-0 bg-background z-40 pt-20"
        initial="closed"
        animate={isOpen ? "open" : "closed"}
        variants={mobileMenuVariants}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <div className="flex flex-col items-center space-y-8 p-8">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-2xl nav-link ${isActive ? "active-link text-accent" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-2xl nav-link ${isActive ? "active-link text-accent" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `text-2xl nav-link ${isActive ? "active-link text-accent" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            Projects
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-2xl nav-link ${isActive ? "active-link text-accent" : ""}`
            }
            onClick={() => setIsOpen(false)}
          >
            Contact
          </NavLink>
          <a
            href="/BharathResume.pdf"
            className="btn btn-outline flex items-center gap-2"
            download
            onClick={() => setIsOpen(false)}
          >
            <Download size={16} />
            Resume
          </a>
        </div>
      </motion.div>
    </header>
  );
};

export default Navbar;
