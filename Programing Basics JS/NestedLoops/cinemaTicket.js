function cinemaTicket(input) {
    let index = 0;
    let command = input[index];
    index++;
    let allTickets = 0;
    let studentTickets = 0;
    let standardTickets = 0;
    let kidTickets = 0;
    while (command !== "Finish") {
        let movieName = command;
        let freeSeats = Number(input[index]);
        index++;
        let ticketType = input[index];
        index++;
        let currentTicket = 0;
        while (ticketType !== "End") {


            switch (ticketType) {
                case "standard":
                    standardTickets++;
                    allTickets++;
                    break;
                case "student":
                    studentTickets++;
                    allTickets++;
                    break;
                case "kid":
                    kidTickets++;
                    allTickets++;
                    break;
            }
            currentTicket++;
            if (freeSeats <= currentTicket) {
                break;
            }
            ticketType = input[index];
            index++;
        }
        console.log(`${movieName} - ${((currentTicket / freeSeats) * 100).toFixed(2)}% full.`);

        command = input[index];
        index++



    }
    console.log(`Total tickets: ${allTickets}`);
    console.log(`${((studentTickets / allTickets) * 100).toFixed(2)}% student tickets.`);
    console.log(`${((standardTickets / allTickets) * 100).toFixed(2)}% standard tickets.`);
    console.log(`${((kidTickets / allTickets) * 100).toFixed(2)}% kids tickets.`);

}
cinemaTicket(["The Matrix",
    "20",
    "student",
    "standard",
    "kid",
    "kid",
    "student",
    "student",
    "standard",
    "student",
    "End",
    "The Green Mile",
    "17",
    "student",
    "standard",
    "standard",
    "student",
    "standard",
    "student",
    "End",
    "Amadeus",
    "3",
    "standard",
    "standard",
    "standard",
    "Finish"]);

