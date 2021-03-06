import React from 'react';
import styles from './ReviewScores.css';

export default function SvgEmpty() {
  return (
    <div className={styles.empty}>
      <svg
        width="16px"
        height="16px"
        viewBox="0 0 510 510"
        style={{ fill: 'rgb(0, 166, 128)' }}
      >
        <g id="check-circle-outline-blank">
          <path
            d="M255,0C114.75,0,0,114.75,0,255s114.75,255,255,255s255-114.75,255-255S395.25,0,255,0z M255,459
			c-112.2,0-204-91.8-204-204S142.8,51,255,51s204,91.8,204,204S367.2,459,255,459z"
          />
        </g>
      </svg>
    </div>
  );
}
