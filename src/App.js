import React, {useState} from 'react';
import './App.css';
import AddCard from './components/Card/AddCard';
import Card from './components/Card/Card';

function App() {

	const [cards, setCard] = useState([
		{
			title: 'Todo'
		}
	]);


	const addCard = (title) => {
		const newCard = [...cards, {title}];
		setCard(newCard);
		console.log('add card:' + title);
	}

  	return (
    	<div className="App">

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
					placeholder="Add new card" 
				/>

			</div>

    	</div>
  	);
}

export default App;
