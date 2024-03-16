import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { doc, onSnapshot, updateDoc, increment, collection, query, where, addDoc } from 'firebase/firestore';
import { firestore } from '../firebase';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faThumbsUp, faThumbsDown, faEye, faUser } from '@fortawesome/free-solid-svg-icons';
import ReplyForm from './ReplyForm';

function QuestionDetail() {
  const { id } = useParams();
  const [question, setQuestion] = useState(null);
  const [userName, setUserName] = useState('');
  const [likes, setLikes] = useState(0);
  const [dislikes, setDislikes] = useState(0);
  const [views, setViews] = useState(0);
  const [upvoted, setUpvoted] = useState(false);
  const [downvoted, setDownvoted] = useState(false);
  const [replies, setReplies] = useState([]);


  useEffect(() => {
    const unsubscribe = onSnapshot(doc(firestore, 'questions', id), (doc) => {
      if (doc.exists()) {
        const questionData = doc.data();
        setQuestion({ id: doc.id, ...questionData });
        setUserName(questionData.userName);
        setLikes(questionData.likes);
        setDislikes(questionData.dislikes);
        setViews(questionData.views);
      } else {
        console.log('Question not found');
      }
    });

    return () => unsubscribe();
  }, [id]);

  useEffect(() => {
    const unsubscribe = onSnapshot(
      query(collection(firestore, 'replies'), where('questionId', '==', id)),
      (querySnapshot) => {
        const replyList = [];
        querySnapshot.forEach((doc) => {
          const replyData = doc.data();
          replyList.push({ id: doc.id, ...replyData });
        });
        setReplies(replyList);
      }
    );

    return () => unsubscribe();
  }, [id]);

  const handleUpvote = async () => {
    try {
      if (!upvoted) {
        await updateDoc(doc(firestore, 'questions', id), {
          likes: increment(1)
        });
        setUpvoted(true);
        if (downvoted) {
          setDownvoted(false);
          setDislikes((prevDislikes) => prevDislikes - 1);
        }
        setLikes((prevLikes) => prevLikes + 1);
      }
    } catch (error) {
      console.error('Error upvoting question:', error.message);
    }
  };

  const handleDownvote = async () => {
    try {
      if (!downvoted) {
        await updateDoc(doc(firestore, 'questions', id), {
          dislikes: increment(1)
        });
        setDownvoted(true);
        if (upvoted) {
          setUpvoted(false);
          setLikes((prevLikes) => prevLikes - 1);
        }
        setDislikes((prevDislikes) => prevDislikes + 1);
      }
    } catch (error) {
      console.error('Error downvoting question:', error.message);
    }
  };

  const handleReply = async (replyContent) => {
    try {
      if (replyContent.trim() !== '') {
        await addDoc(collection(firestore, 'replies'), {
          questionId: id,
          userName: userName,
          content: replyContent,
          createdAt: new Date().toISOString(),
          upvotes: 0,
          downvotes: 0,
        });
      }
    } catch (error) {
      console.error('Error adding reply:', error.message);
    }
  };

  const handleUpvoteReply = async (replyId) => {
    try {
      const replyRef = doc(firestore, 'replies', replyId);
      await updateDoc(replyRef, {
        upvotes: increment(1)
      });
    } catch (error) {
      console.error('Error upvoting reply:', error.message);
    }
  };

  const handleDownvoteReply = async (replyId) => {
    try {
      const replyRef = doc(firestore, 'replies', replyId);
      await updateDoc(replyRef, {
        downvotes: increment(1)
      });
    } catch (error) {
      console.error('Error downvoting reply:', error.message);
    }
  };

  const handleView = async () => {
    try {
      const viewedQuestion = localStorage.getItem(`viewedQuestion-${id}`);
      if (!viewedQuestion) {
        await updateDoc(doc(firestore, 'questions', id), {
          views: increment(1)
        });
        setViews((prevViews) => prevViews + 1);
        localStorage.setItem(`viewedQuestion-${id}`, true);
      }
    } catch (error) {
      console.error('Error updating views:', error.message);
    }
  };

  if (!question) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-[35px] font-bold mb-6">{question.title}</h1>
      <div className="flex items-center mb-2">
        <p className="text-black font-[500] text-[16px] mr-2">
          <FontAwesomeIcon icon={faUser} /> {userName}
        </p>
        <button
          className={`bg-blue-500 text-white rounded py-1 px-2 mr-2 hover:bg-blue-600 transition duration-300 ${
            upvoted && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleUpvote}
          disabled={upvoted}
        >
          <FontAwesomeIcon icon={faThumbsUp} />
        </button>
        <span className="mr-2">{likes} Likes</span>
        <button
          className={`bg-red-500 text-white rounded py-1 px-2 mr-2 hover:bg-red-700 transition duration-300 ${
            downvoted && 'opacity-50 cursor-not-allowed'
          }`}
          onClick={handleDownvote}
          disabled={downvoted}
        >
          <FontAwesomeIcon icon={faThumbsDown} />
        </button>
        <span className="mr-2">{dislikes} Dislikes</span>
        <button
          className="bg-gray-500 text-white rounded py-1 px-2 mr-2 hover:bg-gray-600 transition duration-300"
          onClick={handleView}
        >
          <FontAwesomeIcon icon={faEye} />
        </button>
        <span>{views} Views</span>
      </div>
      <p className="text-gray-800 font-[400] text-[17px] mb-4">{question.description}</p>
      <ReplyForm questionId={id} />
      <div className="mt-8">
        <h2 className="text-xl font-semibold mb-4">Replies ({replies.length})</h2>
        {replies.map((reply) => (
          <div key={reply.id} className="bg-blue-100 rounded-md p-4 mb-4">
            <div className="flex items-start">
              <FontAwesomeIcon icon={faUser} className="text-black mr-2 mt-1" />
              <div>
                <p className="text-black font-[400]">
                  <span className="font-[500]">{reply.userName}:</span> <br /> {reply.content}
                </p>
                <div className="flex items-center mt-2 ">
                  <button
                    className={`bg-blue-500 text-white rounded py-1 px-2 mr-2 hover:bg-blue-600 transition duration-300 `}
                    onClick={() => handleUpvoteReply(reply.id)}
                  >
                    <FontAwesomeIcon icon={faThumbsUp} />
                  </button>
                  <span className="mr-2">{reply.upvotes} Upvotes</span>
                  <button
                    className={`bg-red-500 text-white rounded py-1 px-2 mr-2 hover:bg-red-600 transition duration-300`}
                    onClick={() => handleDownvoteReply(reply.id)}
                  >
                    <FontAwesomeIcon icon={faThumbsDown} />
                  </button>
                  <span className="mr-2">{reply.downvotes} Downvotes</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Link to="/discussion" className="text-blue-500 hover:underline ml-4">
        Back to Discussion Dashboard
      </Link>
    </div>
  );
}

export default QuestionDetail;
