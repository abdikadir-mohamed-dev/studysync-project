import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

function CalendarPage() {

  const [date, setDate] = useState(new Date());

  return (
    <div className="p-8">

      <h1 className="text-3xl font-bold mb-6">
        Study Calendar
      </h1>

      <div className="bg-white p-6 rounded-2xl shadow w-fit">
        <Calendar onChange={setDate} value={date} />
      </div>

      <p className="mt-5 text-lg">
        Selected Date: {date.toDateString()}
      </p>

    </div>
  );
}

export default CalendarPage;