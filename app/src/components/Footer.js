import React from 'react'

export default function Footer() {
    return (
        <> 
            <section id='footer' className="main footer-main background">
            
            <div className="text-left text">
                <h2>CONTACT SEDIU U.N.R.M.I.</h2>
                <p> Sediul: 
                    <a className="adressLink" target="_blank" href="https://www.google.com/maps/place/Sc.C,+Ap.78,+Pia%C8%9Ba+Victoriei+4,+Ploie%C8%99ti/@44.9396402,26.0219831,17z/data=!3m1!4b1!4m5!3m4!1s0x40b2498bef8f4a21:0x675a5d1f3b0b9cca!8m2!3d44.9396364!4d26.0241718">
                        Str. Piaţa Victoriei Nr.4, Bloc CC Vest, Sc.C, Ap.78 Ploieşti, jud.Prahova,
                    </a>
                </p>
                <ul>
                    <li>Cod poştal:100008, ROMÂNIA</li>
                    <li>U.N.R.M.I.</li>
                    <li>CIF: 9415990</li>
                    <li>Cont IBAN: RO18BRDE441SV03926814410</li>
                    <li>BRD Sucursala Unirii Bucuresti Sector 4</li>
                </ul>
                <h2>
                    Filiale U.N.R.M.I.:
                </h2>
                <p>
                    FILIALA "ZAMORA" / CIF: 25882777 ; Inregistrată din data 13 August 2009 
                </p>
                    <a className="adressLink" targer="_blank" href="https://www.google.com/maps/place/Strada+Zamorei+1,+Poiana+%C8%9Aapului+105500/@45.4127476,25.5398636,17z/data=!4m5!3m4!1s0x40b315a29bd2c1c3:0x74aa32d8db251958!8m2!3d45.4126601!4d25.5419165">
                        Str.Zamorei nr. 1 Buşteni, BUŞTENI, JUD.PRAHOVA
                    </a>
            </div>
            <div className="text-right text">
            <ul>
                <li style={{fontWeight:"bold"}}>Secretariat :</li>
                <li> Tel/Fax: 0244525703</li>
                <li>E-mail: office_unrmi@yahoo.com</li>
            </ul>
             <ul>
                <li style={{fontWeight:"bold"}}>Preşedinte UNRMI :</li>
                <li>Ing. GABRIELA SIMONA CARPOV</li>
                <li>Tel. 0729 255 000 </li>
                <li>E-mail: gabriela.carpov@artprotect.ro</li>
                <li>Web: <a className="adressLink" href="www.artprotect.ro" target="_blank">www.artprotect.ro</a></li>
            </ul>
            <ul>
            <li style={{fontWeight:"bold"}}>Administrator Arhiva Digitala UNRMI</li>
            <li>Ing. MARIUS MANEA</li>
            <li>Tel. 0722 430 875</li>
            <li>E-mail: unrmi.it@gmail.com </li>
            <li>Web: <a className="adressLink" href="www.linkmarksoft.org" target="_blank">www.linkmarksoft.org</a></li>
            </ul>
        </div>
            </section>
        </>
    )
}