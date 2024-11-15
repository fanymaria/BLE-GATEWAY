import React from 'react';

const Contacnav = () => {
    return (
      <nav style={styles.navbar}>
        <div style={styles.logo}>
          <img src="/asset/image/logo website tripbaliin.png" alt="Logo" style={styles.logoImage} />
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
      width: '200px',
      marginLeft: 400,
    },
  };
  
  export default Contacnav;
