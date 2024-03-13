import React, { useState } from 'react';
import { collection, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';

function ReplyForm({ questionId }) {
  const [userName, setUserName] = useState('');
  const [replyContent, setReplyContent] = useState('');
  
  const handleReplySubmit = async (e) => {
    e.preventDefault();
    try {
      if (userName.trim() !== '' && replyContent.trim() !== '') {
        await addDoc(collection(firestore, 'replies'), {
          questionId,
          userName,
          content: replyContent,
          createdAt: new Date().toISOString()
        });
        setUserName('');
        setReplyContent('');
      }
    } catch (error) {
      console.error('Error adding reply:', error.message);
    }
  };

  return (
    <form onSubmit={handleReplySubmit} className="mb-4">
      <input
        type="text"
        value={userName}
        onChange={(e) => setUserName(e.target.value)}
        placeholder="Your Name"
        className="w-full px-3 py-2 border rounded-md mb-2"
        required
      />
      <textarea
        value={replyContent}
        onChange={(e) => setReplyContent(e.target.value)}
        placeholder="Write your reply..."
        className="w-full px-3 py-2 border rounded-md resize-none"
        rows="3"
        required
      ></textarea>
      <button type="submit" className="mt-2 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition duration-300">
        Submit Reply
      </button>
    </form>
  );
}

export default ReplyForm;
