import React, { useState } from 'react'
import image10 from "./imgs/ateneu.jpg"
import image11 from "./imgs/pelisor.jpg"
import image12 from "./imgs/palat.jpg"


function LandingPage() {
    const [index, setIndex] = useState(0)

    const imageClass = (currentIndex, globalIndex) => 
    (currentIndex === globalIndex ? "active" : null)

    const images = [
        {
            src: image10,
            className: imageClass(0, index),
            alt: "Ateneul Roman"
        },
        {
            src: image11,
            className: imageClass(1, index),
            alt: "Institutul Ion Mincu"
        },
        {
            src: image12,
            className: imageClass(2, index),
            alt: "Palatul Culturii din Ploiesti"
        }
    ]

    setTimeout(() => {
        setIndex((index + 1) % images.length)
    }, 2000)

    return (
        <>
            <div id='home' className='slider'>    
                {
                    images.map((img, idx) => (
                        <img key={idx} src={img.src} className={img.className} alt={img.alt} />
                    ))
                }
            </div>
        </>
    )
}
   
export default LandingPage