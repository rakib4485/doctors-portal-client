import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    const {data:appointmentOptions = []} = useQuery({
        queryKey: ['appointmentOptions'],
        queryFn: ()=> fetch('http://localhost:5000/appointmentOptions')
        .then(res => res.json())
    })

    return (
        <section className='my-12'>
            <p className="text-secondary text-center font-bold">Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption = {option}
                        setTreatment = {setTreatment}
                    ></AppointmentOption>)
                }
            </div>

            {
                treatment &&
                <BookingModal
                    selectedDate = {selectedDate}
                    treatment = {treatment}
                    setTreatment = {setTreatment}
                ></BookingModal>
            }
        </section>
    );
};

export default AvailableAppointments;