import React from 'react'
import "./Main.css"

function Main() {
    return (
        
           <div className="product">
            <div className="product__info">
                <p>car</p>
                <p className="product__price">
                    <small>$</small>
                    <strong>200 </strong>

                </p>
                <div className="product__rating">
                   
                </div>
            </div>
            <div className="image">
            {/* <img  src="https://images.unsplash.com/photo-1524492412937-b28074a5d7da?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8aW5kaWF8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="" /> */}
            </div>
            <button>Add to basket</button>
        </div>
        
    )
}

export default Main
