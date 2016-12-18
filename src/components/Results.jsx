import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Winner from './Winner';

export default class Results extends React.Component {
	constructor(props) {
    super(props);
    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);    
  }

  getVotes(entry) {
  	if (this.props.tally && this.props.tally.has(entry)) {
  		return this.props.tally.get(entry);
  	}
  	return 0;
  }

  getPair() {
  	return this.props.pair || [];
  }

	render() {
		return (
			this.props.winner ? 
			<Winner ref='winner' winner={this.props.winner} /> :
			<div className='results'>
				<div className='tally'>
					{this.getPair().map(entry => 
						<div key={entry} className='entry'>
							<h1>{entry}</h1>
							<div className='voteCount'>
								{this.getVotes(entry)}
							</div>
						</div>
					)}
				</div>
				<div className='management'>
					<button 
						ref='next'
						className='next'
						onClick={this.props.next}>
						Next
					</button>
				</div>		
			</div>
		);
	}
}