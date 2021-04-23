import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { prettyDOM } from '@testing-library/dom';
import { render } from '@testing-library/react';
import WordExpanded from '../components/WordExpanded';

test('testing the WordExpanded component', () => {
	const mockWord = {
		id : 'rhetoric',
		results : [
			{
				lexicalEntries : [
					{
						word : 'rhetoric',
						etymologies: [],
						lexicalCategory : {
							id : 'verb',
							text : 'Verb'
						},
						entries : [
							{
								definitions : [
									'some word defined by plato'
								],
								examples : [
									{
										text : 'he used his philosophical knowledge to derive a rhetoric sentence'
									}
								],
								shortDefinitions : [
									'word derived by plato'
								],
								id : 1
							}
						]
					},
					{
						word : 'rhetoric',
						etymologies: [],
						lexicalCategory : {
							id : 'noun',
							text : 'Noun'
						},
						entries : [
							{
								definitions : [
									'a thing plato used to call when they appeared complex.'
								],
								examples : [
									{
										text : 'he used his philosophical knowledge to derive a rhetoric sentence'
									}
								],
								shortDefinitions : [
									'complex thing'
								],
								id : 1
							}
						]
					}
				]
			}
		]
	};

	const component = render(
		<WordExpanded
			word={mockWord}
		/>
	)

	// console.log(prettyDOM(component.container));

	mockWord.results.forEach(result => {
		result.lexicalEntries.forEach(lexicalEntry => {
			expect(component.container).toHaveTextContent(lexicalEntry.lexicalCategory.text);
			lexicalEntry.entries.forEach(entry => {
				// expect(component.container).toHaveTextContent(entry.definitions.join(''));
				entry.examples.forEach(example => {
					expect(component.container).toHaveTextContent(example.text);
				});
			});
		});
	})


	// expect(component.container).toHaveTextContent(mockWord.id);

})