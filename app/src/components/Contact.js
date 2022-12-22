import React, { useState } from 'react'

let form = {
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: ""
}

export default function Contact() {
    const [modal, setModal] = useState(false)
    const [errorForm, setErrorForm] = useState(false)


    const toggleModal = () => {
        setModal(!modal)
    }
    
    let handleSubmit = (event) => {
        event.preventDefault()
        if (event.target[0].value &&
            event.target[1].value &&
            event.target[2].value &&
            event.target[3].value &&
            event.target[4].value
            )
        {
            form.firstName = event.target[0].value
            form.lastName = event.target[1].value
            form.email = event.target[2].value
            form.subject = event.target[3].value
            form.message = event.target[4].value
            console.log(form);
            toggleModal()
            setErrorForm(false)
        } else {
            setErrorForm(true)
        }
    }
    return (
        <>
            <section id='contact' className='main'>
                <form className='message-form' onSubmit={handleSubmit}>
                    <label>
                        Nume:
                        <br/>
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Prenume:
                        <br/>
                        <input type="text" name="email" />
                    </label>
                    <br/>
                    <label>
                        Mail:
                        <br/>
                        <input type="email" name="email" />
                    </label>
                    <br/>
                    <label>
                        Subiect:
                        <br/>
                        <input type="text" name="name" />
                    </label>
                    <br/>
                    <label>
                        Mesaj:
                        <br/>
                        <textarea type="text" name="name" />
                    </label>
                    <br/>
                    {errorForm && (
                        <p className='errorForm'>Va rugam completati toate campurile.</p>
                    )}
                    <br/>
                    <button type="submit" className="btn-modal">Submit</button>
                </form>
                {modal && (
                    <div className='modal'>
                    <div className='overlay'></div>
                    <div className='modal-content'>
                        <h1>Message sent</h1>
                        <p>Thank you</p>
                        <button className='close-modal' onClick={toggleModal}>Inchide</button>
                    </div>
                </div>
                )}
            </section>
        </>
    )
}