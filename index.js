const batteryBatches = [4, 5, 3, 4, 4, 6, 5];

// Code your solution here

//create totalBatteries - holds the sum of above array 

const initialValue = 0;

const totalBatteries = batteryBatches.reduce(

    (previousValue,currentValue) => previousValue + currentValue, 
    initialValue
);

console.log(totalBatteries);

