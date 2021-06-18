function PotentialSet(props) {
    return <tr>
        <td className="card-row">
       {props.cards.map(card => <Card
                            onClick={(evt)=>{alert(card)}}
                            isRotated={false}
                            isSelected={false}
                            key={card.cardId}
                            id={card.cardId}
                            numShapes={card.numShapes}
                            fill={card.fill}
                            color={card.color}
                            shape={card.shape}
                            />)}
    </td>
    <td>
        {props.reason}
    </td>
    </tr>
}
function Rules(){
    return <React.Fragment>
        <div className="cards">
        <h3>New to the game or need a refresher on the rules?</h3>
        <p>To play deal 12 cards onto the board and test your pattern matching skills to see how quickly you can pair 3 cards in a valid set.  Each card is made up of for 4 different attributes (shape, number of shapes, color, shading).  A valid set is made of three cards that are either all the same or all different in the four individual attributes.  </p>
        <p>When you select 3 cards we will check if they form a valid set.  If they do, your set will be removed from the board and replaced with new cards.  If not your cards will be unselected.</p>
        <p>An extra card will be added if needed. So there will always be a valid set on the board.  Keep making sets until you go through the deck of 81 cards!</p>
        <h4>Some valid sets are shown below</h4>
        <table>
            <thead>
            <tr>
                <th>3 cards </th>
                <th>Reasons</th>
            </tr>
            </thead>
            <tbody>
            {/* Globally defined in sampleSets.js */}
            {VALIDSETS.map((validSet)=><PotentialSet
                                            key={validSet.id}
                                            cards={validSet.cards}
                                            reason={validSet.reason}/>)}
            </tbody>
        </table>
        </div>
    </React.Fragment> 
    
}

function App(){
    const [rotation, updateRotation] = React.useState(false)

    return <React.Fragment>
     {/* SlatedPattern from shapes.jsx */}
     <SlatedPattern color="Red" squiggle={false}></SlatedPattern> 
                <SlatedPattern color="Green" squiggle={false}></SlatedPattern>
                <SlatedPattern  color="Purple" squiggle={false}></SlatedPattern>
                <SlatedPattern color="Red" squiggle={true}></SlatedPattern> 
                <SlatedPattern color="Green" squiggle={true}></SlatedPattern>
                <SlatedPattern  color="Purple" squiggle={true}></SlatedPattern>
    <ReactRouterDOM.BrowserRouter>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <ReactRouterDOM.NavLink
          to="/"
          activeClassName="navlink-active"
          className="nav-link"
        >
          New Game
        </ReactRouterDOM.NavLink>
        <ReactRouterDOM.NavLink
          to="/rules"
          activeClassName="navlink-active"
          className="nav-link"
        >
          Rules
        </ReactRouterDOM.NavLink>
        <div className="custom-control custom-switch ml-auto">
            <input type="checkbox"
                    className="custom-control-input" 
                    id="rotationSwitch"
                    onChange={()=>{updateRotation(rotation != true)}}/>
            <label className="custom-control-label" htmlFor="rotationSwitch">card rotation</label>
        </div>
      </nav>
      

      <div >
        <ReactRouterDOM.Route exact path="/">
          <SetCardGrid 
            rotation={rotation}/>
        </ReactRouterDOM.Route>
        <ReactRouterDOM.Route exact path="/rules">
            <Rules />
        </ReactRouterDOM.Route>
      </div>
    </ReactRouterDOM.BrowserRouter>
    </React.Fragment>
}

ReactDOM.render(
    <App />,
    document.getElementById('app')
  );


 