import React from 'react';
import Banner from '../Banner/Banner';
import Contacts from '../Contacts/Contacts';
import Exceptional from '../Exceptional/Exceptional';
import InfoCards from '../InfoCards/InfoCards';
import MakeAppointment from '../MakeAppointment/MakeAppointment';
import Services from '../Services/Services';
import Testimonial from '../Testimonial/Testimonial';

const Home = () => {
    return (
        <div className='mx-5'>
            <Banner></Banner>
            <InfoCards></InfoCards>
            <Services></Services>
            <Exceptional></Exceptional>
            <MakeAppointment></MakeAppointment>
            <Testimonial></Testimonial>
            <Contacts></Contacts>
        </div>
    );
};

export default Home;