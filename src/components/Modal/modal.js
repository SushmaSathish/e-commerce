import {Fragment} from'react'
import classes from'./modal.module.css';
import ReactDOM from 'react-dom';
const ModalOverlay=(props)=>{
    return(
        <div className={classes.modal}>
            <div className={classes.content}>{props.children}</div>
        </div>  
    )
}
const Modal=(props)=>{
    return(
            <Fragment>
                {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay> ,document.getElementById('overlays'))}
            </Fragment>
    )
}
export default Modal;