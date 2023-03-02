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
            return "Není to celý datum."
        }
    }
}


// cviceni 2
let formatDate = ({ day, month, year }) => {
    return (`${day}. ${month}. ${year}`);
}

// od Filipa
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
                    return celyCislo
                }
                return celyCislo + 2 * zbytek
            }
        }
    }
}




