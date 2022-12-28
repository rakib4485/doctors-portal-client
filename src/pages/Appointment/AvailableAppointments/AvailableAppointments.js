import { async } from '@firebase/util';
import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import Loading from '../../shared/Loading/Loading';
import BookingModal from '../BookingModal/BookingModal';
import AppointmentOption from './AppointmentOption';

const AvailableAppointments = ({selectedDate}) => {
    const [treatment, setTreatment] = useState(null);

    const date = format(selectedDate, 'PP');
    const {data:appointmentOptions = [], refetch, isLoading} = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async()=> {
            const res = await fetch(`http://localhost:5000/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <section className='my-12'>
            <p className="text-secondary text-center font-bold">Available Appointment on {format(selectedDate, 'PP')}</p>
            <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-16'>
                {
                    appointmentOptions.map(option => <AppointmentOption
                        key={option._id}
                        appointmentOption = {option}
                        setTreatment = {setTreatment}
                        refetch = {refetch}
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