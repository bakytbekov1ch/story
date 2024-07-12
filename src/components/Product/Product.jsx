import React from "react";

import "./Product.scss";
import { Link } from "react-router-dom";

function Product() {
  return (
    <div className="product">
      <div className="container">
        <div className="produnct__content">
          <img
            src="https://assetsio.reedpopcdn.com/Avatar-the-last-airbender-aang.jpg?width=1600&height=900&fit=crop&quality=100&format=png&enable=upscale&auto=webp"
            alt=""
          />
          <div className="product__block">
            <h3>03.03.2003</h3>
            <h1>Lorem ipsum dolor sit amet.</h1>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Assumenda maxime ratione praesentium eveniet voluptates voluptatum
              perspiciatis quia id debitis ipsa! Veritatis voluptas quasi in
              dolore optio quo, consequuntur, atque molestias laudantium, non
              doloribus maiores. Numquam consequatur molestiae, vel ipsa, labore
              consectetur possimus, rem hic natus alias quidem. Atque,
              reprehenderit nobis!
            </p>
            <Link to="/">
              <button>Назат</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
