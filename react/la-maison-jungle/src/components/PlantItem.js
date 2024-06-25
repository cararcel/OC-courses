import CareScale from './CareScale'
import '../styles/PlantItem.css'

function PlantItem({ cover, name, water, light }) {
	return (
		<li className='lmj-plant-item' onClick={() => handleClick(name)}>
			<img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} />
			{name}
			<div>
				<CareScale careType='water' scaleValue={water} />
				<CareScale careType='light' scaleValue={light} />
			</div>
		</li>
	)
}

function handleClick(plantName) {
    console.log('✨ Ceci est un clic ✨')
}
export default PlantItem