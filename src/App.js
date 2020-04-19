import React, {useState} from 'react';
import './App.css';
import AddCard from './components/AddCard';
import Card from './components/Card';

function App() {

	const [cards, setCard] = useState([
		{
			title: 'card1'
		}
	]);


	const addCard = (title) => {
		const newCard = [...cards, {title}];
		setCard(newCard);
		console.log('add card:' + title);
	}

  	return (
    	<div>

			<div className="board">
				{
					cards.map((card, index) => (
					<Card 
						key={index} 
						card={card}
					/>))
				}

				<AddCard 
					addCard={addCard} 
					placeholder="add card" 
				/>

			</div>

    	</div>
  	);
}

export default App;
