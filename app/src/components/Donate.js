import React from 'react'
import image10 from './imgs/unrmi_project.jpg'

export default function Donate() {
    return (
        <> 
            <section id='donate' className="main">
            <div className="text-inline">
                <h4>LUCRĂRI DE REABILITARE LA CETATEA DE SCAUN SUCEAVA</h4>   
<img src={image10} alt="unrmi project" className="image"></img>
                <p>Lucrările de reabilitare a Cetăţii de Scaun a Sucevei ar putea începe la sfârşitul acestui an. Anunţul a fost făcut de preşedintele Consiliului Judeţean Suceava, Gheorghe Flutur, care a precizat că Agenţia de Dezvoltare Regională a aprobat proiectul „Cetatea medievală a Sucevei - un monument de arhitectură al Europei creştine”, a cărui valoare este de aproape 14 milioane de euro, fonduri alocate prin Programul Operaţional Regional.
                </p> 
            </div>
            <button>Donate</button>
            </section>
        </>
    )
}