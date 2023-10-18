/* 
Représente l'écran d’affichage de votre Calculator9000. 
*/

function BeautifulScreen({result, clear}) {
    return (
        <div className="screen">
            <p className="screen-text">{result}</p>
            <div className="delete" onClick={() => {clear()}}>✖</div>
        </div>
    )
}

export default BeautifulScreen
