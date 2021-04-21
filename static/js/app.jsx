function Card(props) {

    const shapes = [];

    for (let i = 0;  i < parseInt(props.numShapes); i++) {
        // Oval, Diamond, and Squiggle from shapes.jsx
        if (props.shape === "Oval") {
            shapes.push(<Oval
                        key={i}
                        fill={props.fill}
                        color={props.color}>
                        </Oval>);
        } else if (props.shape === "Diamond") {
            shapes.push(<Diamond
                        key={i}
                        fill={props.fill}
                        color={props.color}>
                        </Diamond>);
        } else if (props.shape == "Squiggle") {
            shapes.push(<Squiggle
                        key={i}
                        fill={props.fill}
                        color={props.color}>
                        </Squiggle>);
        } 
    }
    return <div className={`card ${props.isSelected ? 'selected': ''}`} 
                id={props.id} 
                onClick={props.onClick}>
                {shapes}
            </div>

    
}

function SetCardGrid() {
    const [cards,updateCards] = React.useState(["loading..."]);
    const [cardsInPlay, updateCardsInPlay] = React.useState([]);
    const [selectedCards, updateSelectedCards] = React.useState([]);

    const playing = !(cardsInPlay.length === 0);

    function dealCards (evt) {
        const cardsToDeal = cards.slice(69);
        updateCardsInPlay(cardsToDeal);
        updateCards(cards.slice(0, 69))
    }


    function addExtraCard(evt) {
        if (cards.length>0){
        updateCardsInPlay([...cardsInPlay, cards[cards.length - 1]])
        updateCards(cards.slice(0, cards.length - 1))
        } else {
            alert("YOU WIN!!!!!! 🎆")
        }
    }

    function validateBoard(evt) {
        let needCard = true
        loop1:
        for (let i = 0;  i < cardsInPlay.length; i++ ){
            for (let j = i+1; j < cardsInPlay.length; j++){
                for (let k = j+1; k < cardsInPlay.length; k++){
                    const potentialSet =[cardsInPlay[i],cardsInPlay[j],cardsInPlay[k]];
                    if (checkSet(potentialSet)){
                        needCard = false
                        console.log(potentialSet, 'BREAK')
                        break loop1;
                    }
                }
            }
        }
        
        if (needCard) {
        addExtraCard()
        } else {
            alert("Really? 🤨 You don\'t need a card")
        }
    }

    function selectCard (evt, card) {
        const selected = [...selectedCards, card]
        updateSelectedCards(selected);
        if (selected.length == 3) {
            if (checkSet(selected)){
                setTimeout(()=> {removeValidSet(selected);},500)
            } else {
            setTimeout(()=> {
                updateSelectedCards([]);

            }, 1000)
        }
        }
    }

    function unselectCard(evt, card) {
        
        const remainingSelectedCards = [];
        for (const selectedCard of selectedCards) {
            if (selectedCard != card) {
                remainingSelectedCards.push(selectedCard);
            }
        }
        updateSelectedCards(remainingSelectedCards);
    }


    function checkSet(selected) {
        const attrs = ['numShapes', 'fill', 'color', 'shape'];
        if (new Set(selected).size < 3){
            return false
        }
        for (const attr of attrs) {
            const cardAttrs = new Set([selected[0][attr],selected[1][attr],selected[2][attr]]);

            if (cardAttrs.size != 1 && cardAttrs.size != 3){
                return false
            }
        }
        return true
    }


    function removeValidSet(selected) {
        const replacementCards = [];
        const numNewCards = 12 - cardsInPlay.length + 3
        const newCards = cards.slice(cards.length-numNewCards);
        for (const card of cardsInPlay) {
            if (selected.includes(card)){
                if (newCards.length > 0){
                replacementCards.push(newCards.pop())
                }
            } else {
                replacementCards.push(card)
            }
        }
        updateCards(cards.slice(0, cards.length-numNewCards));
        updateCardsInPlay(replacementCards);
        updateSelectedCards([]);
    }
    

    React.useEffect(() => {
        fetch('/api/cards')
        .then(response => response.json())
        .then((data) => updateCards(data))
      }, [])


    if (!playing) {
        return <React.Fragment>
                <button onClick={dealCards}>Deal</button>
                    <div id="cards">  
                        {/* <TestCard  /> */}
                        Click deal to start game...
                    </div>
                </React.Fragment>
    }
    return (<React.Fragment>
            {/* <button onClick={addExtraCard}>Add an additional card</button> */}
            <button onClick={validateBoard}>Check for existence of sets</button>
            <div id="cards">
                {/* SlatedPattern from shapes.jsx */}
                <SlatedPattern color="Red"></SlatedPattern> 
                <SlatedPattern color="Green"></SlatedPattern>
                <SlatedPattern  color="Purple"></SlatedPattern>
                {cardsInPlay.map(card => <Card
                            onClick={selectedCards.includes(card)? (evt) => unselectCard(evt, card):(evt) => selectCard(evt, card)}
                            isSelected={selectedCards.includes(card)}
                            key={card.cardId}
                            id={card.cardId}
                            numShapes={card.numShapes}
                            fill={card.fill}
                            color={card.color}
                            shape={card.shape}
                            />)}
            </div>
            </React.Fragment>
    )
}

ReactDOM.render(
    <SetCardGrid />,
    document.getElementById('app')
  );


 