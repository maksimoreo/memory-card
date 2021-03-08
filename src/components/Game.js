import { useState } from 'react';
import _ from 'lodash';
import Card from './Card';

export default function Game(props) {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [cards, setCards] = useState(_.shuffle(_.range(props.numberOfCards)));
    const [clickedCards, setClickedCards] = useState([]);

    const handleCardClick = (id) => {
        if (clickedCards.includes(id)) {
            setHighscore(Math.max(score, highscore));
            setScore(0);
            setClickedCards([]);

            // TODO: Lose
        } else {
            setClickedCards(clickedCards.concat(id));
            setScore(score + 1);

            if (clickedCards.length === cards.length) {
                // TODO: Win
            }
        }

        setCards(_.shuffle(cards));
    };

    return (
        <div>
            <h1>Memory Game</h1>
            <p>Score: {score}</p>
            <p>Highscore: {highscore}</p>
            <div>
                {cards.map((cardID) => (
                    <Card key={cardID} id={cardID} onClick={handleCardClick} />
                ))}
            </div>
        </div>
    );
}
