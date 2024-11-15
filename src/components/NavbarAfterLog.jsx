import React from 'react';
import { Link } from "react-router-dom";

const NavbarAfter = () => {
  return (
    <nav style={styles.navbar}>
      <div style={styles.logo}>
        <img src="/asset/image/logo website tripbaliin.png" alt="Logo" style={styles.logoImage} />
      </div>
      <div style={styles.navLinks}>
        <div style={styles.navLinksnav}>
          <Link to="/home" href="app.jsx" style={styles.link}>Home</Link>
          <Link to="/di isi halaman About baru setelah login" href="app.jsx" style={styles.link}>About</Link>
          <Link to="/halaman Itinerary setelah login" href="app.jsx" style={styles.link}>Itinerary</Link>
          <Link to="/halaman Contact setelah login" href="app.jsx" style={styles.link}>Contact</Link>
        </div>
      </div>
      <div style={styles.buttonContainer}>
        <img src="/path/to/your/profile.jpg" alt="Profile" style={styles.profileImage} />
      </div>
    </nav>
  );
};

const styles = {
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 0',
    backgroundColor: '#0F67B1',
    color: 'white',
    width: '100%',
    position: 'fixed',                
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '120px',              
  },
  logoImage: {
    width: '130px',
  },
  navLinks: {
    display: 'flex',
    flex: 1,
    justifyContent: 'center',
  },
  navLinksnav: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',                       
    fontFamily: 'Montserrat, sans-serif',
    fontSize: '20px',
  },
  link: {
    color: 'white',
    textDecoration: 'none',
    fontSize: '1em',
  },
  buttonContainer: {
    display: 'flex',
    alignItems: 'center',
    marginRight: '120px',          
    gap: '10px',                      
  },
  profileImage: {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    objectFit: 'cover',
  },
};

export default NavbarAfter;