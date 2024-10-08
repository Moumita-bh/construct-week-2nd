import React from 'react';
import { FaMapMarkerAlt, FaSearch, FaShoppingCart, FaChevronDown, FaBolt } from "react-icons/fa";
import { AiOutlineClose, AiOutlineArrowUp } from "react-icons/ai";
import './App.css';

function Navbar() {
  return (
    <>
      {/* Top most bar */}
      <div className="top-offer-bar">
        <p className="offer-text">
          Limited Period Offer: Get up to 10% off + extra 15% off on medicines & more offers.
          <span className="explore-text"> Explore</span>
        </p>
        <div className="offer-icons">
          <AiOutlineArrowUp className="red-icon" />
          <AiOutlineClose className="close-icon" />
        </div>
      </div>

      {/* Second bar with logo and menu */}
      <div className="second-navbar">
        <img src="https://www.1mg.com/images/tata_1mg_logo.svg" alt="logo" className="logo" />
        <div className="middle-menu">
          <span>MEDICINE</span>
          <span>LAB TESTS <button className="small-red-button">SAFE</button></span>
          <span>CONSULT DOCTORS</span>
          <span>CANCER CARE</span>
          <span>PARTNERSHIPS <button className="small-red-button">NEW</button></span>
          <span>CARE PLAN <button className="small-red-button">SAVE MORE</button></span>
        </div>
        <div className="right-menu">
          <span>Login | Signup</span>
          <span>Offers</span>
          <FaShoppingCart className="cart-icon" />
          <span>Need Help?</span>
        </div>
      </div>

      {/* Third bar with search and location */}
      <div className="third-navbar">
        <div className="location-input">
          <FaMapMarkerAlt /> {/* Make sure this works in your version */}
          <input type="text" placeholder="Enter Your City" />
        </div>
        <div className="search-input">
          <input type="text" placeholder="Search for Medicine and Health Products" />
          <FaSearch className="search-icon" />
        </div>
        <div className="quick-buy-section">
          <FaBolt className="quick-buy-icon" />
          <span>QUICK BUY! Get 15% off on medicines*</span>
          <button className="quick-order-button">Quick Order</button>
        </div>
      </div>

      {/* Fourth bar with categories */}
      <div className="category-bar">
        <span className="category-item" data-dropdown="health-resource">
          Health Resource Center <FaChevronDown />
          <div className="dropdown">
            <div>All Diabetes</div>
            <div>All Medicines</div>
            <div>Medicines by Therapeutic Class</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="vitamins">
          Vitamin & Nutrition <FaChevronDown />
          <div className="dropdown">
            <div>Multivitamins</div>
            <div>Kids</div>
            <div>Women</div>
            <div>Sports</div>
            <div>Vegetarian</div>
            <div>Omega & Fish Oil</div>
            <div>Fish Oil</div>
            <div>Cod Liver Oil</div>
            <div>Flax Seed Oil</div>
            <div>Calcium</div>
            <div>Minerals</div>
            <div>Iron</div>
            <div>Vitamin B</div>
            <div>Vitamin D</div>
            <div>Vitamin C</div>
            <div>Vitamin A</div>
            <div>Global Supplements</div>
            <div>Now Foods</div>
            <div>Solgar</div>
            <div>Nordic Naturals</div>
            <div>Hair & Skin Supplements</div>
            <div>Specialty Supplements</div>
            <div>Antioxidants</div>
            <div>Glucosamine</div>
            <div>Vitamin K</div>
            <div>Gummies Vitamins</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="nutritional-drinks">
          Nutritional Drinks <FaChevronDown />
          <div className="dropdown">
            <div>Green Tea & Herbal Tea</div>
            <div>Adult Daily Nutrition</div>
            <div>Kids Nutrition (2-15 Yrs)</div>
            <div>Women Nutrition</div>
            <div>Apple Cider Vinegar</div>
            <div>Diabetes Nutrition</div>
            <div>Specialized Nutrition</div>
            <div>Green Coffee</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="fitness-supplements">
          Fitness Supplements <FaChevronDown />
          <div className="dropdown">
            <div>Whey Protein</div>
            <div>Fat Burners</div>
            <div>Protein Supplements</div>
            <div>Workout Essentials</div>
            <div>Mass Gainers</div>
            <div>Amino Acids</div>
            <div>Arginine</div>
            <div>BCAA</div>
            <div>Glutathione</div>
            <div>Glutamine</div>
            <div>Creatine</div>
            <div>Carnitine</div>
            <div>Sports</div>
            <div>Plant Protein</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="stomach-care">
          Stomach Care <FaChevronDown />
          <div className="dropdown">
            <div>Constipation</div>
            <div>Acidity</div>
            <div>Pre and Probiotics</div>
            <div>Indigestion</div>
            <div>Diarrhoea</div>
            <div>Bloating</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="feminine-care">
          Feminine Care <FaChevronDown />
          <div className="dropdown">
            <div>Sanitary Pads</div>
            <div>Breast Pumps</div>
            <div>Hair Removal</div>
            <div>Intimate Wash & Wipes</div>
            <div>Toilet Sanitaries</div>
            <div>Menstrual Cup & Tampons</div>
            <div>Tampons</div>
            <div>Menstrual Cups</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="healthy-snacks">
          Healthy Snacks <FaChevronDown />
          <div className="dropdown">
            <div>Granola & Protein Bars</div>
            <div>Peanut Butter</div>
            <div>Honey</div>
            <div>Dry Fruits & Berries</div>
            <div>Cookies</div>
            <div>Oats</div>
            <div>Muesli & Cereals</div>
            <div>Edible Seeds & Nuts</div>
            <div>Superfoods</div>
            <div>Quinoa</div>
            <div>Other Snacks</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="diabetes">
          Diabetes <FaChevronDown />
          <div className="dropdown">
            <div>Blood Glucose Monitors</div>
            <div>Test Strips & Lancets</div>
            <div>Sugar Substitutes</div>
            <div>Diabetic Footwear</div>
            <div>Juices & Vinegars</div>
          </div>
        </span>

        <span className="category-item" data-dropdown="immunity-boosters">
          Immunity Boosters <FaChevronDown />
          <div className="dropdown">
            <div>Chyawanparash</div>
            <div>Antioxidant Supplements</div>
            <div>Ayurvedic Supplements</div>
            <div>Herbal Tea</div>
          </div>
        </span>
      </div>
    </>
  );
}

export default Navbar;

