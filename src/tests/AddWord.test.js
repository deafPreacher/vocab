import React from 'react';
import AddWord from '../components/AddWord';
import '@testing-library/jest-dom/extend-expect';
import { render, fireEvent } from '@testing-library/react';
import { prettyDOM } from '@testing-library/dom';

test('testing the AddWord component', () => {
	const positive = jest.fn();
	const positiveWrapper = (word) => positive();
	const negative = jest.fn();

	const component = render(
		<AddWord 
			handlePositive={ positiveWrapper }
			handleNegative={ negative }
			/>
	);

	// const positiveBtn = component.container.querySelector('.positive-btn');
	const negativeBtn = component.container.querySelector('.negative-btn');

	// fireEvent.click(positiveBtn);
	fireEvent.click(negativeBtn);

	// expect(positive.mock.calls).toHaveLength(1);
	expect(negative.mock.calls).toHaveLength(1);
});