import React,{useContext} from "react";
import { Button,Card } from "react-bootstrap";
import classes from'./images.module.css';
import CartContext from "../contextt/context";
const Items=(props)=>{
  const cartctx= useContext(CartContext);
    return(
    <div>
        <h1 className={classes.h1}>MUSIC</h1>
        {props.Item.map((items)=>(
            <div className={classes.item}>
                <Card style={{width: "18rem", height: "15rem"}}>
                <Card.Title style={{ color: "black", textAlign: "center", margin: "20px" }}>
                {items.title}
                </Card.Title>
                 <Card.Img src={items.imageUrl} alt="coloring" />
                <Card.Body>
                ₹{items.price}
              <span>
                <Button
                  variant="info"
                  style={{ color: "white", textDecorationStyle: "bold" }}
                  as="input"
                  type="submit"
                  value="ADD TO CART"
                  size="sm"
                  onClick={() => cartctx.addItem({...items,amount:1,id:Math.random().toString(36)})}
                />
              </span>
                </Card.Body>
                </Card>
                </div>
        ))}
        {/*props.Item.map((items) => (
        <div className={classes.item}>
          <Card style={{ width: "18rem", height: "15rem" }}>
            <Card.Title
              style={{ color: "black", textAlign: "center", margin: "20px" }}
            >
              {items.title}
            </Card.Title>

            <Card.Img src={items.imageUrl} alt="colorimg" />

            <Card.Body>
            ₹{items.price}
              <span>
                <Button
                  variant="primary"
                  as="input"
                  type="submit"
                  value="ADD TO CART"
                  size="sm"
                />
              </span>
            </Card.Body>

          </Card>
        </div>
      ))*/}
        <div style={{ color: "skyblue", textAlign: "center" }}>
        <Button
          variant="secondary"
          style={{ color: "skyblue", textAlign: "center" }}
        >
          See the cart
        </Button>
      </div>
    </div>
    )
}
export default Items;