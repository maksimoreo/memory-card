import './styles/App.css';
import Game from './components/Game';

function App() {
    return (
        <div className="app">
            <h1 className="app-title">Memory Game</h1>
            <Game numberOfCards={10} />
        </div>
    );
}

export default App;
