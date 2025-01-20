import React from 'react';

function Home() {
  return (
    <div className='home-app'>
      <header className='home-header'>
        <h1>Welcome to Retro</h1>
        <img className="logo" src="images/logo.jpg"/>
      </header>
      <main>
        <section className='home-intro'>
          <p>At Retro, we embrace the blend of timeless elegance and cutting-edge innovation. Our mission is to bring you the finest bikes, gadgets, and spare parts that seamlessly merge retro styling with modern performance.</p>
        </section>
        <section className='home-products'>
          <h2>Our Products</h2>
          <div className='home-product-list'>
            <div className='home-product-item'>
              <h3>Bikes</h3>
              <p>Discover innovative bikes for every journey.</p>
            </div>
            <div className='home-product-item'>
              <h3>Engines</h3>
              <p>Experience biking redefined with performance and style.</p>
            </div>
            <div className='home-product-item'>
              <h3>Spare Parts</h3>
              <p>Find the perfect parts to keep your ride in top shape.</p>
            </div>
          </div>
        </section>
      </main>
      <footer className='footer-home'>
        <h2>Published by Retro Industries</h2>
        <p>Stay Connected: Join our community of passionate bikers for the latest gear, exclusive offers, and expert tips. Ride smart, ride safe, and always be prepared for your next adventure. Follow us on social media for updates and inspirations!</p>
      </footer>
    </div>
  );
}

export default Home;
