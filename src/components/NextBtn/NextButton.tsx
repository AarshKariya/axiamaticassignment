import React from "react";
import styles from "../ProductSelectionPage.module.scss";
import { Product } from "../../helpers/productData";

interface NextButtonClickProps {
  handleNextButtonClick: () => void;
  selectedProducts: Product[];
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
