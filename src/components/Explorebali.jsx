import React from 'react';

const ExploreBali = () => {
  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        {/* Title and Description */}
        <h2 style={styles.title}>Explore Bali</h2>
        <p style={styles.description}>
          Discover the hidden beauty of Bali waiting to be explored! From white sandy beaches to calming green rice fields
        </p>

        {/* Image Grid */}
        <div style={styles.gridContainer}>
          {/* Left Column */}
          <div style={styles.leftColumn}>
            <img src="/asset/image/grid1.png" alt="Temple" style={{ ...styles.image, ...styles.largeImage }} />
            <div style={styles.bottomRow}>
              <img src="/asset/image/grid4.png" alt="Statue" style={{ ...styles.image, ...styles.mediumimage }} />
              <img src="/asset/image/grid5.png" alt="Sunset" style={{ ...styles.image, ...styles.mediumimage }} />
            </div>
          </div>

          {/* Right Column */}
          <div style={styles.rightColumn}>
            <img src="/asset/image/grid2.png" alt="Beach" style={{ ...styles.image, ...styles.smallImage }} />
            <img src="/asset/image/grid3.png" alt="Resort" style={{ ...styles.image, ...styles.smallImage }} />
            <img src="/asset/image/grid6.png" alt="Cliff Beach" style={{ ...styles.image, ...styles.smallImage }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    padding: '20px',
    boxSizing: 'border-box',
    width: '100%',
  },
  container: {
    maxWidth: '1200px',
    width: '100%',
    textAlign: 'center',
    fontFamily: 'Arial, sans-serif',
    padding: '20px 20px',
  },
  title: {
    fontSize: '32px',
    fontWeight: 'bold',
    marginBottom: '10px',
  },
  description: {
    fontSize: '16px',
    color: '#666',
    marginBottom: '40px',
  },
  gridContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '10x',
    marginBottom: '30px',
  },
  leftColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: '1',
  },
  bottomRow: {
    display: 'flex',
    gap: '10px',
  },
  rightColumn: {
    display: 'flex',
    flexDirection: 'column',
    gap: '10px',
    flex: '0.5',
  },
  image: {
    borderRadius: '5px',
    objectFit: 'cover',
  },
  largeImage: {
    width: '98%',
    height: '360px',
  },
  smallImage: {
    width: '100%',
    height: '250px',
  },
  mediumimage: {
    width: '48.5%',
    height: '400px',
  }
};

export default ExploreBali;