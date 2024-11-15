import React from 'react';

const HeroSection = () => {
  return (
    <div style={styles.itenerarySection}>
      <img src="public/asset/image/itenerary1.png" alt="itenerary" style={styles.heroImage} />
      <div style={styles.textContainer}>
        <h1 style={styles.textfront}>Ready to make your vacation more planned?</h1>
        <p style={styles.textp}>Plan your dream vacation!
          Arrange an itinerary now and enjoy a hassle-free trip!</p>
        <button style={styles.button}>Create Your Itinerary!</button> {/* Tombol ditambahkan */}
      </div>
    </div>
  );
};

const styles = {
  itenerarySection: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0px',
    backgroundColor: '#E6F0FA',
    borderRadius: '15px',
    margin: '60px',
    height: '450px',
    position: 'relative',
    borderTopLeftRadius: '10px',  // Border-radius hanya di atas kiri
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '0',  // Tidak ada border-radius di bawah kiri
    borderBottomRightRadius: '0',
    top: '70px',
    marginBottom: '130px',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 600,
  },

  textContainer: {
    display: 'flex',
    flexDirection: 'column',  // Membuat teks dan tombol berjejer secara vertikal
    justifyContent: 'center',
    alignItems: 'flex-start',  // Menyelaraskan tombol dengan kiri
    maxWidth: '50%',
    zIndex: 1,
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    color: 'black',
    padding: '40px',
    fontSize: '50px',
  },
  

  textfront: {
    fontSize: '3.5rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 500,
    color: 'black',
  },

  textp: {
    fontSize: '1.25rem',
    fontFamily: 'Montserrat, sans-serif',
    fontWeight: 100,
    color: '#797A7B',
  },

  button: {
    marginTop: '0px',
    padding: '10px 20px',
    fontSize: '0.9rem',
    backgroundColor: '#007BFF', // Warna biru untuk tombol
    color: '#fff',
    border: 'none',
    borderRadius: '10px',
    cursor: 'pointer',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },

  heroImage: {
    width: '50%',  // Menyesuaikan gambar agar berada di sebelah kiri
    height: '100%',
    borderRadius: '15px',
    objectFit: 'cover',
    borderTopLeftRadius: '0px',  
    borderTopRightRadius: '10px',
    borderBottomLeftRadius: '0',  
    borderBottomRightRadius: '0',
    top: 0,
  },
};

export default HeroSection;