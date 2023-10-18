/* 
Représente les touches numériques de votre Calculator9000. 
*/

function NumberButton({chooseNumber}) {
    return (
        <div className="key-container">
            <div className="numbers">
                <div className="number" onClick={() => {chooseNumber('7')}}>7</div>
                <div className="number" onClick={() => {chooseNumber('8')}}>8</div>
                <div className="number" onClick={() => {chooseNumber('9')}}>9</div>
                <div className="number" onClick={() => {chooseNumber('4')}}>4</div>
                <div className="number" onClick={() => {chooseNumber('5')}}>5</div>
                <div className="number" onClick={() => {chooseNumber('6')}}>6</div>
                <div className="number" onClick={() => {chooseNumber('1')}}>1</div>
                <div className="number" onClick={() => {chooseNumber('2')}}>2</div>
                <div className="number" onClick={() => {chooseNumber('3')}}>3</div>
            </div>
            <div className="zeroNdot">
                <div className="zero" onClick={() => {chooseNumber('0')}}>0</div>
                <div className="dot" onClick={() => {chooseNumber('.')}}>.</div>
            </div>
        </div>
    )
}

export default NumberButton
  