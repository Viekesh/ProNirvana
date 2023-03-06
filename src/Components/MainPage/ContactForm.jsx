import React from 'react'

const ContactForm = () => {
    return (
        <div className='music_contact_form'>
            <input
                type="text"
                placeholder='Enter Your Full Name'
                className='music_form'
            />

            <input
                type="email"
                placeholder='Enter Your Email'
                className='music_form'
            />

            <input
                type="number"
                placeholder='Enter Your Mobile No.'
                className='music_form'
            />

            <textarea
                cols="24"
                rows="6"
                placeholder='Asked Any Question If You Have And Clear Your Doubts...'
                className='music_form'
            ></textarea>

            <button
            className='music_form form_submit_button'
            >
                SUBMIT
            </button>
        </div>
    )
}

export default ContactForm;


