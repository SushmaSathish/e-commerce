import { Fragment } from "react";
import { Button } from "react-bootstrap";
const CloseButton=(props)=>{
    return( 
        <Fragment>
        <div style={{margin:"1px 1 px 1 rem 34 rem"}}>
            {" "}
            <Button onClick={props.onCloseButton}
            variant="danger" as= 'input'
            type="submit" value='X' size="sm"></Button>
        </div>
        </Fragment>
    )
}
export default CloseButton;