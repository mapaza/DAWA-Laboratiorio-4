import React, { useState } from "react";
import ReactDOM from "react-dom";
import "../styles.css";

const Statistics = (props) => {
    if ( props.good ===0) {
		return (
			<div>
				<p><strong>No Feedback given </strong></p>
			</div>
		)
	} else{
	return (
		<div>
			<p>
                <strong>Good:</strong> {props.good}
            </p>
			<p>
                <strong>Neutral: </strong> {props.neutral}
            </p>
			<p>
                <strong>Bad: </strong> {props.bad}
            </p>
			<p>
                <strong>All: </strong> {props.all}
            </p>
			<p>
                <strong>Average: </strong> {props.average}
            </p>
			<p>
                <strong>Positive: </strong> {props.positive} %
            </p>
		</div>
	)
    }
};

export default Statistics;
