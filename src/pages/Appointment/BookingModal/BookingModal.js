import { format } from "date-fns";
import React, { useContext } from "react";
import toast from "react-hot-toast";
import { AuthContext } from "../../../contexts/AuthProvider";

const BookingModal = ({ treatment,setTreatment, selectedDate, refetch }) => {
  const { name, price, slots } = treatment;
  const date = format(selectedDate, "PP");
  const {user} = useContext(AuthContext)

  const handleBooking = (event) =>{
    event.preventDefault();
    const form = event.target;
    const slot = form.slot.value;
    const name = form.name.value;
    const email = form.email.value;
    const phone = form.phone.value;

    const booking = {
      appointmentDate : date,
      treatment: treatment.name,
      patientName: name,
      slot,
      email,
      phone,
      price
    }
    console.log(booking)

    fetch('https://doctors-portal-server-liard-two.vercel.app/bookings', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify(booking)
    })
    .then(res => res.json())
    .then(data => {
      console.log(data);
     if(data.acknowledged){
      setTreatment(null);
      toast.success('Booking Confirmed.')
      refetch();
     }
     else{
      toast.error(data.message)
     }
      
    })
  }
  return (
    <>
      <input type="checkbox" id="booking-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="booking-modal"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form onSubmit = {handleBooking} className="grid gap-5 mt-12">
            <input
              type="text"
              disabled
              value={date}
              className="input input-bordered w-full"
            />
            <select name="slot" className="select select-bordered w-full">
              {
                slots.map((slot,idx) => <option 
                  value={slot}
                  key = {idx}
                >{slot}</option>)
              }
            </select>
            <input type="text" name="name" defaultValue={user?.displayName} disabled placeholder="Your Name" className="input input-bordered w-full" />
            <input type="email" name="email" defaultValue={user?.email} disabled placeholder="Email Address" className="input input-bordered w-full" />
            <input type="text" name="phone" placeholder="Phone Number" className="input input-bordered w-full" />
            <input
              className="btn btn-accent w-full"
              type="submit"
              value="Book NOw"
            />
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;
