import React from "react";
import styles from "../ProductSelectionPage.module.scss";

const TextContainer: React.FC = () => {
  return (
    <div>
      <div className={styles.numberContainer}>1 of 3</div>
      <h2>Let's add your internal tools</h2>
      <p>
        Search to quickly add products your team uses today. You'll be able to
        add as many as you need later but for now let's add four.
      </p>
    </div>
  );
};

export default TextContainer;
