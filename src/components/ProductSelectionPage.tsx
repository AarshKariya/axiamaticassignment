import React, { useState } from "react";
import styles from "./ProductSelectionPage.module.scss";

import TextContainer from "./TextContainer/TextContainer";
import DropdownContainer from "./DropdownContainer/DropdownContainer";
import NextButton from "./NextBtn/NextButton";
import GridContainer from "./GridContainer/GridContainer";
import { Product, productData } from "../helpers/productData";

const ProductSelectionPage: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const handleSearch = (input: string) => {
    setSearchInput(input);
    if (input.trim() === "") {
      setSearchResults([]);
    } else {
      const results = productData.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleBlur = () => {
    setSearchResults([]);
  };

  const handleProductSelect = (productId: number) => {
    const selectedProduct = productData.find(
      (product) => product.id === productId
    );
    if (
      selectedProduct &&
      selectedProducts.length < 4 &&
      !selectedProducts.some((product) => product.id === selectedProduct.id)
    ) {
      setSelectedProducts((prevSelected) => [...prevSelected, selectedProduct]);
      setSearchInput("");
      setSearchResults([]);
      handleBlur();
    }
  };

  const handleRemoveProduct = (productId: number) => {
    setSelectedProducts((prevSelected) =>
      prevSelected.filter((product) => product.id !== productId)
    );
  };

  const handleNextButtonClick = () => {
    console.log("Selected Products:", selectedProducts);
  };

  return (
    <div>
      <div className={styles.pageHeading}>axiamatic</div>
      <div className={styles.bodyContainer}>
        <div className={styles.productSelectionContainer}>
          <GridContainer
            selectedProducts={selectedProducts}
            handleRemoveProduct={handleRemoveProduct}
          />
          <div className={styles.infoColumn}>
            <TextContainer />
            <DropdownContainer
              searchInput={searchInput}
              handleSearch={handleSearch}
              handleBlur={handleBlur}
              searchResults={searchResults}
              handleProductSelect={handleProductSelect}
              selectedProducts={selectedProducts}
            />
            <NextButton
              handleNextButtonClick={handleNextButtonClick}
              selectedProducts={selectedProducts}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductSelectionPage;
