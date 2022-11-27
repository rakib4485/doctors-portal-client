import chair from "../../../assets/images/chair.png";
import { DayPicker } from "react-day-picker";
import { format } from "date-fns";

const AppointmentBanner = ({selectedDate, setSelectedDate}) => {
  
  return (
    <header>
      <div className="hero banner my-6">
        <div className="hero-content flex-col lg:flex-row-reverse justify-center">
          <img
            src={chair}
            className="md:w-1/2 rounded-lg shadow-2xl"
            alt="dentist chair"
          />
          <div className="mr-6">
            <DayPicker
              mode="single"
              selected={selectedDate}
              onSelect={setSelectedDate}
            ></DayPicker>
          </div>
        </div>
      </div>
    </header>
  );
};

export default AppointmentBanner;
