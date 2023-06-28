import React from 'react'
import image10 from './imgs/unrmi_awards.jpg'

export default function AboutUs() {
    return (
        <> 
            <section id='about' className="main">
            <div className="text-left">
                <h2 >Despre noi</h2>   
                <p>Prin activitatea membrilor săi, Uniunea Naţională a Restauratorilor de Monumente Istorice are ca scop principal contribuţia la asigurarea continuităţii şcolii româneşti de restaurare.
Uniunea Naţională a Restauratorilor de Monumente Istorice, înfinţată în anul 1991, este o organizaţie profesională a specialiştilor cu experienţă în domeniu: cercetători-arheologi, istorici de artă, chimişti, biologi, geofizicieni, proiectanţi-arhitecţi, ingineri cu diverse specializări, pictori restauratori şi antreprize specializate în lucrări de conservare şi restaurare. Uniunea cuprinde şi membrii ai altor organisme profesionale, naţionale şi internaţionale.
</p> 
            </div>
            <div className="text-right">
                <img src={image10} alt="unrmi awards" className="image" id='awards-img'></img>
            </div>
            </section>
        </>
    )
}