
// Shapes and Pattern Components:
// pattern found here https://svg-stripe-generator.web.app/
function SlatedPattern(props){
    return  <svg className="hide" >
            <defs>
                <pattern 
                id={`Slated-${props.color}${props.squiggle==true? "squiggle":''}`}  
                patternUnits="userSpaceOnUse" width={props.squiggle==true?"60":"10"} 
                height={props.squiggle==true?"45":"10"}
                patternTransform="rotate(0)">
                    <line x1="0" y="0" x2="0" y2={props.squiggle==true?"75":"20"} 
                    stroke={props.color == "purple" ? "darkslateblue": props.color} 
                    strokeWidth={props.squiggle==true?"60":"10"} />
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
        shapeFill = `url(#Slated-${props.color}squiggle)`;
    } else {
        shapeFill = props.fill === "Solid" ? props.color: "Transparent";
    }
    return     <svg width='100' height='50'
                    viewBox="100 150 600 290" >
                    <path className="st0" d="M416.31,402.25
                                        c0,0-91.75-48.85-169.42-10.49l-38.04,23.33
                                        c0,0-44.43,42.83-83.75-9.91
                                        c0,0-38.36-72.88,11.51-163.02
                                        c0,0,44.11-85.34,168.77-55.62l46.96,20.17
                                        c0,0,103.59,67.1,192.77,18.19l35.48-20.14
                                        c0,0,69.15-61.19,101.11,26.04C713.66,318.03,624.56,480.56,416.31,402.25z"
                                        stroke={props.color} 
                                        fill={shapeFill} 
                                        strokeWidth="25"/> 
                </svg>
          

    // return  <svg>
    //             <path class="st0" d="M416.31,402.25
    //             c0,0-91.75-48.85-169.42-10.49l-38.04,23.33
    //             c0,0-44.43,42.83-83.75-9.91
    //             c0,0-38.36-72.88,11.51-163.02
    //             c0,0,44.11-85.34,168.77-55.62l46.96,20.17c0,0,103.59,67.1,192.77,18.19l35.48-20.14
    //             c0,0,69.15-61.19,101.11,26.04C713.66,318.03,624.56,480.56,416.31,402.25z" stroke={props.color} 
    //     fill={shapeFill} 
    //     strokeWidth="4"/> 
    //             {/* <path d="M40,3 c-54,-20 -47,74 -16,39 c20,-24 22,31 66,-3 c25,-31 -8,-49 -17,-29 c-16,12 -19,3 -34,-7.4z"
    //                     stroke={props.color} 
    //                     fill={shapeFill} 
    //                     strokeWidth="4"/> */}
    //             {/* <path d="M 0 25,  
    //                     C 25 0, 37 0, 50 25 
    //                     S 75 50, 100 25"
    //                     stroke={props.color} 
    //                     fill={shapeFill} 
    //                     strokeWidth="4"/> */}
    //         </svg>
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
