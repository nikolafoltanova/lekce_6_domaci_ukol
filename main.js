// cviceni 1
// DD.MM.YYYY
let parseDate = (date) => {
    if (date.length > 10) {
		return "Není to datum."
	} else {
		if (date.length == 10) {
            return {
                day: Number(date.slice(0,2)),
                month: Number(date.slice(3,5)),
                year: Number(date.slice(-4))
            }
        } else {
            return "Není to celý datum."
        }
	}
}


// cviceni 2
let formatDate = ({day, month, year}) => {
    return (`${day}. ${month}. ${year}`);
}


// cviceni 3
let round = (number) => {
    celyCislo = Math.trunc(number)
    zbytek = number - celyCislo
    if (zbytek < 0.5) {
        return celyCislo
    } else {
        if (zbytek > 0.5) {
            return (number + 1) - zbytek
        } else {
            if (zbytek == 0.5) {
                if (celyCislo % 2 === 0) {
                    return celyCislo
                }
                return celyCislo + 2 * zbytek
            }
        }
    }
}




