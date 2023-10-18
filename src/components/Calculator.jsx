import BeautifulScreen from './BeautifulScreen'
import NumberButton from './NumberButton'
import OperatorButton from './OperatorButton'
import EqualButton from './EqualButton'
import ItSOverNineThousand from './ItSOverNineThousand'
import { useState } from 'react'

/*
Représente le bouton égal de votre Calculator9000.
*/

function Calculator() {
    const [expression, setExpression] = useState('Calculator9000')
    const [disabled, setDisabled] = useState(false)

    const chooseNumber = (number) => {
        if (expression === 'Calculator9000') {
            setExpression(number)
        } else {
            setExpression(expression + number)
        }
    };

    const chooseOperator = (operator) => {
        setExpression(expression + operator)
    }

    const calculate = (expr) => {
        try {
            const chars = expr.split('')
    
            for (let i = 0; i < chars.length; i++) {
                if (chars[i] == '*' || chars[i] == '/') {
                    let operator = chars[i]
                    let firstNumber = chars[i - 1]
                    let secondNumber = chars[i + 1]
    
                    let j = 2
                    while (chars[i - j] in ['0','1','2','3','4','5','6','7','8','9']) {
                        firstNumber = chars[i - j] + firstNumber
                        j++
                    }
    
                    j = 2
                    while (chars[i + j] in ['0','1','2','3','4','5','6','7','8','9']) {
                        secondNumber += chars[i + j]
                        j++
                    }
    
                    let result = firstNumber + operator + secondNumber
    
                    if (operator == '*') {
                        result = firstNumber * secondNumber
                    } else if (operator == '/') {
                        result = firstNumber / secondNumber
                    }
    
                    expr = expr.replace(firstNumber + operator + secondNumber, result)
                    calculate(expr)
                }
            }
            if (!expr.includes('*') && !expr.includes('/')) {
                let finalResult = eval(expr)
                if (finalResult > 9000) {
                    setDisabled(true)
                }
                setExpression(finalResult)
            }
        } catch (error) {
            setExpression('Error')
        }
    }

    const clear = () => {
        setExpression('Calculator9000')
        setDisabled(false)
    }

    return (
        <div className="calculator-container">
            <BeautifulScreen result={expression} clear={clear}/>
            <div className="buttons">
                <NumberButton chooseNumber={chooseNumber}/>
                <OperatorButton chooseOperator={chooseOperator}/>
            </div>
            <EqualButton calculate={calculate} expression={expression} />
            <ItSOverNineThousand disabled={disabled}/>
        </div>
    )
}

export default Calculator