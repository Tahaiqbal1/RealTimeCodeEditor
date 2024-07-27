import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom"; // Import useNavigate

const Home = () => {
  const [roomId, setRoomId] = useState("");
  const [userName, setuserName] = useState("");
  const navigate = useNavigate(); // Get the navigate function

  const createNewRoom = (e) => {
    e.preventDefault(); // Prevent page reload
    const generatedId = uuidv4(); // Generate unique room ID
    setRoomId(generatedId); // Update roomId state
    toast.success("New Room Created"); // Show success message
  };

  const joinRoom = () => {
    if (!roomId || !userName) {
      toast.error("Room Id and Username are required!"); // Show error if fields are empty
      return;
    }

    // Redirect to the editor page
    navigate(`/editor/${roomId}`, {
      state: {
        userName,
      },
    });
  };

  const handleEnterInput = (e) => {
    if (e.code === "Enter") joinRoom();
  };

  return (
    <div className="homePageWrapper">
      <div className="formWrapper">
        <p>Paste room id</p>
        <div className="inputGroup">
          <input
            type="text"
            placeholder="Room id"
            className="inputText"
            onChange={(e) => setRoomId(e.target.value)} // Update roomId state
            value={roomId}
            onKeyUp={handleEnterInput}
          />
          <input
            type="text"
            placeholder="User Name"
            className="inputText"
            onChange={(e) => setuserName(e.target.value)} // Update userName state
            value={userName}
            onKeyUp={handleEnterInput}
          />
          <button className="btn joinBtn" onClick={joinRoom}>
            Join
          </button>
          <p>
            If you don't have an invite then create{" "}
            <a href="/" className="newRoomBtn" onClick={createNewRoom}>
              room id
            </a>
          </p>
        </div>
      </div>
      <footer className="footer">
        <h4>
          Made with ❤️ by <a href="/">Taha Iqbal</a>
        </h4>
      </footer>
    </div>
  );
};

export default Home;
