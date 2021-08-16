import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const Counter = props => {
	const [time, setTime] = useState(props.start);

	const counterInterval = () => {
		setInterval(() => {
			if (time <= 9) {
				setTime(time => time + 1);
			} else setTime(0);
		}, 1000 * props.delay);
	};

	useEffect(() => {
		counterInterval();
	}, []);

	const timeOn = () => {
		console.log(time);
		return time % 10;
	};
	return (
		<div className="counter-card">
			<span>{timeOn()}</span>
		</div>
	);
};

export default Counter;

Counter.propTypes = {
	delay: PropTypes.number,
	start: PropTypes.number,
	onTime: PropTypes.number
};
