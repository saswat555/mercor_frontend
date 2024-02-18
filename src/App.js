import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ProfileCard from './ProfileCard';
import 'tailwindcss/tailwind.css';
import './index.css';
import ChatComponent from './ChatComponent1';
function App() {
  const [loading, setLoading] = useState(false);
  const [profiles, setProfiles] = useState([]);

  // Function to handle sending messages as queries
  const handleSendMessage = async (message) => {
    setLoading(true); // Start loading

    try {
      const response = await axios.post('http://127.0.0.1:5000/search', {
        query: message, // Use the message as the query
      });
      setProfiles(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false); // Stop loading
    }
  };

  return (
    <>
    <ChatComponent/>
    </>
  );
}

export default App;
