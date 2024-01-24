import React from "react";
import styles from "../../ProductSelectionPage.module.scss";

interface GridTileProps {
  selectedProduct: any;
  handleRemoveProduct: any;
}

const GridTile: React.FC<GridTileProps> = ({
  selectedProduct,
  handleRemoveProduct,
}) => {
  return (
    <div key={selectedProduct?.id} className={styles.gridBox}>
      <img
        src={selectedProduct?.image}
        alt={selectedProduct?.name}
        className={styles.productImage}
      />
      <div className={styles.productTitle}>{selectedProduct?.name}</div>
      <div
        className={styles.removeProduct}
        onClick={() => handleRemoveProduct(selectedProduct?.id)}
      >
        <span className={styles.crossSymbol}>✖</span> Remove
      </div>
    </div>
  );
};

export default GridTile;
