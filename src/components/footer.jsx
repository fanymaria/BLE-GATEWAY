import React from "react";

function Footer() {
  const styles = {
    footer: {
      backgroundColor: "#0F67B1",
      color: "#fff",
      padding: "30px",
      display: "flex",
      justifyContent: "space-around",
      flexWrap: "wrap",
      fontFamily: "Montserrat, sans-serif",
    },
    section: {
      flex: "1 1 200px", // Ensure sections take equal space and wrap
      margin: "0 20px",
      paddingBottom: "20px",
    },
    title: {
      fontWeight: "bold",
      fontSize: "15px",
      marginBottom: "20px",
    },
    listItem: {
      fontWeight: "normal",
      fontSize: "14px",
      marginBottom: "8px",
    },
    languageCurrency: {
      display: "flex",
      flexDirection: "column",
    },
    dropdown: {
      width: "150px",
      padding: "8px",
      marginBottom: "10px",
      borderRadius: "4px",
      border: "1px solid #ccc",
    },
    paymentIcons: {
      display: "grid",
      gridTemplateColumns: "repeat(5, 0.01fr)", // Use grid for a more structured layout
      gap: "5px",
      marginTop: "10px",
    },
    paymentIcon: {
      width: "50px",
      height: "25px",
      objectFit: "contain",
    },
    copyright: {
      backgroundColor: "#054D89",
      textAlign: "center",
      padding: "10px",
      color: "#fff",
      fontFamily:'',
      // marginTop: "20px",
      fontSize: "14px",
    },
  };

  return (
    <footer>
      <div style={styles.footer}>
        {/* Language and Currency */}
        <div style={styles.section}>
          <div style={styles.title}>Language</div>
          <select style={styles.dropdown}>
            <option>English (UK)</option>
            <option>Indonesia (ID)</option>
          </select>

          <div style={styles.title}>Currency</div>
          <select style={styles.dropdown}>
            <option>IDR (Rp)</option>
          </select>
        </div>

        {/* Company */}
        <div style={styles.section}>
          <div style={styles.title}>Company</div>
          <div style={styles.listItem}>About Us</div>
          <div style={styles.listItem}>Accommodation</div>
          <div style={styles.listItem}>Destination</div>
          <div style={styles.listItem}>Indonesia</div>
        </div>

        {/* Help */}
        <div style={styles.section}>
          <div style={styles.title}>Help</div>
          <div style={styles.listItem}>Contact us</div>
          <div style={styles.listItem}>FAQs</div>
          <div style={styles.listItem}>Terms and conditions</div>
          <div style={styles.listItem}>Privacy policy</div>
          <div style={styles.listItem}>Sitemap</div>
        </div>

        {/* Payment Methods */}
        <div style={styles.section}>
          <div style={styles.title}>Payment Methods Possible</div>
          <div style={styles.paymentIcons}>
            <img src="/asset/image/visa.png" alt="Visa" style={styles.paymentIcon} />
            <img src="/asset/image/mastercard.png" alt="Mastercard" style={styles.paymentIcon} />
            <img src="/asset/image/indo.png" alt="Indo" style={styles.paymentIcon} />
            <img src="/asset/image/bca.png" alt="BCA" style={styles.paymentIcon} />
            <img src="/asset/image/mandiri.png" alt="Mandiri" style={styles.paymentIcon} />
            <img src="/asset/image/bri.png" alt="BRI" style={styles.paymentIcon} />
            <img src="/asset/image/alfa.png" alt="Alfamart" style={styles.paymentIcon} />
            <img src="/asset/image/alfa2.png" alt="Alfa2" style={styles.paymentIcon} />
            <img src="/asset/image/dki.png" alt="DKI" style={styles.paymentIcon} />
            <img src="/asset/image/bni.png" alt="BNI" style={styles.paymentIcon} />
          </div>
        </div>
      </div>

      {/* Copyright  */}
      <div style={styles.copyright}>
        Copyright 2024 TripBaliin. All Rights Reserved
      </div>
    </footer>
  );
}

export default Footer;
