import React from "react";
import styles from "../ProductSelectionPage.module.scss";

interface DropdownContainerProps {
  searchInput: string;
  handleSearch: any;
  handleBlur: any;
  searchResults: any[];
  handleProductSelect: any;
  selectedProducts: any[];
}

const DropdownContainer: React.FC<DropdownContainerProps> = ({
  searchInput,
  handleSearch,
  handleBlur,
  searchResults,
  handleProductSelect,
  selectedProducts,
}) => {
  return (
    <div className={styles.dropdownContainer}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          placeholder="Search for products"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
          onBlur={handleBlur}
        />
      </div>
      {searchResults?.length > 0 && (
        <ul className={styles.searchResults}>
          {searchResults?.map((product) => (
            <li
              key={product?.id}
              onMouseDown={() => handleProductSelect(product?.id)}
              className={
                selectedProducts?.some((p) => p?.id === product?.id)
                  ? styles.selectedProduct
                  : ""
              }
            >
              <img src={product?.image} alt={product?.name} />
              {product?.name}
              {selectedProducts?.some((p) => p?.id === product?.id) && (
                <span className={styles.tickMark}>✔</span>
              )}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default DropdownContainer;
