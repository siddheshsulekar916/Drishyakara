import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const isSolid = location.pathname !== '/' || scrolled;

  return (
    <nav className={`navbar ${isSolid ? 'solid scrolled' : ''}`}>
      <div className="logo">
        <Link to="/" onClick={closeMenu}>DRISHYAKARA</Link>
      </div>
      <ul className="nav-links" style={{ display: menuOpen ? 'flex' : undefined, flexDirection: menuOpen ? 'column' : undefined, position: menuOpen ? 'absolute' : undefined, top: menuOpen ? '100%' : undefined, left: menuOpen ? 0 : undefined, width: menuOpen ? '100%' : undefined, background: menuOpen ? 'rgba(26,26,26,0.95)' : undefined, padding: menuOpen ? '20px 5%' : undefined }}>
        <li><Link to="/#work" className="nav-link" onClick={closeMenu}>Work</Link></li>
        <li><Link to="/tour" className={`nav-link ${location.pathname === '/tour' ? 'active' : ''}`} onClick={closeMenu}>Virtual Tours</Link></li>
        <li><Link to="/studio" className={`nav-link ${location.pathname === '/studio' ? 'active' : ''}`} onClick={closeMenu}>Studio</Link></li>
        <li><Link to="/contact" className={`nav-link ${location.pathname === '/contact' ? 'active' : ''}`} onClick={closeMenu}>Contact</Link></li>
      </ul>
      <div className="menu-toggle" onClick={toggleMenu} style={{ display: 'flex' }}>
        <span></span><span></span><span></span>
      </div>
    </nav>
  );
};

export default Navbar;
