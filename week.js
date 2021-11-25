// Set the current day of the week to a variable, with 0 being Sunday and 6 being Saturday
const day = new Date().getDay();

switch (day) {
    case 0:
        console.log("It's Sunday, time to relax!");
        break;
    case 1:
        console.log("Happy Monday!");
        break;
    case 2:
        console.log("It's Tuesday. You got this!");
        break;
    case 3:
        console.log("Hump day already!");
        break;
    case 4:
        console.log("Just one more day 'til the weekend!");
        break;
    case 5:
        console.log("Happy Friday!");
        break;
    case 6:
        console.log("Have a wonderful Saturday!");
        break;
    default:
        console.log("Something went horribly wrong...");
}