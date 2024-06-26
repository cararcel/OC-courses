import { useState } from 'react'
import '../styles/Footer.css'


function Footer() {
	// initializes a state variable inputValue with an empty string. 
	//setInputValue is a function to update inputValue.
	const [inputValue, setInputValue] = useState('')

	//It takes an event object and update inputValue
	function handleInput(e) {
		setInputValue(e.target.value)
	}

	//handleBlur is a function that checks if inputValue contains an '@' character.
	//If inputValue does not contain '@', it shows an alert message warning the user that the input is not a valid email address.
	function handleBlur() {
		if (!inputValue.includes('@')) {
			alert("Attention, il n'y a pas d'@, ceci n'est pas une adresse valide 😥")
		}
	}

	return (
		<footer className='lmj-footer'>
			<div className='lmj-footer-elem'>
				Pour les passionné·e·s de plantes 🌿🌱🌵
			</div>
			<div className='lmj-footer-elem'>Laissez-nous votre mail :</div>
			<input
				placeholder='Entrez votre mail'
				onChange={handleInput}
				value={inputValue}
				onBlur={handleBlur}
			/>
		</footer>
	)
}

export default Footer