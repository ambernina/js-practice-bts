import React from "react";
import Header from "./Header";
import Start from "./Start";
import ContentContainer from "./ContentContainer";

const AllLayout = () => {
	return (
		<>
			<Header />
			<div className="container text-center">
				<Start />
        <ContentContainer/>
			</div>
		</>
	);
};

export default AllLayout;
