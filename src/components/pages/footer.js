
import classes from './footer.module.css';
import Facebook from'../../assets/Facebook.png';
import youtube from'../../assets/youtube.png';
import spotify from'../../assets/spotify.png'
const Footer=()=>{
    return(
      <div  className={classes.footer1}>
      <footer>
        <h1 className={classes.h1}>The Genrics</h1>
        <span   className={classes.img} >
        <a  href="https://www.youtube.com/"><img  
        src={youtube} 
        alt="youtube" 
        width="50px" 
        height="50px" 
  
       /></a>
        <a href="https://open.spotify.com/"> <img 
        src={spotify} 
        alt="yspotify" 
        width="50px" 
        height="50px"  /></a>
       <a href="https://www.facebook.com/" ><img 
        src={Facebook} 
        alt="Facebook" 
        width="50px" 
        height="50px"  /></a> </span>
      </footer>
    </div>
  
  );
}
 export default Footer;
