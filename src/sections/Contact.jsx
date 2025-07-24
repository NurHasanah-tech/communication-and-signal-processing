import react from 'react';
import '../styles/section.css'
import '../styles/contact.css'
import antenaDanPropagasi from '../data/CommunicationAndSignalProcessing.json'



function Contact() {


    return (
        
        <div>

            <section id="contact" className="contact-section">
                <div className="contact-container">
                    <div className="text">
                        <h2>{antenaDanPropagasi.contact.title}</h2>
                        <p>Alamat : {antenaDanPropagasi.contact.address}</p>
                        <p>Telepon : {antenaDanPropagasi.contact.phone}</p>
                        <p>Kode Pos : {antenaDanPropagasi.contact.posCode}</p>
                        <p>Email : {antenaDanPropagasi.contact.email}</p>
                    </div>
                </div>
            </section>

        </div>

    )
}

export default Contact;