// components/Dashboard.js
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs, onSnapshot } from "firebase/firestore";
import { firestore } from "../firebase";

function Dashboard() {
  const [questions, setQuestions] = useState(() => {
    const cachedQuestions = localStorage.getItem("questions");
    return cachedQuestions ? JSON.parse(cachedQuestions) : [];
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const querySnapshot = await getDocs(collection(firestore, "questions"));
        const questionsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setQuestions(questionsData);
        localStorage.setItem("questions", JSON.stringify(questionsData)); // Store data in local storage
      } catch (error) {
        console.error("Error fetching questions:", error.message);
      }
    };

    fetchData();

    const unsubscribe = onSnapshot(
      collection(firestore, "questions"),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "modified") {
            const modifiedQuestion = change.doc.data();
            setQuestions((prevQuestions) =>
              prevQuestions.map((question) => {
                if (question.id === change.doc.id) {
                  return { id: question.id, ...modifiedQuestion };
                }
                return question;
              })
            );
          }
        });
      }
    );

    return () => unsubscribe();
  }, []);

  return (
    <div className="container mx-auto px-4 py-8 text-center">
      <h1 className="text-3xl font-bold mb-4">Discussion Dashboard</h1>
      <h3 className="font-[500]">Welcome to Doubt section of the CyberPeace</h3>
      <div className="flex justify-center mx-12">
        <a href="https://git.io/typing-svg" className="text-center">
          <img
            className="mx-96 px-4"
            src="https://readme-typing-svg.demolab.com?font=Roboto&weight=500&size=18&duration=4000&pause=500&color=1F89F7&random=false&width=510&lines=Post+your+question+and+ask+your+doubts;Reply+the+questions+and+show+your+learnings"
            alt="Typing SVG"
          />
        </a>
      </div>

      <div className="flex justify-end mb-4">
        <Link to="/post">
          <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded transition duration-300">
            New Post
          </button>
        </Link>
      </div>
      {questions.map((question) => (
        <Link
          to={`/question/${question.id}`}
          key={question.id}
          className="block mb-4"
        >
          <div className="bg-white shadow-md rounded-lg p-6 transform transition-transform hover:scale-105">
            <h2 className="text-xl font-semibold mb-2 text-left">
              {question.title}
            </h2>
            <p className="text-gray-600 mb-4 text-left">
              {question.description}
            </p>
            <div className="flex justify-between items-center">
              <div className="flex items-center">
                <span className="text-sm mr-2">{question.likes} Likes</span>
                <span className="text-sm mr-2">
                  {question.dislikes} Dislikes
                </span>
                <span className="text-sm">{question.views} Views</span>
              </div>
              <span className="text-blue-500 hover:underline">
                View Question
              </span>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default Dashboard;
