import {Card} from "react-bootstrap";
import classes from './footer.module.css';
import Facebook from'../../assets/Facebook.png';
import youtube from'../../assets/youtube.png';
import spotify from'../../assets/spotify.png'
const Footer=()=>{
    return(
    <Card>
        <Card.Body className={classes.footer1}>
         <footer>
         <h1 className={classes['footer1 h1']}>The Genrics</h1>
          <span>
          <a  href="https://www.youtube.com/">
            <img 
          src={youtube} 
          alt="youtube" 
          width="25" 
          height="25" 

         /></a>
          <a href="https://open.spotify.com/"> 
          <img 
          src={spotify} 
          alt="spotify" 
          width="25" 
          height="25" /></a>
         <a href="https://www.facebook.com/" >
         <img 
          src={Facebook} 
          alt="Facebook" 
          width="25" 
          height="25" /></a>
           </span>
         </footer>
        </Card.Body>
    </Card>
    )
}
 export default Footer;
