//JavascriptProbemSolvingAssignment

//First Problem
//Feet To Mile Converter

//feet variable declare 
let feet = 8560;
//calling feetToMile function
let mileResult = feetToMile(feet);
//show the return value
console.log(mileResult);
//feetToMile function
function feetToMile(feet) {
    //check value positive or not
    if (feet >= 0) {
        //1 mile=5280 feet
        let mile = feet / 5280;
        //fixed the value in two decimal places
        mile = mile.toFixed(2);
        //return the value
        return "Conversion of " + feet + " feet is " + mile + " mile.";
    }
    else {
        return "Feet value must be positive";
    }
}



//Second Problem
//woodCalculator for chair table bed

//delaring chair table bed variable
let chair = 5;
let table = 5;
let bed = 5;

//calling woodCalculator Function
let woodResult = woodCalculator(chair, table, bed);
//show the return value
console.log(woodResult);

//woodCalculator function
function woodCalculator(chair, table, bed) {
    //check all value positive or not
    if (chair >= 0 && table >= 0 && bed >= 0) {
        //1 Cubic Feet for chair,3 Cubic Feet for table ,5 Cubic Feet for bed
        let wood = ((chair * 1) + (table * 3) + (bed * 5));
        //return the value
        return "The total number of wood nedded for chair,table and bed is " + wood + " Cubic Feet.";
    }
    else {
        return "chair , table and bed value must be positive";
    }
}



//Third Problem
//brickCalculator for chair table and bed

//declare storery
let storey = 29;
//calling brickCalculator function
let brickResult = brickCalculator(storey);
//show the return value
console.log(brickResult);

//brickCalculator function
function brickCalculator(storey) {
    //check value positive or not
    if (storey >= 0) {
        //declare initial value
        let brick = 0;
        //constant variable declare 1000 brick per feet
        const perFeetBrick = 1000;
        //for 1-10 per storey is 15 feet ,for 11-20 per storey is 12 feet and more than 20 is 10 feet
        //10 or under 10 storey building
        if (storey <= 10) {
            brick = storey * 15 * perFeetBrick;
        }
        //20 or under 20 storey building
        else if (storey <= 20) {
            brick = ((10 * 15 * perFeetBrick) + ((storey - 10) * 12 * perFeetBrick));
        }
        //more than 20 storey building
        else {
            brick = ((10 * 15 * perFeetBrick) + (10 * 12 * perFeetBrick) + ((storey - 20) * 10 * perFeetBrick));
        }
        //return the value
        return "Brick needed for this " + storey + " storey building is " + brick + ".";
    }
    else {
        return "Storey value can't be negative"
    }
}



//fourth Problem
//find the smallest friend

//declare friends array
let friends=["tareq","jannat","kawser","kamruzzaman","rafi","aafi"];
//calling tinyFriend function
let tiny = tinyFriend(friends);
//show the return value
console.log(tiny);

//tinyFriend function
function tinyFriend(friends){
    //at first find out length of this array
    let len=friends.length;
    let tinyBuddy=friends[0];
    //check array size
    if(len>0){
        for(let i=0;i<len;i++){
            //at first compare with  length with prevoius declared length friend[0]
            if(tinyBuddy.length>=friends[i].length){
                //if length is smaller than the declared one then reset the tinyBuddy value
                if(tinyBuddy.length>friends[i].length){
                    tinyBuddy=friends[i];
                }
                //if length is same for all then compare the string to find the smaller one
                else if(tinyBuddy.length==friends[i].length){
                    if(tinyBuddy>friends[i]){
                        tinyBuddy=friends[i];
                    }
                }
            }
        }
        //return the value
        return "Tiny friend is "+tinyBuddy+".";
    }
    else{
        return "Array must contain names";
    }
}