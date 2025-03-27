import React from 'react'

function Card() {
  return (
   <div className="cart-page-container">
    <div className="cart-container">
      <h2>Your Cart</h2>
      <div className="card-item">
        <img src="imge path" alt="image title"/>
        <div className="card-item-details">
          <h3>Image Title</h3>
          <p>Price :$200</p>
          <div>
            <input type="number" min="1"/>
            <button>Update</button>
            <button>Remove</button>
          </div>
        </div>
      </div>

      <div className="card-total">
        <p>Total : $200</p>
      </div>
      <button className="back-button">Back to Shopping</button>
    </div>
   </div>
  )
}

export default Card