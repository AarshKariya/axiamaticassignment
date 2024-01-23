import React, { useState } from "react";
import styles from "./ProductSelectionPage.module.scss"; // Import the SCSS file

interface Product {
  id: number;
  name: string;
}

const ProductSelectionPage: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const productData: Product[] = [
    { id: 1, name: "Notion" },
    { id: 2, name: "Jira" },
    { id: 3, name: "MS Azure" },
    { id: 4, name: "Slack" },
    { id: 5, name: "Slow" },
    { id: 6, name: "Trello" },
    { id: 7, name: "JiraCompete" },
    { id: 8, name: "NoOpenSpeed" },
    { id: 9, name: "Noimics" },
    { id: 10, name: "NoierBooks" },
  ];

  const handleSearch = (input: string) => {
    setSearchInput(input);
    if (input.trim() === "") {
      // Reset the search results when the input is empty
      setSearchResults([]);
    } else {
      const results = productData.filter((product) =>
        product.name.toLowerCase().includes(input.toLowerCase())
      );
      setSearchResults(results);
    }
  };

  const handleProductSelect = (productId: number) => {
    const selectedProduct = productData.find(
      (product) => product.id === productId
    );
    if (selectedProduct) {
      setSelectedProducts((prevSelected) => [...prevSelected, selectedProduct]);
    }
  };

  const handleNextButtonClick = () => {
    console.log("Selected Products:", selectedProducts);
    // Add logic to save data to the backend
  };

  return (
    <div className={styles.productSelectionContainer}>
      <div className={styles.gridContainer}>
        {[1, 2, 3, 4].map((index) => (
          <div key={index} className={styles.gridBox}>
            +
          </div>
        ))}
      </div>
      <div className={styles.infoColumn}>
        <h2>Let's add your internal tools</h2>
        <p>
          Search to quickly add products your team uses today. You'll be able to
          add as many as you need later but for now let's add four.
        </p>
        <input
          type="text"
          placeholder="Search for products"
          value={searchInput}
          onChange={(e) => handleSearch(e.target.value)}
        />
        <ul className={styles.searchResults}>
          {searchResults.map((product) => (
            <li
              key={product.id}
              onClick={() => handleProductSelect(product.id)}
            >
              {product.name}
            </li>
          ))}
        </ul>
        <button className={styles.nextButton} onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductSelectionPage;
