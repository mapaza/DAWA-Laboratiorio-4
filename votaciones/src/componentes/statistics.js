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
			<Statistic text='Good' value={props.good} />
            <Statistic text='Neutral' value={props.neutral} />
            <Statistic text='Bad' value={props.bad} />
            <Statistic text='All' value={props.all} />
            <Statistic text='Average' value={props.average} />
            <Statistic text='Positive' value={props.positive} />

		</div>
	)
    }
};
const Statistic = (props) => {
	return (
		<div>
			<p>
                <strong>{props.text} :</strong> {props.value}
            </p>
		</div>
	)
    };

export default Statistics;
