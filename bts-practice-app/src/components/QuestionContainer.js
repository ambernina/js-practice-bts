import React, { useState } from "react";
import Name from "./Name";

const QuestionContainer = () => {
	const questions = [
		{ name: "What is your name?" },
    { age: "How old are you?" },
    { bts: "Do you know BTS?"},
    { bias: "So you know BTS! Do you have a bias?"},
	];

	const initialState = {
		currentIndex: 0,
		showFinished: false,
		answered: false,
		selectedOption: "",
		revealAnswer: ""
	};

	const [state, setState] = useState(initialState);

	const { currentIndex } = state;

	const handleChange = e => {
		e.preventDefault();

		if (currentIndex + 1 > questions.length) {
		}
	};

	return (
		<div id="questionContainer">
			<Name onChange={handleChange} />
		</div>
	);
};

export default QuestionContainer;
