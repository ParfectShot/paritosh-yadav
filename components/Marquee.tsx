import React from 'react';
import styles from './Marquee.module.scss';

interface MarqueeProps {
  direction: 'up' | 'down' | 'left' | 'right';
  height: string;
  children: React.ReactNode;
}

const Marquee: React.FC<MarqueeProps> = ({ direction, height, children }) => {
  return (
    <div className={styles.marquee} style={{ height }}>
      <div className={`${styles.marqueeContent} ${styles[direction]}`}>
        {children}
        {children}
      </div>
    </div>
  );
};

export default Marquee;
