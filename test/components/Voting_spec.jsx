import React from 'react';
import ReactDOM from 'react-dom';
import { 
	renderIntoDocument, 
	scryRenderedDOMComponentsWithTag, 
	Simulate } from 'react-addons-test-utils';
import { expect } from 'chai';
import Voting from '../../src/components/Voting';

describe('Voting', () => {
	it('should render a pair of buttons', () => {
		const component = renderIntoDocument(
			<Voting pair={['Trainspotting', '28 Days Later']} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');

		expect(buttons.length).to.equal(2);
		expect(buttons[0].textContent).to.equal('Trainspotting');
		expect(buttons[1].textContent).to.equal('28 Days Later');
	});

	it('should invoke a callback when clicked', () => {
		let votedWith;
		const vote = (entry) => votedWith = entry;
		const component = renderIntoDocument(
			<Voting 
				pair={['Trainspotting', '28 Days Later']}
				vote={vote} />
		);
		const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
		Simulate.click(buttons[0]);
		expect(votedWith).to.equal('Trainspotting');
	});
});