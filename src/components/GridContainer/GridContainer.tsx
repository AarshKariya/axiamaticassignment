import React from "react";
import styles from "../ProductSelectionPage.module.scss";
import GridTile from "./GridTile/GridTile";

interface GridContainerProps {
  selectedProducts: any[];
  handleRemoveProduct: any;
}

const GridContainer: React.FC<GridContainerProps> = ({
  selectedProducts,
  handleRemoveProduct,
}) => {
  return (
    <div className={styles.gridContainer}>
      {selectedProducts?.map((selectedProduct) => (
        <GridTile
          selectedProduct={selectedProduct}
          handleRemoveProduct={handleRemoveProduct}
        />
      ))}
      {[...Array(Math.max(0, 4 - selectedProducts.length))].map((_, index) => (
        <div key={index} className={styles.gridBox}>
          <div className={styles.plusSign}>+</div>
        </div>
      ))}
      <div className={styles.productCount}>
        {selectedProducts?.length} Product(s) added.
      </div>
    </div>
  );
};

export default GridContainer;
