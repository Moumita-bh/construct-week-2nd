import React from 'react';
import './App.css'; // Import your CSS file

const products = [
  {
    name: "Swisse Beauty Vegan Collagen Builder",
    description: "bottle of 30.0 tablets",
    delivery: "Delivery by 10pm, Tomorrow",
    mrp: "₹1299",
    price: "₹1000",
    discount: "23% off",
    imageUrl: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/mp9qoget2jwnf7u6tjj9.jpg",
  },
  {
    name: "What's Up Wellness Beauty Titagen Marine Collagen",
    description: "jar of 200.0 gm Powder",
    delivery: "Delivery by Thu, 10 Oct",
    mrp: "₹2249",
    price: "₹1899",
    discount: "16% off",
    imageUrl: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/199c19497db24b35805c677dec298e61.jpg",
  },
  {
    name: "The Body Temple Marine Collagen Peptides",
    description: "jar of 200.0 gm Powder",
    delivery: "delivery by Fri, 11 Oct",
    mrp: "₹1999",
    price: "₹1299",
    discount: "35% off",
    imageUrl: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/cgzh629olyrrv6mlc4zy.jpg",
  },
  {
    name: "Nature's Island Hydrolysed Marine Collagen",
    description: "jar of 250.0 gm Powder",
    delivery: "delivery by Thu, 10 Oct",
    mrp: "₹2500",
    price: "₹1249",
    discount: "35% off",
    imageUrl: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/a569ab4a9eb843e9b9890f9965b92027.jpg",
  },
  {
    name: "Hair-O-Tin Tablet",
    description: "strip of 10.0 gm Tablets",
    delivery: "delivery by Sat, 12 Oct",
    mrp: "₹248",
    price: "₹223",
    discount: "10% off",
    imageUrl: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/6f6b13b658044bd893e14ff0010809aa.jpg",
  },
  {
    name: "Inlife Japanese Collagen Peptide Powder",
    description: "jar of 200.0 gm Powder",
    delivery: "delivery by Tomorrow, 10 PM",
    mrp: "₹1999",
    price: "₹899",
    discount: "55% off",
    imageUrl: "https://onemg.gumlet.io/a_ignore,w_380,h_380,c_fit,q_auto,f_auto/5030a73827d24bdd81ceab6f5eb0f137.jpg",
  },
];

const CollagenSection = () => {
  return (
    <div className="collagen-section">
      <h2>Collagen | Supplement of the Week</h2>
      <button className="see-all">SEE ALL</button>
      <div className="collagen-grid">
        {products.map((product, index) => (
          <div className="collagen-item" key={index}>
            <img src={product.imageUrl} alt={product.name} />
            <h3>{product.name}</h3>
            <p>{product.description}</p>
            <p>{product.delivery}</p>
            <p className="mrp">MRP {product.mrp} <span>{product.discount}</span></p>
            <p className="price">{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CollagenSection;
