import React from "react";
import styles from "../ProductSelectionPage.module.scss";

interface NextButtonClickProps {
  handleNextButtonClick: any;
  selectedProducts: any[];
}

const NextButton: React.FC<NextButtonClickProps> = ({
  handleNextButtonClick,
  selectedProducts,
}) => {
  return (
    <button
      className={styles.nextButton}
      onClick={handleNextButtonClick}
      disabled={selectedProducts.length === 0}
    >
      Next
    </button>
  );
};

export default NextButton;
