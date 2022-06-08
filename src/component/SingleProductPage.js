import React from 'react';
import classes from './SingleProductPage.module.css';
import yumyum from './assets/yumyum.png';
import friesCheese from './assets/friesCheesePic.jpeg';

const SingleProductPage =()=>{

    return(

        <div className={classes.parentContainer}>
            <header>
                <h1 className={classes.productTitle}>Fries Cheese</h1> 
                <img src={yumyum} alt="" srcset="" className={classes.cursiveTextImg}/> 
            </header>
            <div className={classes.contentSection}> 
                <div className={classes.productPicture}>
                    <img src={friesCheese} alt="" srcset=""/>
                </div>
                <div className={classes.productDetails}>
                    <h3 className={classes.productArticleHeading}> Fries Cheese</h3>
                    <p className={classes.priceText}> $50.00 USD</p>
                    <hr className={classes.productDetailsLine}/>
                    <article className={classes.productFullDetails} >Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim labore quas adipisci. Labore alias, repellendus vel saepe distinctio dignissimos perferendis, obcaecati officia fugiat voluptas, sint fugit pariatur! Repellat, tenetur hic ipsam, doloribus veritatis dolore dolores culpa et libero at sed odit quia, suscipit dicta. Non cum officia magnam possimus incidunt?
                    </article>
                    <div>
                        <input type= "number" name= "Quantity" id= "quantity" className={classes.quantityInput} min="0"/>
                        <input type= "button" value= "Add To Cart" className={classes.addToCartButton}/>
                    </div>
                    <hr className={classes.productDetailsLine}/>
                </div>
            </div>
        </div>
    )
}
export default SingleProductPage;