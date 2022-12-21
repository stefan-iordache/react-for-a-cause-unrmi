import React from 'react'
import {Link} from 'react-scroll'

export default function NavBar() {
    return (
        <header id='nav-wrapper'>
            <nav id='nav'>
                <div className='nav left'>
                    <span className='gradient skew'>
                        <h1 className='logo un-skew'>
                            <Link to='home' spy={true} smooth={true} offset={0} duration={500}>Logo</Link>
                        </h1>   
                    </span>
                    <button id='menu' className='btn-nav'>
                        <span className='fas fa-bars'></span>
                    </button>
                </div>

                <div className='nav right'>
                    <Link className='nav-link active' to='home' spy={true} smooth={true} offset={0} duration={500}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Home
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='about' spy={true} smooth={true} offset={0} duration={500}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                About
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='donate' spy={true} smooth={true} offset={0} duration={500}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Learn more or donate
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='contact' spy={true} smooth={true} offset={0} duration={500}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Register
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='footer' spy={true} smooth={true} offset={0   } duration={500}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Contact Us
                            </span>    
                        </span> 
                    </Link>
                </div>
                
            </nav>
        </header>
    )
}