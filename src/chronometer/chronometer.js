import React from "react";
import Buttons from "./components/buttons.js";


import "./chronometer.css"
import GetTimeUntitsFromCount from "./utils/time-units";

export const Chronometer = () => {
	
	return (
		<section>
			<GetTimeUntitsFromCount />
			<Buttons />
		</section>
	);
};

