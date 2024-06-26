import Sun from '../assets/sun.svg'
import Water from '../assets/water.svg'

const quantityLabel = {
	1: 'peu',
	2: 'modéréments',
	3: 'beaucoup'
}

// React function that takes 2 props, scaleValue (1 to 3) and CareType (light or water)
function CareScale({ scaleValue, careType }) {
	const range = [1, 2, 3]
	const scaleType = 

	//care type es light use sun icon, else (water) use water icon
        careType === 'light' ? (
            <img src={Sun} alt='sun-icon' />
        ) : (
            <img src={Water} alt='water-icon' />
        )

	return (
		<div
		//onClick for the div rhar includes a mesage about how much water or light plants need, based on scaleVvalue and careType
			onClick={()=>
				alert(
					`Cette plante requiert 
					${quantityLabel[scaleValue]} 
					${careType ==='light' ? 'de lumière' : "d'arrosage"}`
				)
			}
		>
		{/* range.map() creates a span for each element in the range array (1, 2, 3). If scaleValue is greater than or equal to the current range element (rangeElem), it displays the corresponding icon (scaleType). If not, it returns null (nothing is rendered).  */}
			{range.map((rangeElem) =>
				scaleValue >= rangeElem ? (
					<span key={rangeElem.toString()}>{scaleType}</span>
				) : null
			)}
		</div>
	)
}

export default CareScale