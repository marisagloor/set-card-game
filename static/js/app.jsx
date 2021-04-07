const COLOR_ATTRIBUTES = ['Red', 'Green', 'Purple'];
const FILL_ATTRIBUTES = ['Solid', 'Slated', 'Empty'];
const NUMBER_ATTRIBUTES = [1,2,3];
const SHAPE_ATTRIBUTES = ['Diamond', 'Oval', 'Squiggle'];

function Card(props) {
    // return <div className="card">
    //     props.card
    // </div>

    return(
    <div className="card">
    <svg>
      <rect x={props.x} 
      y={props.y} 
      width={props.width} 
      height={props.height} 
      rx={props.rx} 
      ry={props.ry} 
      stroke="red" 
      fill={props.fill} 
      stroke-width="5"/>
    </svg>
    </div>)
}

function SetCardGrid() {
    const [cards,updateCards] = React.useState(["loading..."])
    const cards = [
        <Card
            key={1}
            x="20"
            y="90"
            width="130"
            height="50"
            rx="20"
            fill="transparent"
          />,
          <Card
            key={2}
            x="20"
            y="90"
            width="130"
            height="50"
            rx="20"
            fill="solid"
          />
    ]
    React.useEffect(() => {
        const newCards = []
        newCards.push(<Card
                key={1}
                x="20"
                y="90"
                width="130"
                height="50"
                rx="20"
              />)
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