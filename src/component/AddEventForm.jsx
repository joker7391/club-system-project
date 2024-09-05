import { useState } from 'react';

export default function AddEventForm({ clubs }) {
  const [formData, setFormData] = useState({
    eventName: '',
    eventDate: '',
    eventTime: '',
    eventDescription: '',
    club: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.eventName) formErrors.eventName = 'Event Name is required';
    if (!formData.eventDate) formErrors.eventDate = 'Event Date is required';
    if (!formData.eventTime) formErrors.eventTime = 'Event Time is required';
    if (!formData.eventDescription)
      formErrors.eventDescription = 'Event Description is required';
    if (!formData.club) formErrors.club = 'You must select a club';
    return formErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form Submitted:', formData);
      // You can add API logic here
      setFormData({
        eventName: '',
        eventDate: '',
        eventTime: '',
        eventDescription: '',
        club: '',
      });
      setErrors({});
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center ">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md">
        <h2 className="text-2xl font-semibold mb-6">Add Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Event Name</label>
            <input
              type="text"
              name="eventName"
              value={formData.eventName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.eventName && (
              <p className="text-red-500 text-sm">{errors.eventName}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Date</label>
            <input
              type="date"
              name="eventDate"
              value={formData.eventDate}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.eventDate && (
              <p className="text-red-500 text-sm">{errors.eventDate}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Event Time</label>
            <input
              type="time"
              name="eventTime"
              value={formData.eventTime}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {errors.eventTime && (
              <p className="text-red-500 text-sm">{errors.eventTime}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Description</label>
            <textarea
              name="eventDescription"
              value={formData.eventDescription}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              rows="4"
            />
            {errors.eventDescription && (
              <p className="text-red-500 text-sm">{errors.eventDescription}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Select Club</label>
            <select
              name="club"
              value={formData.club}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            >
              <option value="">Select a club</option>
              {clubs.map((club) => (
                <option key={club.id} value={club.id}>
                  {club.name}
                </option>
              ))}
            </select>
            {errors.club && <p className="text-red-500 text-sm">{errors.club}</p>}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
          >
            Add Event
          </button>
        </form>
      </div>
    </div>
  );
}
