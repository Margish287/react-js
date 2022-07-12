import React,{ useState } from 'react';
import {Link} from 'react-router-dom';

const Game = () => {
    const [total, setTotal] = useState(0);
    const [numClick, setNumClick] = useState(3)

    const generateRandomNum = () => {
        const random = Math.floor(Math.random()*10);
        setNumClick(numClick-1)
        setTotal(total+random);
    }

    const reset = () => {
        setTotal(0);
        setNumClick(3);
    }
    return (
        <div id='body' className='game-container body-dark'>
            <header>
                <Link className="icon-border header-title" to="/">MP</Link>
            </header>
            <h1 className='game-title'>Game</h1>
            <p className='game-desc'>Below given button is generating a random number from 1 to 10 when it is clicked. Now i want you to check your luck. You have 3 chance to click button and if total of those 3 number is greater than 15 you won otherwise you lose.</p>
            <h1 className='game-total'>{total}</h1>
            
            <div className='btn-center'>
                {numClick > 0 ? 
                    <button className='btn game-btn' onClick={generateRandomNum} >Get the random number</button> : 
                    <button className='hidden-btn'></button>
                }
                
                <button className='btn game-btn' onClick={reset}>restart the game</button>
            </div>

            <div className="game-result">
                <span><h2>Result :</h2></span>
                <h2 className='result' >
                    {numClick%3 === 0 ? total > 15 ? <div>You Won</div> : <div>You Lose</div> : <></> }
                </h2>
            </div>
        </div>
    );
}

export default Game;
