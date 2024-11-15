import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faQuestionCircle } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

const ContactSupport = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Is there anything we need help with?</h2>
      <p style={styles.subheading}>
        You can directly chat admin with the following information:
      </p>
      <div style={styles.contactOptions}>
        {/* WhatsApp */}
        <a href="https://wa.me/628957723456" target="_blank" rel="noopener noreferrer" style={styles.contactCard}>
          <div style={styles.iconContainer}>
            <FontAwesomeIcon icon={faWhatsapp} style={styles.icon} />
          </div>
          <h3 style={styles.contactTitle}>Whatsapp</h3>
          <p style={styles.contactInfo}>+62 895 7723 456</p>
        </a>

        {/* Email */}
        <a href="mailto:TripBaliin@gmail.com" target="_blank" rel="noopener noreferrer" style={styles.contactCard}>
          <div style={styles.iconContainer}>
            <FontAwesomeIcon icon={faEnvelope} style={styles.icon} />
          </div>
          <h3 style={styles.contactTitle}>Email</h3>
          <p style={styles.contactInfo}>TripBaliin@gmail.com</p>
        </a>

        {/* FAQ */}
        <a href="/faq" style={styles.contactCard}>
          <div style={styles.iconContainer}>
            <FontAwesomeIcon icon={faQuestionCircle} style={styles.icon} />
          </div>
          <h3 style={styles.contactTitle}>FAQ</h3>
          <p style={styles.contactInfo}>Ask Here</p>
        </a>
      </div>

      {/* Back to Home Link */}
      <Link to="/" style={styles.backButton}>Back to Home</Link>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    width:'1200px'
  },
  heading: {
    fontSize: '24px',
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: '10px',
  },
  subheading: {
    fontSize: '16px',
    color: '#666',
    textAlign: 'center',
    marginBottom: '30px',
  },
  contactOptions: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginBottom: '30px',
  },
  contactCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    border: '1px solid #007bff',
    borderRadius: '10px',
    width: '200px',
    height: '250px',
    textAlign: 'center',
    textDecoration: 'none', // Removes underline from links
    color: 'inherit', // Keeps text color consistent
  },
  iconContainer: {
    width: '50px',
    height: '50px',
    borderRadius: '50%',
    backgroundColor: '#e6f2ff',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '10px',
  },
  icon: {
    color: '#007bff',
    fontSize: '24px',
  },
  contactTitle: {
    fontSize: '16px',
    fontWeight: 'bold',
    margin: '10px 0 5px',
  },
  contactInfo: {
    fontSize: '14px',
    color: '#666',
  },
  backButton: {
    padding: '10px 20px',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: '#0F67B1',
    border: 'none',
    borderRadius: '5px',
    textDecoration: 'none',
    display: 'inline-block',
    textAlign: 'center',
    cursor: 'pointer',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.2)', // Added shadow
    transition: 'box-shadow 0.3s ease', // Smooth transition for shadow on hover
  },
};

export default ContactSupport;