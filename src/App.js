import React, { useState } from "react";
import "./App.css";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);

  const questions = [
    { question: "Do you prefer deep water?", answers: ["Yes", "No"] },
    { question: "Do you like to swim fast?", answers: ["Yes", "No"] },
    //อย่าลืมใส่คำถามเพิ่ม 20 4ช้อย mbti
  ];

  const handleAnswer = (answer) => {
    setScore(answer === "Yes" ? score + 1 : score);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      alert(`Your score is ${score}`);
    }
  };

  return (
    <div className="app">
      <h1>Welcome to AquaMystery</h1>
      <p>Answer 20 questions and find out which underwater animal you are!</p>
      <div className="question-container">
        <h2>{questions[questionIndex].question}</h2>
        <div className="answers">
          {questions[questionIndex].answers.map((answer, index) => (
            <button key={index} onClick={() => handleAnswer(answer)}>
              {answer}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;
