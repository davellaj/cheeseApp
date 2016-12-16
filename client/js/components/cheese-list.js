import React from 'react';

const CheeseList = (props) => {
	const cheeses = props.cheeses.map((cheese, idx) => {
		return <li key={idx}>{cheese}</li>
	});
	
	return (
		<div>
			<ul>
				{cheeses}
			</ul>
		</div>
	)
}

export default CheeseList;