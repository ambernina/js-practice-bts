import React from "react";

const Name = (props) => {
	return (
			<div id="name">
        <h5>What's your name?</h5>
        <input type="text" onChange={props}></input>
      </div>
	);
};

export default Name;
