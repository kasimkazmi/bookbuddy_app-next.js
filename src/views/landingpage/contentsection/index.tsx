import React from 'react';
import styles from './ContentSection.module.css';

const ContentSection: React.FC = () => {
    return (
        <div className={styles.contentSection}>
            <h1>Welcome to BookBuddy</h1>
            <p>Your one-stop solution for managing and discovering books.</p>
            <button className={styles.exploreButton}>Explore Now</button>
        </div>
    );
};

export default ContentSection;