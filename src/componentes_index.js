//renderizando objetos

import React from "react"
import ReactDOM from "react-dom"
import Button from "./button"
import "./styles.css"

function soma(a,b){
	alert (a+b);
}


const App = () =>{

	return(
		<div>
			Hello world!
			<Button onClick = { () => soma(10,17)} name="Danilo"/>
		</div>
	)
}

const rootElement = document.getElementById("root")
ReactDOM.render(<App />, rootElement)