

function Card(props) {
    return <div className="card">
        {props.numShapes} {props.fill} {props.color} {props.shape}
    </div>

    
}

function SetCardGrid() {
    const [cards,updateCards] = React.useState(["loading..."])
    
    React.useEffect(() => {


        // newCards.push(<Card
        //             numShapes='3'
        //             fill='slated'
        //             color='red'
        //             shape='oval'
        //             />)
        // for (color in COLOR_ATTRIBUTES) {
        //     for (fill in FILL_ATTRIBUTES){

        //     }

        // }
        // updateCards(newCards)
        fetch('/api/cards')
        .then(response => response.json())
        .then((data) => {
          const cardlist = [];

          for (const card of data) {
            const cardId = card.numShapes+card.color[0]+card.fill[0]+card.fill[1]+card.shape[0]+card.shape[1];
            console.log(card)
            cardlist.push(<Card
                            key={cardId}
                            numShapes={card.numShapes}
                            fill={card.fill}
                            color={card.color}
                            shape={card.shape}
                            />)
    
          }
          updateCards(cardlist)
        })
      }, [])

    return (
        <div id="cards">
            {cards}
        </div>
    )
}

ReactDOM.render(
    <SetCardGrid />,
    document.getElementById('app')
  );