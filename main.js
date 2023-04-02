// cviceni 1
// DD.MM.YYYY
let parseDate = (date) => {
    if (date.length > 10) {
        return "Není to datum."
    } else {
        if (date.length == 10) {
            return {
                day: Number(date.slice(0, 2)),
                month: Number(date.slice(3, 5)),
                year: Number(date.slice(-4))
            }
        } else {
            if (date.split(0)) {
                return {
                    day: Number(date.slice(0, 2)),
                    month: Number(date.slice(3, 5)),
                    year: Number(date.slice(-4))
                }
            }
            
        }
    }
}


// cviceni 2
let formatDate1 = ({ day, month, year }) => {
    return (`${day}. ${month}. ${year}`);
}

// cviceni 2 padStart
let formatDate2 = (datum) => {
    den = String(datum.day)
    mesic = String(datum.month)
    rok = String(datum.year)

    console.log(den.padStart(2, 0) + ". " + mesic.padStart(2, 0) + ". " + rok.padStart(2, 0))
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
                    //return celyCislo
                    return celyCislo + 1
                }
                //return celyCislo + 2 * zbytek
                return celyCislo + 2 * zbytek - 1
            }
        }
    }
}




