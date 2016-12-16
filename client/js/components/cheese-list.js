import React from 'react';
import {connect} from 'react-redux';
import * as actions from '../actions/cheese';

class CheeseList extends React.Component {


	componentDidMount() {
		this.props.dispatch(actions.fetchCheeses())
	}

	render() {

		console.log(this.props)

		const cheeses = this.props.state.cheeses.map((cheese, idx) => {
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
}

// export default CheeseList;
const mapStateToProps = (state, props) => ({
	state
})

export default connect(mapStateToProps)(CheeseList)