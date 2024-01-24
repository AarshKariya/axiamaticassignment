import React, { useState } from "react";
import styles from "./ProductSelectionPage.module.scss";

import NotionImg from "../images/notionImg.jpg";
import AzureImg from "../images/azureImage.png";
import JiraImg from "../images/jiraImage.png";
import SlackImg from "../images/slackImage.jpg";
import SlabImg from "../images/slabImage.png";
import TrelloImg from "../images/trelloImage.png";
import UpbaseImg from "../images/upbaseImage.png";
import ChantyImg from "../images/chantyImage.png";
import FleepImg from "../images/fleepImage.png";
import SearchIcon from "../images/searchIcon.jpg";

interface Product {
  id: number;
  name: string;
  image: string;
}

const ProductSelectionPage: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<Product[]>([]);
  const [searchInput, setSearchInput] = useState<string>("");
  const [searchResults, setSearchResults] = useState<Product[]>([]);

  const productData: Product[] = [
    { id: 1, image: NotionImg, name: "Notion" },
    { id: 2, image: JiraImg, name: "Jira" },
    { id: 3, image: AzureImg, name: "MS Azure" },
    { id: 4, image: SlackImg, name: "Slack" },
    { id: 5, image: SlabImg, name: "Slab" },
    { id: 6, image: TrelloImg, name: "Trello" },
    { id: 7, image: UpbaseImg, name: "Upbase" },
    { id: 8, image: ChantyImg, name: "Chanty" },
    { id: 9, image: FleepImg, name: "Fleep" },
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
        <div className={styles.dropdownContainer}>
          <div className={styles.searchInputContainer}>
            <input
              type="text"
              placeholder="Search for products"
              value={searchInput}
              onChange={(e) => handleSearch(e.target.value)}
            />
          </div>
          {searchResults.length > 0 && (
            <ul className={styles.searchResults}>
              {searchResults.map((product) => (
                <li
                  key={product.id}
                  onClick={() => handleProductSelect(product.id)}
                >
                  <img src={product.image} alt={product.name} />
                  {product.name}
                </li>
              ))}
            </ul>
          )}
        </div>
        <button className={styles.nextButton} onClick={handleNextButtonClick}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ProductSelectionPage;
