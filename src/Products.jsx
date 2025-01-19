import React, { useState } from 'react';
import './Products.css'
function Products() {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => { 
    setSearchTerm(e.target.value.toLowerCase());
  };

  const products = [
    { id: 1, name: "Pulser", price: 170, imgSrc: "./src/assets/Bulser1.jpg" },
    { id: 2, name: "Harley Davidson", price: 300, imgSrc: "./src/assets/Harley-Davision.jpg" },
    { id: 3, name: "Duke", price: 150, imgSrc: "./src/assets/duke.jpg" },
    { id: 4, name: "Rx 100", price: 200, imgSrc: "./src/assets/rx100.jpg" },
    { id: 5, name: "Pulser Exhauster", price: 37, imgSrc: "./src/assets/pe pulser.jpg" },
    { id: 6, name: "Duke Exhauster", price: 45, imgSrc: "./src/assets/pe duke.jpg" },
    { id: 7, name: "Harley-Davidson Exhauster", price: 57, imgSrc: "./src/assets/pe harley.jpg" },
    { id: 8, name: "Rx 100 Exhauster", price: 50, imgSrc: "./src/assets/pe rx.jpg" },
    { id: 9, name: "Pulser Mirror", price: 13, imgSrc: "./src/assets/pulser-m.jpg" },
    { id: 10, name: "Duke Mirror", price: 11, imgSrc: "./src/assets/duke mirror.jpg" },
    { id: 11, name: "Harley-Davidson Mirror", price: 13, imgSrc: "./src/assets/harley mirror.jpg" },
    { id: 12, name: "Rx 100 Mirror", price: 10, imgSrc: "./src/assets/rx 100 mirror.jpg" },
    { id: 13, name: "Black Jacket", price: 27, imgSrc: "./src/assets/bj 1.jpg" },
    { id: 14, name: "Light Black Jacket", price: 24, imgSrc: "./src/assets/bj 2.jpg" },
    { id: 15, name: "Gray-Black Jacket", price: 28, imgSrc: "./src/assets/bj 3.jpg" },
    { id: 16, name: "Gray Jacket", price: 21, imgSrc: "./src/assets/bj 4.jpg" },
    { id: 17, name: "Pulser Tyre", price: 47, imgSrc: "./src/assets/pulser tyre.jpg" },
    { id: 18, name: "Harley Davidson Tyre", price: 37, imgSrc: "./src/assets/harley tyre.jpg" },
    { id: 19, name: "Duke Tyre", price: 35, imgSrc: "./src/assets/duke tyre.jpg" },
    { id: 20, name: "Rx 100 Tyre", price: 30, imgSrc: "./src/assets/rx 100 tyre.jpg" },
    { id: 21, name: "Phone Holder", price: 20, imgSrc: "./src/assets/phone holder1.jpg" },
    { id: 22, name: "Bike Holder", price: 24, imgSrc: "./src/assets/bike holder.jpg" },
    { id: 23, name: "Phone Holder", price: 27, imgSrc: "./src/assets/phone holder3.jpg" },
    { id: 24, name: "Bike Holder", price: 27, imgSrc: "./src/assets/phone holder 4.jpg" },
    { id: 25, name: "Full-Black Gloves", price: 4, imgSrc: "./src/assets/gloves 1.jpg" },
    { id: 26, name: "Black/Gray Gloves", price: 3, imgSrc: "./src/assets/gloves 2.jpg" },
    { id: 27, name: "Black/Red Gloves", price: 4, imgSrc: "./src/assets/gloves 3.jpg" },
    { id: 28, name: "Black Gloves", price: 2, imgSrc: "./src/assets/gloves 4.jpg" },
  ];

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchTerm)
  );

  return (
    <div className='Product'>
      <input 
        placeholder='Search' 
        style={{width:"100%", height:"35px",borderWidth:"2px", borderRadius:"10px"}}
        value={searchTerm}
        onChange={handleSearchChange}
      />
      <div className='products'>
        {filteredProducts.map(product => (
          <div key={product.id} className='product-item'>
            <div className='image-container'>
              <img id='image' src={product.imgSrc} alt={product.name}/> 
            </div>
            <h2>{product.name}</h2>
            <h3>Price: ${product.price}</h3>
          </div>
        ))}
      </div>
      <div className="footer">
        <h1>Published by Retro Industries</h1>
        <p>
          Stay Connected: Join our community of passionate bikers for the latest gear, exclusive offers, and expert tips.
          Ride smart, ride safe, and always be prepared for your next adventure.
          Follow us on social media for updates and inspirations!
        </p>
      </div>
    </div>
  );
}

export default Products;
