import classes from  './headerforhome.module.css';
import Musicbutton from'../../assets/MusicButton.jpeg'

const HeaderForHome = () => {

  return (

    <div>

    <div className={classes.headerabout}>

       <h1>The Generics</h1> 

       <h5>Get our Latest Album</h5>

       <div > <img src ={Musicbutton}  className={classes.log} alt="img" width="80px" height = "80px"></img>  </div>

    </div>

  <div><div className={classes.abou}>

     <h6 >TOURS</h6>

   </div>
   </div>
   </div>




  );

};




export default HeaderForHome;