import React, { useState } from 'react'
import image10 from './imgs/unrmi_project.jpg'

export default function Donate() {
    const [donate, setDonate] = useState(false)
    const [donateError, setDonateError] = useState(false)

    function donateEvent() {
        setDonate(!donate)
    }

    let form = {
        cardNumber: "",
        name: "",
        expirationDate: "",
        cvv: "",
        amount: ""
    }

    function handleSubmit(event) {
        event.preventDefault()
        if (event.target[0].value &&
            event.target[1].value &&
            event.target[2].value &&
            event.target[3].value &&
            event.target[4].value
            ) {
                setDonateError(false)
                form.cardNumber = event.target[0].value
                form.name = event.target[1].value
                form.expirationDate = event.target[2].value
                form.cvv = event.target[3].value
                form.amount = event.target[3].value
                console.log(form);
            } else {setDonateError(true)}
    }

    return (
        <> 
            <section id='donate' className="main">
            <div className="text-inline">
                <h4>LUCRĂRI DE REABILITARE LA CETATEA DE SCAUN SUCEAVA</h4>   
                <img src={image10} alt="unrmi project" className="image"></img>
                <br/>
                <br/>
                <p>Lucrările de reabilitare a Cetăţii de Scaun a Sucevei ar putea începe la sfârşitul acestui an. Anunţul a fost făcut de preşedintele Consiliului Judeţean Suceava, Gheorghe Flutur, care a precizat că Agenţia de Dezvoltare Regională a aprobat proiectul „Cetatea medievală a Sucevei - un monument de arhitectură al Europei creştine”, a cărui valoare este de aproape 14 milioane de euro, fonduri alocate prin Programul Operaţional Regional.
                </p> 
            </div>
            <button className='donation-modal' onClick={donateEvent}>Donate</button>
            {donate && (
                    <div className='modal'>
                        <div className='overlay'></div>
                        <div className='modal-content'>
                        <form onSubmit={handleSubmit}>
                            <label className='donation-paragraph'>
                                Numar card:
                                <br/>
                                <input type="text" name="name" />
                            </label>
                            <br/>
                            <label className='donation-paragraph'>
                                Nume:
                                <br/>
                                <input type="text" name="text" />
                            </label>
                            <br/>
                            <label className='donation-paragraph'>
                                Data expirare:
                                <br/>
                                <input type="text" name="text" />
                            </label>
                            <br/>
                            <label className='donation-paragraph'>
                                CVV:
                                <br/>
                                <input type="text" name="text" />
                                </label>
                                <br/>
                            <label className='donation-paragraph'>
                                Amount:
                                <br/>
                                <input type="text" name="text" />
                            <button className='send-donation'>Doneaza</button>
                            <br/>
                                </label>
                            <button className='close-modal' onClick={donateEvent}>Inchide</button>
                            {donateError && (
                                <>
                                    <br/>
                                    <br/>
                                    <p>Va rugam completati toate campurile.</p>
                                </>
                            )}
                        </form>
                    </div>
                </div>
                )}
            </section>
        </>
    )
}