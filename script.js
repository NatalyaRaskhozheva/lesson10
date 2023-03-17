const amount = parseInt(prompt('Скільки елементів масимву?'))

function newArr(amount) {
	arr = []
	const min = 1
	const max = 10000
	for (let i = 0; i < amount; i++) {
		const item = Math.floor(Math.random() * (max - min) + min)
		arr.push(item)
	}
	return arr
}
const createArr = newArr(amount)
document.write(`${createArr}<br>`)

const more1000 = createArr.filter(el => el > 1000)
document.write(`${more1000}<br>`)

let moreIndex1000 = createArr.reduce(
	(prevList, el, index) => {
		if (el > 1000)
			prevList.push(index)
		return prevList
	},
	[]
)
document.write(`${moreIndex1000}<br>`)

const moreElementFirst = createArr.filter(
	(el, index, baseArrRef) => el > baseArrRef[index - 1]
)
document.write(`${moreElementFirst}<br>`)

const MaxElement = Math.max(...createArr)
const MaxElementPercent = createArr.reduce(
	(prevList, el) => {
		el = Math.floor(el / MaxElement * 100)
		prevList.push(`${el}%`)
		return prevList
	},
	[]
)
document.write(`${MaxElementPercent}<br>`)

const numberOfChange = createArr.reduce(
	(prevNumber, el, index, arr) => {
		if (el !== arr[index - 1]) prevNumber++
		else prevNumber
		return prevNumber
	},
	0
)
document.write(`${numberOfChange}<br>`)

const lessOf1000 = createArr.reduce(
	(trueOrFalse, el) => {
		if (el < 1000) return trueOrFalse = 'True' //є
		return trueOrFalse
	},
	'False'
)
document.write(`${lessOf1000}<br>`)

const moreOf1000 = createArr.reduce(
	(trueOrFalse, el) => {
		if (el < 1000) return trueOrFalse = 'False'//не всі
		return trueOrFalse
	},
	'True'
)
document.write(`${moreOf1000}<br>`)

const numberPriceOf1000 = createArr.reduce(
	(numberPrice, el) => {
		if (el > 1000) numberPrice++
		return numberPrice
	},
	0
)
document.write(`${numberPriceOf1000} елементів більше 1000<br>`)

const sumOf1000 = createArr.reduce(
	(sum, el) => {
		if (el > 1000) sum += el
		return sum
	}
)
document.write(`${sumOf1000} сума елементів більше 1000<br>`)

const firstNumber1000 = createArr.find(
	el => el > 1000
)
document.write(`${firstNumber1000}<br>`)

const firstIndex1000 = createArr.findIndex(
	el => el > 1000
)
document.write(`${firstIndex1000}<br>`)

const lastNumber1000 = createArr.findLast(
	el => el > 1000
)
document.write(`${lastNumber1000}<br>`)

const lastIndex1000 = createArr.findLastIndex(
	el => el > 1000
)
document.write(`${lastIndex1000}<br>`)




