import { useState } from 'react'


const useConnectFive = (guess, solution) => {
    const [currentguess, setCurrentGuess] = useState(null)
    const [turn, setTurn] = useState(0)
    const [isCorrect, setIsCorrect] = useState(false)

    // keep track of attempts
    // submitted guess is right or wrong

    const handleGuess = (guess) => {

        console.log(guess)



    
    }

    return {turn, isCorrect, handleGuess}

}

export default useConnectFive