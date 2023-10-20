import React, { useEffect, useState } from "react";
import "../styles/simple-counter.css"

const SimpleCounter = () => {
	const [count, setCount] = useState(0);
	const [timerOn, setTimerOn] = useState(false)
	
    useEffect(() => {
		let interval = null;

		if (timerOn) {
			interval = setInterval(() => {
				setCount(prev => prev + 10)
			}, 10);
		}
		else clearInterval(interval);

		return () => clearInterval(interval);
    }, [timerOn]);
	
	const days = (Math.floor((count / 86400000) % 365)).toString().padStart(3, '0');
    const hours = (Math.floor((count / 3600000) % 24)).toString().padStart(2, '0');
    const minutes = (Math.floor((count / 60000) % 60)).toString().padStart(2, '0');
    const seconds = (Math.floor(count/1000)%60).toString().padStart(2, '0');
	const miliSeconds = (Math.floor(count%1000)).toString().padStart(3, '0');

	return (
		<div>
			<div className="container d-flex justify-content-center">
				<span className="badge mainSection">
					<div >
						<span className="badge text-bg-secondary badgeIcon"><i className="fas fa-clock iconBadge"></i></span>
					</div>		
					<div className="badgeDiv">
						<h3 className="badgeDescription">Days </h3>
						<span className="badge text-bg-secondary">{days}</span>
					</div>
					<div className="badgeDiv">
						<h3 className="badgeDescription">Hours </h3>
						<span className="badge text-bg-secondary">{hours}</span>
					</div>
					<div className="badgeDiv">
						<h3 className="badgeDescription">Minutes </h3>
						<span className="badge text-bg-secondary">{minutes}</span>
					</div>
					<div className="badgeDiv">
						<h3 className="badgeDescription">Seconds </h3>
						<span className="badge text-bg-secondary">{seconds}</span>
					</div>
					<div className="badgeDiv">
						<h3 className="badgeDescription">miliSeconds </h3>
						<span className="badge text-bg-secondary">{miliSeconds}</span>
					</div>
				</span>
			</div>
			<div className="container d-flex justify-content-center buttonClass">
				<button type="button" className="btn btn-secondary ms-1" onClick={() => setTimerOn(true)}>Start/Resume counter</button>
				<button type="button" className="btn btn-secondary ms-1" onClick={() => setTimerOn(false)}>Stop counter</button>
				{/* button to reset counter only available if it is stoped */}
				{!timerOn && (
					<button type="button" className="btn btn-secondary ms-1" onClick={() => setCount(0)}>Reset counter</button>
				)}
			</div>
		</div>
	);
};

export default SimpleCounter;