import React, { useState } from 'react'
import { motion } from "framer-motion";
// import LottieView from "lottie-react-native";

export const Result = () => {
    const [score, setScore] = useState(10);
    const [isOn, setIsOn] = React.useState(false);

    const toggleSwitch = () => setIsOn(!isOn);
    return (
        <div>{score > 5 ? <h1>Congratulations</h1>
            : <h1>Better Luck Next</h1>}</div>
    )
}



