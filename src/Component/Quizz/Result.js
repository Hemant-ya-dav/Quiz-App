import React, { useState } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBCard, MDBCardBody, MDBIcon } from "mdbreact";
import QuizzCard from "../Helper/QuizCard/QuizzCard";
// import { motion } from "framer-motion";
// import LottieView from "lottie-react-native";

export const Result = () => {
  const [score, setScore] = useState(10);
  const [isOn, setIsOn] = React.useState(false);

  const toggleSwitch = () => setIsOn(!isOn);
  const state = {
    flipped1: false,
  }
  
  const handleFlipping = id => () => {
    const cardId = `flipped${id}`;
    this.setState({ [cardId]: !this.state[cardId] });
  }

  return (
    <div>
        <MDBContainer>
      <MDBRow between>
        <MDBCol style={{ minHeight: '26rem', maxWidth: "22rem" }}>
          <div flipped={this.state.flipped1} className="text-center h-100 w-100">
            <MDBCard className="face front">
              <div>
                <img className="card-img-top" src="https://mdbootstrap.com/img/Photos/Others/photo7.webp" alt="" />
              </div>
              <div className="mx-auto white" circle>
                <img src="https://mdbootstrap.com/img/Photos/Avatars/img%20(20).webp" alt="" className="rounded-circle" />
              </div>
              <MDBCardBody>
                <h4 className="font-weight-bold mb-3">Marie Johnson</h4>
                <p className="font-weight-bold blue-text">Web developer</p>
                <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                  <MDBIcon icon="redo" /> Click here to rotate
                </a>
              </MDBCardBody>
            </MDBCard>
            <MDBCard className="face back" style={{ height: "400px" }}>
              <MDBCardBody>
                <h4 className="font-weight-bold">About me</h4>
                <hr />
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Maxime quae, dolores dicta. Blanditiis rem amet repellat,
                  dolores nihil quae in mollitia asperiores ut rerum
                  repellendus, voluptatum eum, officia laudantium quaerat?
                </p>
                <hr />
                <ul className="list-inline py-2">
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg fb-ic">
                      <MDBIcon fab icon="facebook-f" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg tw-ic">
                      <MDBIcon fab icon="twitter" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg gplus-ic">
                      <MDBIcon fab icon="google-plus" />
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#!" className="p-2 fa-lg li-ic">
                      <MDBIcon fab icon="linkedin" />
                    </a>
                  </li>
                </ul>
                <a href="#!" className="rotate-btn text-dark" data-card="card-1" onClick={this.handleFlipping(1)}>
                  <MDBIcon icon="undo" /> Click here to rotate back
                </a>
              </MDBCardBody>
            </MDBCard>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
      {score > 5 ? <h1>Congratulations</h1> : <h1>Better Luck Next</h1>}
    </div>
  );
};
