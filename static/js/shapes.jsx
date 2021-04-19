
// Shapes and Pattern Components:
// pattern found here https://svg-stripe-generator.web.app/
function SlatedPattern(props){
    return  <svg className="hide" >
            <defs>
                <pattern 
                id={`Slated-${props.color}`}  
                patternUnits="userSpaceOnUse" width="10" height="10" 
                patternTransform="rotate(0)">
                    <line x1="0" y="0" x2="0" y2="20" 
                    stroke={props.color == "purple" ? "darkslateblue": props.color} 
                    strokeWidth="10" />
                </pattern>
            </defs>
            </svg>

}

function Diamond (props) {
    let shapeFill
    if (props.fill == "Slated") {
        // use pattern set from SlatedPattern
        shapeFill = `url(#Slated-${props.color})`;
    } else {
        shapeFill = props.fill === "Solid" ? props.color: "Transparent";
    }

    return  <svg>
                <polyline points="0,25 50,0 100,25 50,50 0,25" stroke={props.color} fill={shapeFill} strokeWidth="4"/>
            </svg>
}

function Squiggle (props) {
    let shapeFill

    if (props.fill == "Slated") {
        // use pattern set from SlatedPattern
        shapeFill = `url(#Slated-${props.color})`;
    } else {
        shapeFill = props.fill === "Solid" ? props.color: "Transparent";
    }
    return  <svg>
                <path d="M 0 25,  
                        C 25 0, 37 0, 50 25 
                        S 75 50, 100 25"
                        stroke={props.color} 
                        fill={shapeFill} 
                        strokeWidth="4"/>
            </svg>
}

function Oval(props) {
    let shapeFill
    if (props.fill == "Slated") {
        // use pattern set from SlatedPattern
        shapeFill = `url(#Slated-${props.color})`;
    } else {
        shapeFill = props.fill === "Solid" ? props.color: "Transparent";
    }

    return  <svg>
                <rect fill={shapeFill} width="100" 
                    height="50" rx="25" 
                    stroke={props.color} strokeWidth="4"/>
            </svg>
}
