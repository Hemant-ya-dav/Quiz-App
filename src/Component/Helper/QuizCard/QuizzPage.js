import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useLocation, useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../../Firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../../../features/detailSlice";
import { Quizz_screen } from "../../Quizz/Quizz_screen";
import Result from "../../Quizz/Result";

function QuizzPage(props) {
  const { qid } = useParams();
  const { endtime, datetime, topic, timestemp } = useLocation();

  const [questions, setquestion] = useState(useLocation().state.question);

  const user = useSelector(selectUser);
  const [hidestart, sethidestart] = useState(true);
  // console.log("question data", questions.length);
  const [response, setresponse] = useState(0);
  const [score, setscore] = useState(0);

  // useEffect(async () => {
  //   getQuest();
  // }, []);

  // const getQuest = async () => {
  //   const docRef = doc(db, "userInfo", user?.email, "question", qid);
  //   const docSnap = await getDoc(docRef);
  //   if (docSnap.exists()) {
  //     console.log(docSnap.data());
  //   }
  // };

  const computeanswer = (answer, correctanswer) => {
    console.log("I am in computefunction", answer, correctanswer);
    if (true) {
      setscore(1 + score);
      console.log("Score is", score);
    }
    setresponse(1 + response);
  };

  const playAgain = () => {
    sethidestart(true);
    setscore(0);
    setresponse(0);
  };

  return (
    <div className="quiz_page">
      {hidestart ? (
        <Form.Group
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          className="mb-3"
        >
          <Form.Label>Enter Your Name</Form.Label>
          <Form.Control
            style={{ width: "20%", margin: "20px", margin: "20px" }}
            // onChange={(e) => {
            //   setquestionlist({ ...questionlist, question: e.target.value });
            // }}
            type="text"
            placeholder="Enter Your Name"
          />
          <Button
            style={{ width: "100px", margin: "auto" }}
            variant="primary"
            type="submit"
            onClick={() => sethidestart(false)}
          >
            Start
          </Button>
        </Form.Group>
      ) : (
        <div
          className="question_print"
          style={{ display: "flex", flexDirection: "column" }}
        >
          {response < questions.length &&
            questions.map(
              (
                { question, Option1, Option2, Option3, Option4, answer },
                index
              ) => (
                <Quizz_screen
                  key={index}
                  inde={index}
                  ques={question}
                  option1={Option1}
                  option2={Option2}
                  option3={Option3}
                  option4={Option4}
                  correctanswer={answer}
                  selected={(answerselect) =>
                    computeanswer(answerselect, answer)
                  }
                />
              )
            )}
          {response === questions.length ? (
            <Result
              score={score}
              playagain={playAgain}
              lengthval={questions.length}
            />
          ) : null}
        </div>
      )}
    </div>
  );
}

export default QuizzPage;
