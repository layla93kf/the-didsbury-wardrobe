import { X, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { sendRequestForm } from '../Api';
import Datepicker from './DatePicker';

function Modal({ onClose, item }) {
  const modalRef = useRef();

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const initialFormData = {
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    dateStart: '',
    rentalDuration: '',
    item: '',
    origin: '',
    photos: '',
  };
  const [formData, setFormData] = useState(initialFormData);
  const [error, setError] = useState({});
  const [successMsg, setSuccessMsg] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
      item: item?.name,
      origin: item?.origin,
      photos: item?.photos,
    }));

    setError((prev) => ({
      ...prev,
      [name]: '',
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prev) => ({
      ...prev,
      dateStart: date,
    }));
  };

  const validPostcode = (postcode) => {
    const postcodeRegex = /^(GIR 0AA|[A-Z]{1,2}\d{1,2}[A-Z]?\s?\d[A-Z]{2})$/i;
    return postcodeRegex.test(postcode);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validPostcode(formData.postcode)) {
      setError((prev) => ({
        ...prev,
        postcode: 'Please enter a valid UK postcode.',
      }));
      return;
    }
    setFormData((prev) => ({
      ...prev,
    }));

    sendRequestForm(formData).then((res) => {
      if (res && res.results.total_accepted_recipients === 1) {
        setSuccessMsg(
          'Your request has been sent to Didsbury Wardrobe HQ and will be responded to within 5 working days.',
        );
      }
      setFormData(initialFormData);
    });
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-30 overflow-y-auto backdrop-blur-sm"
    >
      <div className="bg-zinc-100 rounded-xl mt-6 mb-5 shadow-lg p-6 w-full max-w-lg sm:max-w-xl relative text-black border border-zinc-500 overflow-auto max-h-screen">
        <button onClick={onClose} className="absolute top-4 right-4">
          <X size={24} />
        </button>

        <h1 className="text-xl font-semibold text-center mb-2">
          Request a Rental
        </h1>
        <p className="text-sm text-center text-gray-600 mb-4">
          If you would like to rent an item, please fill out this form and a
          request will be made to Didsbury Wardrobe HQ.
        </p>

        <h3 className="text-center text-sm text-gray-700 mb-6">
          This is a request for <b>{item?.name}</b> from <b>{item?.origin}</b>.
        </h3>

        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          <label className="text-sm font-medium">Full Name</label>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            className="border rounded-md p-2 bg-white"
            required
          />

          <label className="text-sm font-medium">Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />

          <label className="text-sm font-medium">Street Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />

          <label className="text-sm font-medium">City</label>
          <input
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />

          <label className="text-sm font-medium">Postal Code</label>
          <input
            type="text"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            className="border rounded-md p-2"
            required
          />
          {error.postcode && (
            <p className="text-red-800 text-xs">{error.postcode}</p>
          )}

          <div className="w-full">
            <div>
              <Datepicker handleDateChange={handleDateChange} />
            </div>
          </div>

          <div className="sm:col-span-2">
            <label
              htmlFor="rentalDuration"
              className="block text-sm font-medium text-gray-900 mt-3"
            >
              Rental Duration
            </label>
            <div className="mt-2">
              <select
                name="rentalDuration"
                id="rentalDuration"
                value={formData.rentalDuration}
                onChange={handleChange}
                required
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 border border-gray-300 shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              >
                <option value="">Select duration</option>
                <option value="2">2 days</option>
                <option value="3">3 days</option>
                <option value="4">4 days</option>
                <option value="5">5 days</option>
                <option value="6">6 days</option>
                <option value="7">7 days</option>
              </select>
            </div>
          </div>

          <button
            type="submit"
            className="mt-4 flex items-center justify-center bg-black text-white rounded-md py-2 text-lg hover:bg-zinc-700"
          >
            <Send size={18} className="mr-2" />
            Send Request
          </button>

          {successMsg && (
            <p className="text-zinc-800 text-sm mt-2 text-center">
              {successMsg}
            </p>
          )}
        </form>
      </div>
    </div>
  );
}

export default Modal;
