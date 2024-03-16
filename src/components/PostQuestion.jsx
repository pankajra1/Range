// components/PostQuestion.js
import React, { useState ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { firestore } from '../firebase';

function PostQuestion() { // Receive userId and userName as props
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [userName, setUserName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return; 

    try {
      await addDoc(collection(firestore, 'questions'), {
        title,
        description,
        userName, // Include the user's name when posting the question
        createdAt: serverTimestamp()
      });
      setTitle('');
      setDescription('');
      setUserName('');
    } catch (error) {
      console.error('Error posting question:', error.message);
    }
  };


  return (
    <div className="max-w-md mx-auto mt-8">
      <h2 className="text-lg font-semibold mb-4">Post a Question</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
        />
        <textarea
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Description"
          className="w-full h-40 border rounded p-2 focus:outline-none focus:border-blue-500"
        ></textarea>
        <input
          type="text"
          value={userName}
          onChange={(e) => setUserName(e.target.value)}
          placeholder="Your Name"
          className="w-full border rounded p-2 focus:outline-none focus:border-blue-500"
        />
        <button type="submit" className="w-full bg-blue-500 text-white rounded py-2 px-4 hover:bg-blue-600 transition duration-300">Post</button>
      </form>
      <Link to="/discussion" className="block text-blue-500 mt-4">Back to Discussion Dashboard</Link>
    </div>
  );
}

export default PostQuestion;
