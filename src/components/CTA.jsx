import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
        <p className='cta-text'>Lokking for a dev? <br className='sm:block hidden'/>
        Let's tolk.</p>
        <Link to ="/contact" className='btn' >
            Contact
        </Link>
    </section>
  )
}

export default CTA
