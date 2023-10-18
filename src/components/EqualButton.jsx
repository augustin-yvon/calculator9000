/* 
Représente le bouton égal de votre Calculator9000.
*/

function EqualButton({calculate, expression}) {
    return (
        <div className="equal" onClick={() => {calculate(expression)}}>=</div>
    )
}

export default EqualButton
  