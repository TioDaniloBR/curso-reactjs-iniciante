import React from "react"
import ReactDOM from "react-dom"
import "./styles.css"

function sum(a,b){
	return a+b;
}

function primeiroJSX(){
	return (
		<div className="teste">
		Danilo Silva - Iniciando no ReactJS
		<h3>Soma: {sum(15,25)}</h3>
		</div>
	)
}

const App = () => {
	return(
		<div className="App">
		{primeiroJSX()}
		</div>
		
	)
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)