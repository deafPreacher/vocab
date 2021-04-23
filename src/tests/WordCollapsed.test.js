import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import { render } from '@testing-library/react';
import WordCollapsed from '../components/WordCollapsed';

test('testing the WordCollapsed component', () => {
	const mockWord = {
		id : 'rhetoric',
		results : [
			{
				lexicalEntries : [
					{
						word : 'rhetoric',
						lexicalCategory : {
							id : 'verb',
							text : 'Verb'
						},
						entries : [
							{
								definitions : [
									{
										text : 'some word defined by plato'
									}
								],
								examples : [
									{
										text : 'he used his philosophical knowledge to derive a rhetoric sentence'
									}
								],
								shortDefinitions : [
									'word derived by plato'
								]
							}
						]
					},
					{
						word : 'rhetoric',
						lexicalCategory : {
							id : 'noun',
							text : 'Noun'
						},
						entries : [
							{
								definitions : [
									{
										text : 'a thing plato used to call when they appeared complex.'
									}
								],
								examples : [
									{
										text : 'he used his philosophical knowledge to derive a rhetoric sentence'
									}
								],
								shortDefinitions : [
									'complex thing'
								]
							}
						]
					}
				]
			}
		]
	};

	const component = render(
		<WordCollapsed
			word={mockWord}
		/>
	)

	console.log(prettyDOM(component.container));

	expect(component.container).toHaveTextContent(mockWord.id);

})