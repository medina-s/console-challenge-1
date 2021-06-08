// Write a function that takes in two dates, and returns the number of minutes passed between them.
 
// The function should return a string message if its arguments are not instances of the Date type.
 
// Note :
// There are 1440 minutes in a day and you will need the Date object. Start easy and check the minutes between two (2) sequential days.
// Start by writing out what tools you have learned that you can apply to this challenge

function getTime (date1, date2){
    let newDate1 = new Date(date1);
    let newDate2 = new Date(date2);

    if (newDate1 instanceof Date && newDate2 instanceof Date) {
        let timeDifference = newDate2.getTime() - newDate1.getTime();
        let diffMinutes = timeDifference/60000
        return diffMinutes;
    } else {
        console.log(`Those ${date1} and ${date2} are not instances of Date type`)
    }
}

console.log(getTime("2021-06-01", "2021-06-02"));