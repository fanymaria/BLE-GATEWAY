import React from "react";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

const Hederhome2 = () => {
  return (
    <div style={styles.popularCategories}>
      <h2 style={styles.title}>Our Popular Categories</h2>
      <div style={styles.categoryContainer}>
        <Link to="/accommodation" style={styles.category}>
          <div style={styles.iconContainer}>
            <img src="/asset/image/icon3.png" alt="Accommodation" style={styles.icon} />
          </div>
          <p style={styles.categoryText}>Accommodation</p>
        </Link>
        <Link to="/destination" style={styles.category}>
          <div style={styles.iconContainer}>
            <img src="/asset/image/icon2.png" alt="Destination" style={styles.icon} />
          </div>
          <p style={styles.categoryText}>Destination</p>
        </Link>
        <Link to="/transportation" style={styles.category}>
          <div style={styles.iconContainer}>
            <img src="/asset/image/icon1.png" alt="Transportation" style={styles.icon} />
          </div>
          <p style={styles.categoryText}>Transportation</p>
        </Link>
      </div>
    </div>
  );
};

const styles = {
  popularCategories: {
    textAlign: 'center',
    padding: '40px 0',
    fontFamily: 'Montserrat, sans-serif',
    width: '100%',
  },
  title: {
    fontSize: '24px',
    fontWeight: 'bold',
    marginTop: '30px',
  },
  categoryContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '40px',
  },
  category: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
    textDecoration: 'none',
    color: '#333',
    transition: 'transform 0.3s ease', // Menambahkan transisi untuk efek zoom
  },
  categoryHover: {
    transform: 'scale(1.1)',  // Zoom saat hover
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    backgroundColor: '#f5f5f5',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
    overflow: 'hidden',
  },
  icon: {
    width: '50px',
    height: '50px',
  },
  categoryText: {
    margin: 0,
    fontSize: '16px',
    marginBottom: '30px',
  },
};

// Menambahkan efek hover menggunakan JavaScript
styles.category[':hover'] = {
  transform: 'scale(1.1)', // Zoom saat hover
};

export default Hederhome2;