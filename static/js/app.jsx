

function Card(props) {
    return <div className="card">
        {props.numShapes} {props.fill} {props.color} {props.shape}
    </div>

    
}

function SetCardGrid() {
    const [cards,updateCards] = React.useState(["loading..."])
    
    React.useEffect(() => {
        const newCards = []

        newCards.push(<Card
                    numShapes='3'
                    fill='slated'
                    color='red'
                    shape='oval'
                    />)
        // for (color in COLOR_ATTRIBUTES) {
        //     for (fill in FILL_ATTRIBUTES){

        //     }

        // }
        updateCards(newCards)
        // fetch('/cards.json')
        // .then(response => response.json())
        // .then((data) => {
        //   const cardlist = [];
        //   for (const card of data) {
        //     cardlist.push(<TradingCard
        //       key={card.name}
        //       name={card.name}
        //       skill={card.skill}
        //       imgUrl={card.imgUrl}
        //     />)
        //   }
        //   updateCards(cardlist)
        // })
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