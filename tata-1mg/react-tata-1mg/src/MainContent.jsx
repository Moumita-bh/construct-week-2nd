import React from 'react';
import './App.css';

function MainContent() {
  return (
    <div className="main-content">
      {/* Banner Image */}
      <img
        src="https://onemg.gumlet.io/86241386-a061-447d-b794-2ca39fbd5d2c_1727784940.png?w=1013&h=250&format=auto"
        alt="banner"
        className="banner-img"
      />

      {/* Content Box */}
      <div className="content-box">
        <h2>Tata 1mg: India’s Leading Online Pharmacy & Healthcare Platform</h2>
      </div>

      {/* Image Box */}
      <div className="image-box">
        <img
          src="https://onemg.gumlet.io/marketing/d037f049-0426-43b5-b365-c89ccd788d2d.png"
          alt="product"
          className="product-img"
        />
      </div>

      {/* Shop by Health Concerns Section */}
      <div className="shop-by-health">
        <h2>Shop by Health Concerns</h2>
        <div className="grid-container">
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/a56b26a0-30f1-4977-96f8-7acf1b3e0e02.png?format=auto"
              alt="Health Concern 1"
            />
            <p>Diabetes</p>
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/629aaf65-515f-4069-b730-28618f78597b.png?format=auto"
              alt="Health Concern 2"
            />
            <p>Heart Care</p>
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/b251c9cf-8d88-4fb8-8c3c-7b328caa9f70.png?format=auto"
              alt="Health Concern 3"
            />
            <p>Stomach Care</p>
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/573d8a1a-edd0-46a5-a0fe-01a1c2bcc8f2.png?format=auto"
              alt="Health Concern 4"
            />
            <p>Liver Care</p>
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/a1af8b43-2836-483d-8709-99eff1cc6f70.png?format=auto"
              alt="Health Concern 5"
            />
            <p>Bone, Joint & Muscle Care</p>
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/96f9ed8a-ba62-426c-bd66-6762f40f3370.png?format=auto"
              alt="Health Concern 6"
            />
            <p>Kidney Care</p>
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/730dbe50-4bdc-4fa8-9a09-93bc5d6c6f38.png?format=auto"
              alt="Health Concern 7"
            />
            <p>Derma Care</p>
          </div>
        </div>
      </div>

      {/* Featured Brands Section */}
      <div className="featured-brands" style={{ backgroundColor: 'white', padding: '20px' }}>
        <div className="header" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <h2 style={{ color: 'black' }}>Featured Brands</h2>
          <button
            className="see-all-btn"
            style={{ backgroundColor: 'red', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px' }}
          >
            See All
          </button>
        </div>
        <div className="grid-container" style={{ display: 'grid', gridTemplateColumns: 'repeat(7, 1fr)', gap: '10px', marginTop: '10px' }}>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/diagnostics%2F2024-10%2F1728280034_Optimum+Nutrition.png?format=auto"
              alt="Brand 1"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/2024-10%2F1728372496_Cetaphil.png?format=auto"
              alt="Brand 2"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/diagnostics%2F2024-10%2F1728280012_Tynor+1.png?format=auto"
              alt="Brand 3"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/2024-10%2F1728372482_Dabur.png?format=auto"
              alt="Brand 4"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/2024-10%2F1728372476_wellbeingnutri.png?format=auto"
              alt="Brand 5"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/diagnostics%2F2024-10%2F1728279967_Aimil.png?format=auto"
              alt="Brand 6"
            />
          </div>
          <div className="grid-item">
            <img
              src="https://onemg.gumlet.io/2024-10%2F1728372460_Swisse+%281%29.png?format=auto"
              alt="Brand 7"
            />
          </div>
        </div>
      </div>
    </div> // Closing the main div here
  );
}

export default MainContent;
