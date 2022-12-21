import React, { useState } from 'react'

export default function Contact() {
    const [modal, setModal] = useState(false)

    const toggleModal = () => {
        setModal(!modal)
    }

    let form = {
        firstName: "",
        lastName: "",
        email: "",
        subject: "",
        message: ""
    }
    let handleSubmit = (event) => {
        event.preventDefault()
        form.firstName = event.target[0].value
        form.lastName = event.target[1].value
        form.email = event.target[2].value
        form.subject = event.target[3].value
        form.message = event.target[4].value
        console.log(form);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label>
                    First name:
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Last name:
                    <input type="text" name="email" />
                </label>
                <br/>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <br/>
                <label>
                    Subject:
                    <input type="text" name="name" />
                </label>
                <br/>
                <label>
                    Message:
                    <textarea type="text" name="name" />
                </label>
                <br/>
                <button type="submit" onClick={toggleModal} className="btn-modal">Submit</button>
            </form>
            {modal && (
                <div className='modal'>
                    <div onClick={toggleModal} className=''></div>
                <div className='overlay'></div>
                <h2>Hello World!</h2>
                <p>abcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabcabc</p>
                <button className='close-modal' onClick={toggleModal}>Inchide</button>
            </div>
            )}
            
        </>
    )
}