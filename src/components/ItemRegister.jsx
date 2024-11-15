import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook } from '@fortawesome/free-brands-svg-icons';

function RegisterHalaman() {
  const navigate = useNavigate();
  const [fullname, setFullname] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  // Fungsi untuk memvalidasi email
  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSignUp = () => {
    setError('');

    // Validasi form
    if (!fullname || !email || !password) {
      setError('Semua kolom harus diisi.');
    } else if (!validateEmail(email)) {
      setError('Format email tidak valid.');
    } else {
      // Jika validasi berhasil, bisa tambahkan logika registrasi di sini
      navigate('/login'); // Navigasi ke halaman login setelah berhasil
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.leftPanel}>
        <div style={styles.logo}>
          <img src="/asset/image/logo website tripbaliin.png" alt="Logo" style={styles.logoImage} />
        </div>
      </div>
      <div style={styles.rightPanel}>
        <div style={styles.formContainer}>
          <h2 style={styles.title}>Sign Up</h2>
          <p style={styles.subtitle}>Masukkan detail Anda di bawah ini</p>
          {error && <p style={styles.errorText}>{error}</p>}
          <input
            style={styles.input}
            type="text"
            placeholder="Full Name"
            value={fullname}
            onChange={(e) => setFullname(e.target.value)}
          />
          <input
            style={styles.input}
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            style={styles.input}
            type="password"
            placeholder="Confirm Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button style={styles.signUpButton} onClick={handleSignUp}>Sign Up</button>
          <p style={styles.signInText}>
            Sudah punya akun? <Link to="/login" style={styles.signInLink}>Login</Link>
          </p>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    height: '100vh',
    fontFamily: 'Monserat, sans-serif',
    width:'1200px'
  },
  leftPanel: {
    flex: 1,
    backgroundColor: '#005eb8',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    margintop:100,
  },
  logo: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '10px',
    top:500,
  },
  logoImage: {
    width: '550px', 
    height: 'auto', 
    objectFit: 'contain',
    padding:'50px',
    top:'1200px',
  },
  icon: {
    marginRight: '8px',
    color: '#005eb8'
  },
  subtitle: {
    fontSize: '0.9rem',
  },
  rightPanel: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f8f9fa',
  },
  formContainer: {
    width: '80%',
    maxWidth: '400px',
    padding: '40px',
    backgroundColor: '#fff',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  title: {
    fontSize: '1.5rem',
    marginBottom: '10px',
  },
  errorText: {
    color: 'red',
    fontSize: '0.9rem',
    marginBottom: '10px',
  },
  input: {
    width: '100%',
    padding: '12px',
    margin: '10px 0',
    borderRadius: '5px',
    border: '1px solid #ddd',
    fontSize: '1rem',
  },
  signUpButton: {
    width: '100%',
    padding: '12px',
    backgroundColor: '#005eb8',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    fontSize: '1rem',
    cursor: 'pointer',
    marginTop: '20px',
  },
  signInText: {
    fontSize: '0.9rem',
    color: '#555',
    marginTop: '10px',
  },
  signInLink: {
    color: '#005eb8',
    textDecoration: 'none',
  },
  orText: {
    fontSize: '0.9rem',
    color: '#555',
    margin: '20px 0',
  },
  socialButtons: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10px',
  },
  googleButton: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  facebookButton: {
    flex: 1,
    padding: '10px',
    border: '1px solid #ddd',
    backgroundColor: '#fff',
    color: '#333',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default RegisterHalaman;