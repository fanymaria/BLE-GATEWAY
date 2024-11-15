import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMapMarkerAlt, faCalendarAlt, faFilter } from "@fortawesome/free-solid-svg-icons";
import { Carousel, Container, Row, Col } from "react-bootstrap"; // Import Container, Row, Col dari react-bootstrap

const HederAbout = () => {
    return (
        <div style={styles.hederabout}>
            <div style={styles.textContainer}>
                <h2 style={styles.title}>About Us</h2>
            </div>
            <img src="/asset/image/About1.png" alt="Accommodation" style={styles.image} />
            
            {/* Container untuk konten di bawah gambar */}
            <Container style={styles.container}>
                <Row>
                    {/* Kolom kiri: Judul dan deskripsi */}
                    <Col md={6} style={styles.leftColumn}>
                    <h3 style={styles.subTitle}>
                    <span style={styles.who}>Who</span> <span style={styles.weAre}>We Are</span>
                    </h3>
                        <p style={styles.text}>
                        Become a trusted travel platform that makes it easier for tourists to discover, 
                        plan and enjoy the best experiences in Bali, while exploring its unique culture and natural beauty.
                        </p>
                        <h3 style={styles.subTitle}>
                        <span style={styles.who}>Our</span> <span style={styles.weAre}>Mission</span>
                        </h3>
                        <p style={styles.text}>
                        Inspire travelers to experience Bali in depth through an accessible itinerary 
                        guide, with a focus on natural beauty, local culture and unique, memorable experiences.
                        </p>
                        
                    </Col>
                    
                    {/* Kolom kanan: Gambar */}
                    <Col md={6} style={styles.rightColumn}>
                        <img src="/asset/image/about3.png" alt="Mission" style={styles.rightImage} />
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

const styles = {
    hederabout: {
        textAlign: 'center',
        padding: '40px 0',
        fontFamily: 'Montserrat, sans-serif',
        width: '100%',
        position: 'relative', // Membantu menempatkan teks di atas gambar
    },
    textContainer: {
        position: 'absolute', // Agar teks bisa ditempatkan di atas gambar
        top: '50%',          // Menempatkan teks di tengah vertikal
        left: '50%',
        transform: 'translate(-50%, -50%)', // Agar teks benar-benar berada di tengah
        zIndex: 1,           // Menempatkan teks di atas gambar
        color: '#fff',
        fontFamily: 'Montserrat, sans-serif',
        fontSize: '20px',      // Memberikan warna putih pada teks agar terlihat di atas gambar
    },
    title: {
        margin: 0,
        fontSize: '50px',
        fontWeight: '100',
        marginBottom:'450px'
    },
    image: {
        marginTop: '30px',  // Menambahkan margin atas pada gambar
        width: '100%',      // Menyesuaikan gambar dengan lebar 100% jika perlu
        height: 'auto',     // Menjaga aspek rasio gambar
    },
    container: {
        marginTop: '50px',  // Jarak antara gambar dan container
    },
    leftColumn: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '20px',
        textAlign: 'left',
    },
    subTitle: {
        fontSize: '28px',
        fontWeight: 'bold',
        marginBottom: '10px',
    },
    who: {
        color: 'black', // Warna hitam untuk "Who"
    },
    weAre: {
        color: '#0F67B1', // Warna biru untuk "We Are"
    },
    text: {
        fontSize: '18px',
        lineHeight: '1.6',
        color: '#555',
        
    },
    rightColumn: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
    },
    rightImage: {
        width: '100%',       // Menyesuaikan gambar dengan lebar kolom
        height: 'auto',      // Menjaga aspek rasio gambar
    },
};

export default HederAbout;