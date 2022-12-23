import React,{useRef} from 'react'
import {Link} from 'react-scroll'

export default function NavBar() {
    let clicked=true;
    const navRef=useRef();  
    const showNavBar=()=>{
        clicked?navRef.current.style.height="auto":navRef.current.style.height="4em";
        clicked=!clicked;
    }
    return (
        <header id='nav-wrapper'>
            <nav ref={navRef} id='nav'>
                <div className='nav left'>
                    <span className='gradient skew'>
                        <h1 className='title un-skew'>
                            Uniunea Naţională a Restauratorilor de Monumente Istorice
                        </h1>   
                        <h1 className='title-short un-skew'>
                            U.N.R.M.I.
                        </h1>
                    </span>
                    <button id='menu' className='btn-nav un-skew' onClick={showNavBar}>
                        <span className='fas fa-bars'></span>
                    </button>
                </div>

                <div className='nav right'>
                    <Link className='nav-link' to='home' spy={true} smooth={true} offset={0} duration={100}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Acasă
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='about' spy={true} smooth={true} offset={0} duration={100}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Despre noi
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='donate' spy={true} smooth={true} offset={0} duration={100}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Donează
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='contact' spy={true} smooth={true} offset={0} duration={100}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Înscrie-te
                            </span>    
                        </span> 
                    </Link>
                    <Link className='nav-link' to='footer' spy={true} smooth={true} offset={0} duration={100}>
                        <span className='nav-link-span'>
                            <span className='u-nav'>
                                Contact
                            </span>    
                        </span> 
                    </Link>
                </div>
                
            </nav>
        </header>
    )
}