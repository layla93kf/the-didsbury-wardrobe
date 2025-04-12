import React, { useState } from 'react';
import Datepicker from 'tailwind-datepicker-react';
import { DateTime } from 'luxon';

const today = DateTime.utc();

const MyDatePicker = ({ handleDateChange }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [error, setError] = useState('');
  const [show, setShow] = useState(false);

  const handleChange = (date) => {
    setError('');
    setSelectedDate('');
    const selectedDateTime = DateTime.fromJSDate(date).toUTC();
    if (selectedDateTime > today) {
      setSelectedDate(date);
      handleDateChange(date);
      console.log(date);
    } else {
      setError('Selected date must be in the future.');
    }
  };

  const handleClose = (state) => {
    setShow(state);
  };

  return (
    <div className="mt-4">
      <label className="block text-sm font-medium text-gray-700 max-w-xl z-50 overflow-auto">
        Select a date
      </label>
      <div className="w-full max-w-xl z-50">
        <Datepicker
          value={selectedDate}
          show={show}
          setShow={handleClose}
          onChange={handleChange}
          placeholder="Select Date"
          dateFormat="mm/dd/yyyy"
          useRange={false}
          minDate={today.toJSDate()}
          theme={{
            button: 'bg-blue-500 text-white',
            input: 'p-2 border rounded-lg text-gray-800',
            selected: 'bg-blue-500 text-white',
            background: 'bg-white shadow-md',
          }}
          options={{
            todayBtn: false,
            clearBtn: false,
            icons: {
              prev: () => <span>Prev</span>,
              next: () => <span>Next</span>,
            },
          }}
        />
      </div>
      {error && <p className="text-red-800 text-xs">{error}</p>}
    </div>
  );
};

export default MyDatePicker;
