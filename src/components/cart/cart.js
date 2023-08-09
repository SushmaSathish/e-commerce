import classes from'./cart.module.css'
import {Card,Button} from 'react-bootstrap';
import Modal from '../Modal/modal';
import CartHeader from './cartheader';
import CartContext from '../contextt/context';
import { useContext,useState,useEffect } from 'react';

const Cart=(props)=>{
    const cartctx= useContext(CartContext);
    const[price,setPrice]= useState(0);
  const priceHandler = () => {
    let ans = 0;
    cartctx.items.map((item) => (ans = ans + item.amount * item.price));
    setPrice(ans);
  };
  useEffect(() => {
    priceHandler();
  });
  const ItemRemoveHandler = (id) => {
    const arr = cartctx.items.filter((item) => item.title !==id);
    cartctx.removeItem(arr);
  };
  const IncreaseAndDecrease = cartctx.incAndDecFun;
    return(
        <Modal>
            <div>
                <Card>
                    <Card.Title style ={{textAlign:'center'}}>
                        <h1>CART</h1>
                    </Card.Title>
            <CartHeader> </CartHeader>
             {cartctx.items.map((item)=>(
                <div key={item.title}>
             
             <div style={{ display: "inline-block" }}>
                 <Card  className={classes.card}  >
                  <img src={item.imageUrl} alt="img" width="90px"></img> 
                  
                  <b>
                  <span className={classes.title}>{item.title}</span>
                  </b>
                  
                  </Card>
                  <b>
                  <span className={classes.price}>Rs.{item.price}</span>
                  <span className={classes.quantity}>{item.amount} </span>
               
                  <Button  className={classes.button}
                    onClick={() => IncreaseAndDecrease(item, -1)}
                    
                  >
                    -
                  </Button>
                  <Button  className={classes.button}
                    onClick={() => IncreaseAndDecrease(item, +1)}
                    
                  >
                    +
                  </Button>
                  </b>
                  <Button
                  className={classes.removeButton}
                  onClick={() => ItemRemoveHandler(item.title)}
                  variant="danger"
                >
                  REMOVE
                </Button>
                </div>
                <hr></hr>
                </div>
                ))}
                </Card>
                <div style={{ margin: " 1rem auto auto 25rem ", textAlign: "center" }}>
          {" "}
          <span>
            <h5>TOTAL </h5>
            <span>Rs.{price}</span>
          </span>
        </div>
       
        <Button variant="info" style={{ margin: " 2rem auto auto 17rem " }}>
        PURCHASE
        </Button>
        <Button variant="danger"
        style={{ margin: " 2rem auto auto 5rem " }}
          as="input"
          size="sm"
          type="submit"
          value="X"onClick={props.onCloseButton}></Button>
            </div>
        </Modal>
    )
}
export default Cart;