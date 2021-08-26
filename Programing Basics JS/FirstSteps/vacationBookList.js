function vacationBookList(input) {
    let pagesCount = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);
    let timeForOneBook = pagesCount / pagesPerHour;
    let hoursNeededPerDay = timeForOneBook / daysCount;
    console.log(hoursNeededPerDay);
}
vacationBookList(["212", "20", "2"]);