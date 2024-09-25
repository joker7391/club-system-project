import { useState } from "react";
import { firestore, storage } from "../firebase.config";
import { collection, addDoc } from "firebase/firestore";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function AddEventForm({ clubs }) {
  const [formData, setFormData] = useState({
    eventName: "",
    eventDate: "",
    eventTime: "",
    eventDescription: "",
    club: "",
    eventFlyer: null, // for payle uplawdes
  });

  const [errors, setErrors] = useState({});
  const [uploading, setUploading] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "eventFlyer") {
      setFormData({
        ...formData,
        [e.target.name]: e.target.files[0], // Story da payle
      });
    } else {
      setFormData({
        ...formData,
        [e.target.name]: e.target.value,
      });
    }
  };

  const validateForm = () => {
    let formErrors = {};
    if (!formData.eventName) formErrors.eventName = "Event Name is required";
    if (!formData.eventDate) formErrors.eventDate = "Event Date is required";
    if (!formData.eventTime) formErrors.eventTime = "Event Time is required";
    if (!formData.eventDescription)
      formErrors.eventDescription = "Event Description is required";
    if (!formData.club) formErrors.club = "You must select a club";
    return formErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      setUploading(true);
      try {
        let flyerURL = null;

        // pag nag uplawdes mapunta sya firebase
        if (formData.eventFlyer) {
          const storageRef = ref(storage, `flyers/${formData.eventFlyer.name}`);
          const snapshot = await uploadBytes(storageRef, formData.eventFlyer);
          flyerURL = await getDownloadURL(snapshot.ref);
        }

        // sa firestore nag saber form data
        await addDoc(collection(firestore, "events"), {
          eventName: formData.eventName,
          eventDate: formData.eventDate,
          eventTime: formData.eventTime,
          eventDescription: formData.eventDescription,
          club: formData.club,
          flyerURL,
        });

        toast.success("Event successfully added!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });

        setFormData({
          eventName: "",
          eventDate: "",
          eventTime: "",
          eventDescription: "",
          club: "",
          eventFlyer: null,
        });
        setErrors({});
      } catch (error) {
        console.error("Error adding event:", error);

        toast.error("Failed to add the event. Please try again.", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      } finally {
        setUploading(false);
      }
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-300 p-4">
      <div className="max-w-md w-full p-6 bg-white shadow-md rounded-md my-8">
        <h2 className="text-2xl font-semibold mb-6">Add Event</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Name
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Event Date
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Event Time
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Description
            </label>
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
            <label className="block text-sm font-medium text-gray-700">
              Select Club
            </label>
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
            {errors.club && (
              <p className="text-red-500 text-sm">{errors.club}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Event Flyer (optional)
            </label>
            <input
              type="file"
              name="eventFlyer"
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
            />
            {formData.eventFlyer && (
              <p className="text-sm text-green-500">
                File selected: {formData.eventFlyer.name}
              </p>
            )}
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition"
            disabled={uploading}
          >
            {uploading ? "Uploading..." : "Add Event"}
          </button>
        </form>
      </div>
      <ToastContainer />
    </div>
  );
}
