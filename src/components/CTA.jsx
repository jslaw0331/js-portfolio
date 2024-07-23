import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
    return (
        <section className='cta'>
            <p className='cta-text'>Got questions, opportunities, or just want to say hi?
                <br className='sm:block hidden' />
                I'd love to hear from you!</p>
            <Link to="/contact" className='btn'>
                Contact Me
            </Link>
        </section>
    )
}

export default CTA