

function Card(props) {
    // {playing ? <button onClick={selectSet}
    const styles = `card ${props.color} ${props.isSelected ? 'selected': null}`
    return <div className={styles} 
                id={props.id} 
                onClick={props.onClick}>
                {props.numShapes} {props.fill} {props.shape}
            </div>

    
}

function SetCardGrid() {
    const [cards,updateCards] = React.useState(["loading..."]);
    const [cardsInPlay, updateCardsInPlay] = React.useState([]);
    const [selectedCards, updateSelectedCards] = React.useState([]);

    const playing = !(cardsInPlay.length === 0);

    function dealCards (evt) {
        const cardsToDeal = cards.slice(65);
        updateCardsInPlay(cardsToDeal);
        updateCards(cards.slice(0, 65))
    }


    function selectCard (evt, card) {
        const selected = [...selectedCards, card]
        updateSelectedCards(selected);
        if (selected.length == 3) {
            if (checkSet(selected)){
                removeValidSet()
            } 
            setTimeout(()=> {
                updateSelectedCards([]);

            }, 100)
        }

    }


    function checkSet(selected) {
        const attrs = ['numShapes', 'fill', 'color', 'shape'];

        for (const attr of attrs) {
            const cardAttrs = new Set([selected[0][attr],selected[1][attr],selected[2][attr]]);

            if (cardAttrs.size != 1 && cardAttrs.size != 3){
                return false
            }
        }
        return true
    }


    function removeValidSet() {
        const replacementCards = [];
        const newCards = cards.slice(cards.length-3);
        for (const card of cardsInPlay) {
            if (selectedCards.includes(card)){
                replacementCards.push(newCards.pop())

            } else {
                replacementCards.push(card)
            }
        }
        updateCards(cards.slice(0, cards.length-3));
        updateCardsInPlay(replacementCards);
    }
    
    // React.useEffect(() => {

    // }, [cardsInPlay])

    React.useEffect(() => {
        fetch('/api/cards')
        .then(response => response.json())
        .then((data) => updateCards(data))
      }, [])
    if (!playing) {
        return <React.Fragment>
                <button onClick={dealCards}>Deal</button>
                    <div id="cards">   
                        Click Deal to start game...
                    </div>
                </React.Fragment>
    }
    return (
            <div id="cards">
                {cardsInPlay.map(card => <Card
                            onClick={(evt) => selectCard(evt, card)}
                            isSelected={selectedCards.includes(card)}
                            key={card.cardId}
                            id={card.cardId}
                            numShapes={card.numShapes}
                            fill={card.fill}
                            color={card.color}
                            shape={card.shape}
                            />)}
            </div>
    )
}

ReactDOM.render(
    <SetCardGrid />,
    document.getElementById('app')
  );


 