import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';

const Feedback = ({ feedbackData }) => {
  return (
    <div style={styles.container}>
      <h2 style={styles.title}>What Travelers Are Saying</h2>
      <p style={styles.subtitle}>
        “I am a traveler and ON TRIP Travels helps me a lot in finding interesting tourist destinations and of course the price offers is very worth it.”
      </p>
      <div style={styles.feedbackContainer}>
        {feedbackData.map((feedback, index) => (
          <div key={index} style={styles.card}>
            <div style={styles.profileContainer}>
              <img src={feedback.profileImage} alt={feedback.name} style={styles.profileImage} />
              <div>
                <h3 style={styles.name}>{feedback.name}</h3>
                <div style={styles.rating}>
                  {Array(feedback.rating).fill().map((_, i) => (
                    <FontAwesomeIcon icon={faStar} style={styles.star} key={i} />
                  ))}
                  </div>
                    <p style={styles.comment}>{feedback.comment}</p>
                </div>
                </div>
              </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    textAlign: 'center',
    padding: '50px 20px',
  },
  title: {
    fontSize: '2rem',
    fontWeight: 400,
    marginBottom: '10px',
  },
  subtitle: {
    fontSize: '1.2rem',
    fontStyle: 'italic',
    color: '#555',
    marginBottom: '30px',
    marginRight: '150px',
    marginLeft: '150px',
  },
  feedbackContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
  },
  card: {
    width: '260px',
    padding: '20px',
    boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'left',
    backgroundColor: '#fff',
  },
  profileContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
  profileImage: {
    width: '80px',
    height: '60px',
    borderRadius: '50%',
    marginRight: '10px',
  },
  name: {
    fontSize: '0.9rem',
    fontWeight: 'bold',
    margin: 0,
  },
  rating: {
    display: 'flex',
    alignItems: 'center',
  },
  star: {
    color: '#FFD700',
    marginRight: '2px',
  },
  comment: {
    fontSize: '0.4rem',
    color: '#555',
    marginTop: '10px',
  },
};

export default Feedback;