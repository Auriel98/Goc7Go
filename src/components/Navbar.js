'use client';

import { useEffect } from 'react';

export default function Navbar() {
  useEffect(() => {
    // Effet au scroll pour réduire la navbar
    const handleScroll = () => {
      const nav = document.querySelector('.nav');
      const currentScroll = window.pageYOffset;
      
      if (currentScroll > 50) {
        nav?.classList.add('scrolled');
      } else {
        nav?.classList.remove('scrolled');
      }
    };

    // Active state sur les liens
    const handleActiveLinks = () => {
      const sections = document.querySelectorAll('section[id]');
      const navLinks = document.querySelectorAll('.nav-link');
      
      let current = '';
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.pageYOffset >= sectionTop - 200) {
          current = section.getAttribute('id') || '';
        }
      });

      navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + current) {
          link.classList.add('active');
        }
      });
    };

    // Menu burger toggle
    const burgerMenu = document.querySelector('.burger-menu');
    const mobileMenu = document.querySelector('.mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

    const toggleMenu = () => {
      burgerMenu?.classList.toggle('active');
      mobileMenu?.classList.toggle('active');
    };

    const closeMenu = () => {
      burgerMenu?.classList.remove('active');
      mobileMenu?.classList.remove('active');
    };

    const handleClickOutside = (e) => {
      if (!burgerMenu?.contains(e.target) && !mobileMenu?.contains(e.target)) {
        closeMenu();
      }
    };

    // Ajouter les écouteurs
    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleActiveLinks);
    burgerMenu?.addEventListener('click', toggleMenu);
    mobileLinks.forEach(link => {
      link.addEventListener('click', closeMenu);
    });
    document.addEventListener('click', handleClickOutside);

    // Nettoyage
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleActiveLinks);
      burgerMenu?.removeEventListener('click', toggleMenu);
      mobileLinks.forEach(link => {
        link.removeEventListener('click', closeMenu);
      });
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="nav">
        <div className="nav-container">
          <a href="#search" className="nav-logo">
            <img src="/images/goc7go.png" alt="Go c'est Go" className="logo-image" />
          </a>

          {/* Menu burger pour mobile */}
          <button className="burger-menu" aria-label="Menu">
            <span></span>
            <span></span>
            <span></span>
          </button>

          <div className="nav-links">
            <a href="#search" className="nav-link">
              <span className="link-text">Réserver</span>
            </a>
            <a href="#how" className="nav-link">
              <span className="link-text">Comment ça marche</span>
            </a>
            <a href="#why" className="nav-link">
              <span className="link-text">Pourquoi nous</span>
            </a>
            <a href="#contact" className="nav-link nav-link-cta">
              <span className="link-text">Contact</span>
            </a>
          </div>
        </div>

        {/* Menu mobile */}
        <div className="mobile-menu">
          <a href="#search" className="mobile-link">
            <span className="mobile-icon">🔍</span>
            Réserver
          </a>
          <a href="#how" className="mobile-link">
            <span className="mobile-icon">❓</span>
            Comment ça marche
          </a>
          <a href="#why" className="mobile-link">
            <span className="mobile-icon">⭐</span>
            Pourquoi nous
          </a>
          <a href="#contact" className="mobile-link mobile-link-cta">
            <span className="mobile-icon">📧</span>
            Contact
          </a>
        </div>
      </nav>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Crimson+Pro:wght@600;700&family=DM+Sans:wght@500;600;700&display=swap');

        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }

        html { 
          scroll-behavior: smooth;
        }

        body {
          margin: 0;
          padding: 0;
        }

        .nav {
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          border-bottom: 1px solid rgba(229, 233, 240, 0.8);
          position: sticky;
          top: 0;
          z-index: 1000;
          box-shadow: 0 2px 20px rgba(10, 31, 61, 0.04);
          transition: all 0.3s ease;
          height: 80px;
          overflow: visible;
        }

        /* ===== BURGER MENU ===== */

        .burger-menu {
          display: none;
          flex-direction: column;
          gap: 5px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
          position: relative;
        }

        .burger-menu span {
          width: 25px;
          height: 3px;
          background: #0a1f3d;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .burger-menu.active span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .burger-menu.active span:nth-child(2) {
          opacity: 0;
        }

        .burger-menu.active span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* ===== MOBILE MENU ===== */

        .mobile-menu {
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          background: rgba(255, 255, 255, 0.98);
          backdrop-filter: blur(20px);
          padding: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
          flex-direction: column;
          gap: 12px;
          opacity: 0;
          transform: translateY(-20px);
          pointer-events: none;
          transition: all 0.3s ease;
          display: none;
          z-index: 999;
          max-height: calc(100vh - 80px);
          overflow-y: auto;
        }

        .mobile-menu.active {
          opacity: 1;
          transform: translateY(0);
          pointer-events: all;
        }

        .mobile-link {
          font-family: 'DM Sans', sans-serif;
          padding: 16px 20px;
          background: white;
          border: 2px solid #e5e9f0;
          border-radius: 12px;
          color: #0a1f3d;
          text-decoration: none;
          font-weight: 600;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 12px;
          transition: all 0.3s ease;
        }

        .mobile-link:active {
          background: #f4f6f9;
          border-color: #3b82f6;
        }

        .mobile-link-cta {
          background: linear-gradient(135deg, #2a7fb8, #1e5a8e);
          color: white;
          border-color: transparent;
        }

        .mobile-link-cta:active {
          background: linear-gradient(135deg, #1e5a8e, #2a7fb8);
        }

        .mobile-icon {
          font-size: 20px;
        }

        .nav-container {
          max-width: 1400px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: 0 48px;
          height: 100%;
        }

        /* ===== LOGO ===== */

        .nav-logo {
          display: flex;
          align-items: center;
          text-decoration: none;
          transition: transform 0.3s ease;
        }

        .nav-logo:hover {
          transform: translateY(-2px);
        }

        .logo-image {
          height: 140px;
          width: auto;
          transition: all 0.3s ease;
          position: relative;
          top: 10px;
        }

        .nav-logo:hover .logo-image {
          transform: scale(1.05);
        }

        /* ===== LINKS ===== */

        .nav-links {
          display: flex;
          align-items: center;
          gap: 8px;
        }

        .nav-link {
          text-decoration: none;
          font-family: 'DM Sans', sans-serif;
          font-size: 15px;
          font-weight: 600;
          color: #3e4c5e;
          padding: 10px 20px;
          border-radius: 8px;
          transition: all 0.3s ease;
          position: relative;
          overflow: hidden;
        }

        .nav-link::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(42, 127, 184, 0.08), transparent);
          transition: left 0.5s ease;
        }

        .nav-link:hover::before {
          left: 100%;
        }

        .nav-link:hover {
          color: #0a1f3d;
          background: rgba(42, 127, 184, 0.06);
        }

        /* ===== CTA BUTTON ===== */

        .nav-link-cta {
          background: linear-gradient(135deg, #2a7fb8, #1e5a8e);
          color: white;
          margin-left: 12px;
          border: 2px solid transparent;
          box-shadow: 0 4px 12px rgba(42, 127, 184, 0.2);
        }

        .nav-link-cta::before {
          background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        }

        .nav-link-cta:hover {
          background: linear-gradient(135deg, #1e5a8e, #2a7fb8);
          color: white;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(42, 127, 184, 0.3);
          border-color: #ff8c42;
        }

        /* ===== ACTIVE STATE ===== */

        .nav-link.active {
          color: #0a1f3d;
          background: rgba(42, 127, 184, 0.08);
        }

        /* ===== RESPONSIVE ===== */

        @media (max-width: 968px) {
          .nav-container {
            padding: 0 32px;
          }

          .nav-links {
            gap: 4px;
          }

          .nav-link {
            font-size: 14px;
            padding: 8px 16px;
          }

          .logo-image {
            height: 150px;
          }
        }

        @media (max-width: 768px) {
          .nav {
            height: 70px;
          }

          .nav-container {
            padding: 0 20px;
          }

          .burger-menu {
            display: flex;
          }

          .nav-links {
            display: none;
          }

          .mobile-menu {
            display: flex;
            top: 70px;
          }

          .logo-image {
            height: 120px;
            top: 5px;
          }
        }

        /* ===== SCROLL EFFECT ===== */

        @media (min-width: 769px) {
          .nav.scrolled {
            height: 70px;
            box-shadow: 0 4px 30px rgba(10, 31, 61, 0.08);
          }

          .nav.scrolled .logo-image {
            height: 140px;
          }
        }
      `}</style>
    </>
  );
}