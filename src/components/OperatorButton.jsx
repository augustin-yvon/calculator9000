/* 
Représente les boutons d'opérations de votre Calculator9000. 
*/

function OperatorButton({chooseOperator}) {
    return (
        <div className="operators">
            <div className="operator" onClick={() => {chooseOperator('/')}}>/</div>
            <div className="operator" onClick={() => {chooseOperator('*')}}>*</div>
            <div className="operator" onClick={() => {chooseOperator('-')}}>-</div>
            <div className="operator" onClick={() => {chooseOperator('+')}}>+</div>
        </div>
    )
}

export default OperatorButton
  