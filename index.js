function iterateTroughtYears(year) {
    let counter = 0;
    let res = [];
    while (year <= new Date().getFullYear()) {
        for (let month = 0; month <= 11; month++) {
            if (new Date(year, month, 13).getDay() == 5) counter++;
        }
        res.push(counter)
        year++;
        counter = 0;
        console.log(year)
    }
    return res;
}

iterateTroughtYears(2019)
