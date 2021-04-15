

function Card(props) {
    const styles = `card ${props.color}`
    return <div className={styles}>
        {props.numShapes} {props.fill} {props.shape}
    </div>

    
}

function SetCardGrid() {
    const [cards,updateCards] = React.useState(["loading..."]);
    const [cardsInPlay, updateCardsInPlay] = React.useState(["Click deal to start game..."]);
    const [playing, updatePlaying] = React.useState(false)
    
    function dealCards (evt) {
        const dealtCards = [];
        const cardsToDeal = cards.slice(65);
        for (const card of cardsToDeal) {
            const cardId = card.numShapes+card.color[0]+card.fill[0]+card.fill[1]+card.shape[0]+card.shape[1];
            console.log(card)
            dealtCards.push(<Card
                            key={cardId}
                            numShapes={card.numShapes}
                            fill={card.fill}
                            color={card.color}
                            shape={card.shape}
                            />)
        }
    updateCardsInPlay(dealtCards);
    updatePlaying(true);
    updateCards(cards.slice(0, 65))
    }
    // React.useEffect(() => {

    // }, [cardsInPlay])

    React.useEffect(() => {
        fetch('/api/cards')
        .then(response => response.json())
        .then((data) => updateCards(data))
      }, [])

    return (
        <div>
        <div id="cards">
            {cardsInPlay}
        </div>
        {playing ? null: <button onClick={dealCards}>Deal</button>}
        
        </div>
    )
}

ReactDOM.render(
    <SetCardGrid />,
    document.getElementById('app')
  );


 