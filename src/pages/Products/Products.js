import React, {useState} from 'react'
import "./Products.css"
import data from "../../component/data/BurgerData"

const Products = ({productItems ,handleAddProduct}) => {
    const [count, setCount] = useState({});


    function increaseVal (id){
        setCount({...count, [id]: count[id] + 1 || 1});
    }
    
    function decreaseVal (id) {
        if(count[id] > 1){
          setCount({...count, [id]: count[id] - 1});  
        }
    }


  return (
      
    <div className="products container">
        {data.map((productItem) => (
        <div className="card" >
                <div className="product-image-div">
                    <img className="product-image" src={productItem.image} alt={productItem.name}/>
                </div>
            <div className="product-details" >
                
                <div className="product-name-price" >
                    <h3 className="product-name">{productItem.name}</h3>
                    <h4 className="product-price">&#8358;{productItem.price}</h4>
                </div>
                   
                <div><p className="product-description">{productItem.description}</p></div>

                <div className="btn-action">

                    <div className="counter">
                        <input type= "number" placeholder='1' min = "1" max = "10000" className = "valueInput" />
                    </div>

                    <button className="product-add-button">Add to Cart</button>
                    
                </div>
            </div>
        </div>
           

        ))}
    </div>
    
  )
}

export default Products