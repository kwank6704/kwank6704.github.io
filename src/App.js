import React, { useState } from "react";
import "./App.css";

function App() {
  const [questionIndex, setQuestionIndex] = useState(0);
  const [score, setScore] = useState({
    I: 0, E: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0
  });
  const [result, setResult] = useState("");

  const questions = [
    {
      question: "Do you enjoy spending time alone to recharge?",
      answers: ["Yes, I need solitude", "No, I prefer being around others", "Sometimes, depending on my mood", "I often seek alone time"],
      options: ["I", "E", "I", "I"]
    },
    {
      question: "Do you like attending social gatherings?",
      answers: ["Yes, I love meeting new people", "No, I avoid them", "Only if it’s with close friends", "It depends on the event"],
      options: ["E", "I", "E", "E"]
    },
    {
      question: "When making decisions, do you focus on logic or emotions?",
      answers: ["Logic and facts are my priority", "I rely on my emotions and gut feeling", "I try to balance both", "I lean towards practical considerations"],
      options: ["T", "F", "T", "T"]
    },
    {
      question: "Do you enjoy exploring new places and trying new things?",
      answers: ["Yes, I love adventure!", "No, I prefer sticking to what I know", "I enjoy it sometimes", "It depends on the situation"],
      options: ["E", "I", "E", "E"]
    },
    {
      question: "Do you prefer working in silence or with background noise?",
      answers: ["Silence helps me focus", "I prefer music or conversation", "I can adapt to both", "I prefer a busy, noisy environment"],
      options: ["I", "E", "I", "E"]
    },
    {
      question: "Do you feel comfortable in structured, organized environments?",
      answers: ["Yes, I love order", "No, I prefer flexibility", "I like a balance of both", "I thrive in unstructured environments"],
      options: ["J", "P", "J", "J"]
    },
    {
      question: "Do you prefer to plan things ahead or go with the flow?",
      answers: ["I love planning everything in advance", "I prefer to be spontaneous", "I like to plan but leave room for flexibility", "I thrive in unstructured environments"],
      options: ["J", "P", "J", "P"]
    },
    {
      question: "Do you enjoy being in the spotlight?",
      answers: ["No, I prefer staying out of attention", "Yes, I love being noticed", "Sometimes, depending on the situation", "I feel uncomfortable being the center of attention"],
      options: ["I", "E", "I", "E"]
    },
    {
      question: "When you're facing a challenge, do you focus on the facts or the impact it might have on others?",
      answers: ["I focus on the facts and data", "I think about how others will feel", "I consider both", "I prefer to focus on the outcome for myself"],
      options: ["T", "F", "T", "T"]
    },
    {
      question: "Do you find it easy to meet new people and make friends?",
      answers: ["Yes, I enjoy meeting new people", "No, it takes time", "It depends on the situation", "I prefer sticking with my close circle"],
      options: ["E", "I", "E", "I"]
    }
  ];

  const handleAnswer = (option) => {
    const newScore = { ...score };
    const optionType = questions[questionIndex].options[option];
    newScore[optionType]++;
    setScore(newScore);
    if (questionIndex < questions.length - 1) {
      setQuestionIndex(questionIndex + 1);
    } else {
      determineResult(newScore);
    }
  };

  const determineResult = (score) => {
    const mbtiType = Object.keys(score).reduce((a, b) => score[a] > score[b] ? a : b);
    setResult(mbtiType);
  };

  const getAnimal = () => {
    switch (result) {
      case "I":
        return "Pufferfish (ปลาปักเป้า)";
      case "E":
        return "Clownfish (ปลานีโม่)";
      case "S":
        return "Ray (ปลากระเบน)";
      case "N":
        return "Stingray (ปลากระเบนหางยาว)";
      case "T":
        return "Shark (ฉลาม)";
      case "F":
        return "Dolphin (ปลาโลมา)";
      case "J":
        return "Octopus (ปลาหมึก)";
      case "P":
        return "Peacockfish (ปลาหางนกยูง)";
      default:
        return "";
    }
  };

  return (
    <div className="app">
      <h1>Welcome to AquaMystery</h1>
      <p>Answer 10 questions and find out which underwater animal you are!</p>
      {result ? (
        <div>
          <h2>Your MBTI Type: {result}</h2>
          <h3>Your underwater animal: {getAnimal()}</h3>
        </div>
      ) : (
        <div>
          <h2>{questions[questionIndex].question}</h2>
          <div className="answers">
            {questions[questionIndex].answers.map((answer, index) => (
              <button key={index} onClick={() => handleAnswer(index)}>
                {answer}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
