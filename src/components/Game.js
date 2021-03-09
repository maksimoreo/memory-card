import { useState } from 'react';
import _ from 'lodash';
import Card from './Card';
import '../styles/Game.css';

function generateIds(numberOfCards) {
    const maxId = Math.pow(2, Math.ceil(Math.log2(numberOfCards)));
    return _.shuffle(_.range(0, maxId)).slice(0, numberOfCards);
}

export default function Game(props) {
    const [score, setScore] = useState(0);
    const [highscore, setHighscore] = useState(0);
    const [cards, setCards] = useState(generateIds(props.numberOfCards));
    const [clickedCards, setClickedCards] = useState([]);

    const restart = () => {
        setScore(0);
        setCards(generateIds(props.numberOfCards));
    };

    const handleCardClick = (id) => {
        if (clickedCards.includes(id)) {
            setHighscore(Math.max(score, highscore));
            setScore(0);
            setClickedCards([]);

            // TODO: Lose
            restart();
        } else {
            setClickedCards(clickedCards.concat(id));
            setScore(score + 1);

            if (clickedCards.length === cards.length) {
                // TODO: Win
                restart();
            }
        }

        setCards(_.shuffle(cards));
    };

    return (
        <div>
            <p className="score-text">Score: {score}</p>
            <p className="highscore-text">Highscore: {highscore}</p>
            <div className="cards-container">
                {cards.map((cardID) => (
                    <Card
                        key={cardID}
                        id={cardID}
                        maxId={props.numberOfCards - 1}
                        onClick={handleCardClick}
                    />
                ))}
            </div>
        </div>
    );
}
