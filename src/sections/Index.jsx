import react from 'react';
import '../styles/section.css'
import '../styles/contact.css'
import Member from './Member.jsx'
import Kegiatan from './Kegiatan.jsx';
import CollaborationSection from './KerjaSama.jsx';
import Contact from './Contact.jsx';



function Index() {


    return (
        
        <div>
            <Kegiatan />
            <Member />
            <CollaborationSection />
            <Contact />
        </div>

    )
}

export default Index;