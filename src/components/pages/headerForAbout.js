import React from 'react'

import classes from './headerForAbout.module.css'

import Band from'../../assets/band members.jpg'

import Footer from './footer';

import Navigationbar from './Navbar'

function HeaderForAbout() {

  return (

    <div className={classes.header}>

        <Navigationbar/>

    <div className={classes.headerforabout}>

     <h1>The Generics</h1> 

    </div>

    <div  >

        <h5 className={classes.about}>ABOUT</h5>

       <div  className={classes.p}>

        <img src={Band} alt='singimg' width="200px" height="200px" className={classes.img}></img>

        <p > 

        Lorem ipsum carrots enhanced rebates. Excellent sayings of a man of sorrows, hates no prosecutors will unfold in the enduring of which were born in it? Often leads smallest mistake some pain main responsibilities are to stand for the right builder of pleasure, accepted explain up to now. , The things we are accusing of these in the explication of the truth receives from the flattery of her will never be the trouble and they are refused to the pleasures and the pleasures of the pain, explain the treatment of excepturi of the blessed sufferings. I never said will unfold in him receives at another time he may please the one that those works, we are less than they, this refused to the pleasures of deleniti? Those are! Will unfold in times of pleasure, this pain will be a right enjoyed by corrupt, are accusing him of all pleasures, and seek his own, or, to the needs of the agony of the choice. We hate the fellow.

Lorem ipsum dolor, sit amet consectetur rebates. The distinction, that arise from or to. The greater, therefore, an obstacle to the duties of the debts receives the very great importance to us that these are consequent to that question is answered, which was selected for the fault, it is often one of us, however, have any! Moreover, this is often not at once take the hardships of the life of harsh condemn, we are accusing him? Him whom something large cisterns.</p>

</div> 

<blockquote cite="http://www.worldwildlife.org/who/index.html">

For 60 years, WWF has worked to help people and nature thrive. As the world's leading conservation organization, WWF works in nearly 100 countries. At every level, we collaborate with people around the world to develop and deliver innovative solutions that protect communities, wildlife, and the places in which they live.

</blockquote>

        </div>

        <div>

            <Footer/>

        </div>

    </div>

  )

}




export default HeaderForAbout;