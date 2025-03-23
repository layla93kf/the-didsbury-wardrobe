import { X, Send } from 'lucide-react';
import { useRef, useState } from 'react';
import { sendRequestForm } from '../Api';

function Modal({ onClose, item }) {
  const modalRef = useRef();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    address: '',
    city: '',
    postcode: '',
    message: '',
    dateRange: null,
    item: '',
    origin: '',
  });

  const closeModal = (e) => {
    if (modalRef.current === e.target) {
      onClose();
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('here');
    console.log(formData);
    formData.item = item.name;
    formData.origin = item.origin;
    sendRequestForm(formData);
  };

  return (
    <div
      ref={modalRef}
      onClick={closeModal}
      className="fixed inset-0 bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div classNAme="mt-10 flex flex-col gap-5 text-black">
        <button onClick={onClose} className="place-self-end">
          <X size={30} />
        </button>
        <div className="bg-zinc-100 border-zinc-300 border-solid border-2 rounded-xl flex flex-col gap-5 items-center mx-4 px-80 ">
          <h1 className="text-xl mt-5">Request a Rental</h1>
          <form className="flex-col flex">
            <div class="border-b border-gray-900/10 pb-12">
              <h2 class="text-base/7 text-gray-900">
                If you would like to rent an item please fill out this form and
                a request will be made to Didbsury Wardrobe HQ.
              </h2>

              <h3 className="items-center justify-center flex">
                {' '}
                This is a request for the{' '}
                <b className="ml-1 mr-1">{item && item.name}</b> from{' '}
                <b className="ml-1">{item && item.origin}</b>.
              </h3>
              <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                <div class="sm:col-span-3">
                  <label
                    for="first-name"
                    class="block text-sm/6 font-medium text-gray-900"
                  >
                    Full name
                  </label>
                  <div>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                  </div>
                  <div class="sm:col-span-3">
                    <label
                      for="first-name"
                      class="block text-sm/6 font-medium text-gray-900"
                    >
                      Email
                    </label>

                    <input
                      type="text"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      id="first-name"
                      autocomplete="given-name"
                      class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                    />
                    <div class="col-span-full">
                      <label
                        for="street-address"
                        class="block text-sm/6 font-medium text-gray-900"
                      >
                        Street address
                      </label>
                      <div class="mt-2">
                        <input
                          type="text"
                          name="address"
                          value={formData.address}
                          onChange={handleChange}
                          id="street-address"
                          autocomplete="street-address"
                          class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                        />
                        <div class="sm:col-span-2 sm:col-start-1">
                          <label
                            for="city"
                            class="block text-sm/6 font-medium text-gray-900"
                          >
                            City
                          </label>
                          <div class="mt-2">
                            <input
                              type="text"
                              name="city"
                              value={formData.city}
                              onChange={handleChange}
                              id="city"
                              autocomplete="address-level2"
                              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>

                        <div class="sm:col-span-2">
                          <label
                            for="postal-code"
                            class="block text-sm/6 font-medium text-gray-900"
                          >
                            Postal code
                          </label>
                          <div class="mt-2">
                            <input
                              type="text"
                              name="postcode"
                              value={formData.postcode}
                              onChange={handleChange}
                              id="postal-code"
                              autocomplete="postal-code"
                              class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                            />
                          </div>
                        </div>
                        <label className="block text-sm font-medium text-gray-700">
                          Message (optional)
                        </label>
                        <textarea
                          className="w-full p-3 border border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500"
                          rows="4"
                          placeholder="Type your message here..."
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
          <button
            className="mt-4 flex items-center bg-black text-white rounded-md h-10 text-lg w-auto hover:bg-zinc-700 mb-6"
            onClick={handleSubmit}
          >
            <div className="ml-2">
              {' '}
              <Send size={18} />
            </div>
            <div className="ml-2 mr-4 mb-3 mt-2 flex items-center justify-center">
              Send Request
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Modal;
