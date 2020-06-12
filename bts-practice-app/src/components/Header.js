import React from "react";

const Header = () => {
	return (
		<div className="container" style={{ margin: "25px" }}>
			<div className="page-header text-center">
				<h1>
					Hey there{" "}
					<span role="img" aria-label="wave">
						&#9996;
					</span>
				</h1>
			</div>
		</div>
	);
};

export default Header;
