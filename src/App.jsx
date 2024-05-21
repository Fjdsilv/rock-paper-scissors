import { useState, useEffect } from "react";
import rock from "./assets/images/rock.png";
import paper from "./assets/images/paper.png";
import scissors from "./assets/images/scissors.png";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const [userChoice, setUserChoice] = useState(0);
  const [computerChoice, setComputerChoice] = useState(0);
  const [rounds, setRounds] = useState(0);
  const [winner, setWinner] = useState(null);
  const [userScore, setUserScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const choices = [rock, paper, scissors];
  
  const handleClick = (value) => {
    setUserChoice(value);
    handleComputerChoiche();
  }

  const handleComputerChoiche = () => {
    const choice = Math.floor(Math.random() * 3);
    setComputerChoice(choice);
  } 

  const resetGame = () => {
    setUserChoice(0);
    setComputerChoice(0);
    setRounds(0);
    setWinner(null);
    setUserScore(0);
    setComputerScore(0);
  }

 useEffect(() => { 
    if (userChoice === 0 && computerChoice === 1) {
      setWinner("Computer");
      setComputerScore(computerScore + 1);
    }
    else if (userChoice === 0 && computerChoice === 2) {
      setWinner("User");
      setUserScore(userScore + 1);
    }
    else if (userChoice === 1 && computerChoice === 0) {
      setWinner("User");
      setUserScore(userScore + 1);
    }
    else if (userChoice === 1 && computerChoice === 2) {
      setWinner("Computer");
      setComputerScore(computerScore + 1);
    }
    else if (userChoice === 2 && computerChoice === 0) {
      setWinner("Computer");
      setComputerScore(computerScore + 1);
    }
    else if (userChoice === 2 && computerChoice === 1) {
      setWinner("User");
      setUserScore(userScore + 1);
    }
    else {
      setWinner("Draw");
    }
    if (winner) {
      setRounds(rounds + 1)
    }
  }, [userChoice, computerChoice])

  return (
    <>
      <Header />
      <main>
        <div className="container">
          <section className="score">
            <h2>User Score {userScore}</h2>
            <h2>Computer Score {computerScore}</h2>
          </section>
          <section className="img">
            <div>
              <img src={choices[userChoice]} alt=""  width="300px" height="200px"/>
            </div>
            <div>
              <img src={choices[computerChoice]} alt="" width="300px" height="200px"/>
            </div>
          </section>
          <section className="play">
            <button
              onClick={() => handleClick(0)}
            >
              Rock
            </button>
            <button
              onClick={() => handleClick(1)}
            >
              Paper
            </button>
            <button
              onClick={() => handleClick(2)}
            >
              Scissors
            </button>
          </section>
          <section className="result">
            <h3>Winner: {winner}</h3>
            <h3>Rounds: {rounds}</h3>
          </section>
          <section className="reset">
            <button
              onClick={resetGame}
            >
              Reset Game
            </button>
          </section>
        </div>
      </main>
      <Footer />
    </>
  )
}
export default App