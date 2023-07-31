import classes from'./cart.module.css'
import {Card,Button, Modal} from 'react-bootstrap';
import CloseButton from './closebutton'

const Cart=(props)=>{
    const cartElements = [

        {
        
        title: 'Colors',
        
        price: 100,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
        
        quantity: 2,
        
        },
        
        {
        
        title: 'Black and white Colors',
        
        price: 50,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
        
        quantity: 3,
        
        },
        
        {
        
        title: 'Yellow and Black Colors',
        
        price: 70,
        
        imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
        
        quantity: 1,
        
        } 
        ]
        const ItemRemoveHandler=(event)=>{
            event.target.parentNode.remove();
        }
    return(
        <Modal>
            <div>
                <CloseButton onClose={props.onclosebutton}></CloseButton>
                <Card>
                    <Card.Title style ={{textAlign:'center'}}>
                        <h1>CART</h1>
                    </Card.Title>
            <Card.Header>
            <h5
              style={{
                display: "inline-block",
                margin: "auto 220px auto 10px",
              }}
            >
              ITEM
            </h5>

            <h5
              style={{ display: "inline-block", margin: "auto 27px auto 10px" }}
            >
              PRICE
            </h5>

            <h5
              style={{ display: "inline-block", margin: "auto 10px auto 20px" }}
            >
              QUANTITY
            </h5>
            <hr></hr>
             </Card.Header>
             {cartElements.map((item)=>(
             <div>
                 <Card.Body>
                 <Card  className={classes.card}  >
                  <img src={item.imageUrl} alt="img" width="90px"></img> 
                  <Card>
                  <b>
                  <span className={classes.title}>{item.title}</span>
                  </b>
                  </Card>
                  </Card>
                  <b>
                  <span className={classes.price}>{item.price}</span>
                  <span className={classes.quantity}>{item.quantity} </span></b>
                  <Button  className={classes.removeButton}
                    onClick={ItemRemoveHandler}
                    variant="danger"
                  >
                    REMOVE
                  </Button>
                </Card.Body>
                <hr></hr>
                </div>))}
                </Card>
                <div style={{ margin: " 1rem auto auto 25rem ", textAlign: "center" }}>
          {" "}
          <span>
            <h5>TOTAL </h5>
            <span>220₹</span>
          </span>
        </div>
        <Button variant="info" style={{ margin: " 2rem auto auto 17rem " }}>
          PURCHASE
        </Button>
            </div>
        </Modal>
    )
}
export default Cart;