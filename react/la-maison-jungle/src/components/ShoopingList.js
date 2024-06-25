import { plantList } from "../datas/plantList"

function ShoppingList() {
    const categories = plantList.reduce(
		(acc, plant) =>
        // Checks if acc (current accumulated array) already includes the category of the current plant.
        // If acc already includes plant.category, it returns acc unchanged (to keep the category unique).
        // If acc does not include plant.category, it concatenates (acc.concat) the plant.category to acc, thus adding the new category to the accumulated list.
			acc.includes(plant.category) ? acc : acc.concat(plant.category),
		[]
	)
    return (
        <div>
			<ul>
				{categories.map((cat) => (
					<li key={cat}>{cat}</li>
				))}
			</ul>
			<ul>
				{plantList.map((plant) => (
					<li key={plant.id}>{plant.name}</li>
				))}
			</ul>
		</div>
    )
}

export default ShoppingList