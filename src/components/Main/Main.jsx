import Header from '../Header/Header';
import { useState, useEffect } from 'react';
import './main.css';
import useWindowSize from 'react-use/lib/useWindowSize';
import Confetti from 'react-confetti';
import { getRandomTeam } from '../../data';

export default function Main() {
  const { width, height } = useWindowSize();

  const [team, setTeam] = useState(getRandomTeam());
  const [selectedLetters, setSelectedLetters] = useState([]);
  const [wrongAttempts, setWrongAttempts] = useState(3);
  const [gameOver, setGameOver] = useState(false);
  const [hasWon, setHasWon] = useState(false);

  useEffect(() => {
    const teamLetters = team.split('').filter(letter => letter !== ' ');
    const hasWonGame = teamLetters.every(letter => selectedLetters.includes(letter));

    if (hasWonGame) {
      setHasWon(true);
      setGameOver(true);
    }
  }, [selectedLetters, team]);

  
  const handleSelect = (letter) => {
    if (gameOver) return;

    if (selectedLetters.includes(letter)) {
      return;
    }

    setSelectedLetters([...selectedLetters, letter]);

    if (!team.includes(letter)) {
      setWrongAttempts(prev => {
        const newAttempts = prev - 1;
        if (newAttempts === 0) {
          setGameOver(true);
        }
        return newAttempts;
      });
    }
  };

  const resetGame = () => {
    setTeam(getRandomTeam());
    setSelectedLetters([]);
    setWrongAttempts(3);
    setGameOver(false);
    setHasWon(false);
  };

  return (
    <main id="game-area">
      <Header />
      <div id="game-board">
        {hasWon && <Confetti width={width} height={height} />}
        <div className="team-name">
          {team.split('').map((letter, index) => (
            <span className={letter === ' ' ? 'letter space' : 'letter'} key={index}>
              {selectedLetters.includes(letter) || letter === ' ' ? letter : ''}
            </span>
          ))}
        </div>
        <div id="wrong-right">
          {gameOver ? (hasWon ? '🥇' : 'Game Over') : '❌'.repeat(wrongAttempts)}
        </div>
        <div id="letter-buttons">
          {'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('').map((letter, index) => (
            <button
              key={index}
              onClick={() => handleSelect(letter)}
              className={`letter-button ${selectedLetters.includes(letter) ? 'selected' : ''}`}
              disabled={gameOver}
            >
              {letter}
            </button>
          ))}
        </div>
        <button id="reset-button" onClick={resetGame}>Reset</button>
      </div>
    </main>
  );
}
