import { Fragment } from "react"
import { Button } from "react-bootstrap";

const CartButton =(props)=>{
     let quantity =1;
    return (<Fragment>
 <Button  onClick={props.onButtonpass} variant ="dark" style={{border:"1px solid skyblue"}} type="click">Cart {quantity}</Button>

    </Fragment>)
}
export default CartButton