import React, { Component } from 'react';
import { Text } from 'react-native';
import { connect } from 'react-redux';
import { CardSection } from './Common';

class ListItem extends Component {
	render() {
		const { titleStyle } = styles;
		const { id, title, description } = this.props.library.item;
		const { selection } = this.props;

		return (
			<CardSection>
				<Text style={titleStyle}>{title}</Text>
			</CardSection>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		selection: state.selection
	};
};

const styles = {
	titleStyle: {
		fontSize: 18,
		paddingLeft: 15
	}
};

export default connect(mapStateToProps)(ListItem);
