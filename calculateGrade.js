// Calculate a student grade

// Average 70

// 0-59: F
// 60-69: D
// 70-79: C
// 80-89: B
// 90-100: A    

const marks = [90, 80, 100];

console.log(calculateGrade(marks));//

function calculateGrade(marks) {
    const average = calculateAverage(marks);/*Pure function inserted 
    here array recieved marks*/
    if(average < 60) return 'F';
    if(average < 70) return 'D';
    if(average < 80) return 'C';
    if(average < 90) return 'B';
    if(average < 100) return 'A';
}

function calculateAverage(array){
    let sum = 0;
    for (let value of array) //Array is a pure function that recieve marks later
        sum += value;// 90 + 80 + 100
    return sum / array.length;    
    //let average = sum / array.length;
    //return average;//return average and then throw the function inside the first
}