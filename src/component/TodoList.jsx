import React, { useState } from "react";
import { doc, setDoc, getFirestore } from "firebase/firestore";
import { ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import { firestore, storage } from "../firebase.config";

const TodoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState({
    description: "",
    dateTime: "",
    image: null,
  });
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [clubId, setClubId] = useState(""); // Assuming you have a club ID

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTask({ ...newTask, [name]: value });
  };

  const handleImageChange = (e) => {
    setNewTask({ ...newTask, image: e.target.files[0] });
  };

  const handleClubChange = (e) => {
    setClubId(e.target.value);
  };

  const uploadImage = (image) => {
    return new Promise((resolve, reject) => {
      const imageRef = ref(storage, `images/${image.name}`);
      const uploadTask = uploadBytesResumable(imageRef, image);

      uploadTask.on(
        "state_changed",
        (snapshot) => {
          const progress = Math.round(
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100
          );
          setProgress(progress);
        },
        (error) => {
          console.error("Image upload error:", error);
          reject(error);
        },
        async () => {
          const downloadURL = await getDownloadURL(uploadTask.snapshot.ref);
          resolve(downloadURL);
        }
      );
    });
  };

  const addTask = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      let imageURL = "";
      if (newTask.image) {
        imageURL = await uploadImage(newTask.image);
      }

      const taskData = {
        description: newTask.description,
        dateTime: newTask.dateTime,
        imageURL: imageURL,
        createdAt: new Date(),
      };

      if (clubId) {
        await setDoc(
          doc(firestore, `clubs/${clubId}/tasks`, newTask.description),
          taskData
        );
        setTasks([...tasks, taskData]);
      } else {
        console.error("Club ID is required");
      }

      setNewTask({ description: "", dateTime: "", image: null });
      setProgress(0);
    } catch (error) {
      console.error("Error adding task:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={addTask}
        className="flex flex-col justify-around gap-5 bg-blue-600 p-3 rounded-md h-[30em] w-[30em]"
      >
        <h2 className="text-lg text-[#fff] text-center font-semibold">
          Add event
        </h2>
        <select className="p-1 rounded-md">
          <option disabled>Clubs</option>
          <option>HUMMS</option>
          <option>SSA</option>
          <option>STEM</option>
          <option>YRC</option>
        </select>
        <textarea
          type="text"
          name="description"
          value={newTask.description}
          onChange={handleInputChange}
          placeholder="Task Description"
          required
          className="rounded-md p-1"
        />
        <textarea
          type="date"
          name="dateTime"
          value={newTask.dateTime}
          onChange={handleInputChange}
          placeholder="Date & Time"
          required
          className="rounded-md p-1"
        />
        <input type="file" name="image" onChange={handleImageChange} />
        <button type="submit" disabled={loading} className="bg-">
          Add Task
        </button>
        {loading && <p>Uploading: {progress}%</p>}
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            <p>{task.description}</p>
            {task.imageURL && (
              <img src={task.imageURL} alt="Task" width="100" />
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
