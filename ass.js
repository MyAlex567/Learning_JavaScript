let Month = Number(window.prompt("Enter the Month: "));
let Day = Number(window.prompt("Enter the Day: "));
let Year = Number(window.prompt("Enter the Year: "));
                   //0         //1        //2     //3     //4    //5      //6    //7          //8          //9        /10         //11                        
let newMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let br = "<br>"
let newYear = null;

if((Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0)){
    newYear = true;
}else{
    newYear = false;
}

switch(newMonth[Month-1]){
    case "April":
    case "June":
    case "September":
    case "November":
        if(Day > 0 && Day <= 30 && Year <= 2025){
            document.writeln(`Month: ${newMonth[Month-1]} ${br}`);
            document.writeln(`Day: ${Day} ${br}`);
            document.writeln(`Year: ${Year} ${br}`); 
            document.writeln(`The Date today is ${newMonth[Month-1]} ${Day}, ${Year}`);
        }else{

            if((Day <= 0 && Day > 30) && Month > newMonth.length && Year <= 2025){
                document.writeln("Invalid Day, Month, and Year");
            }else if((Day <= 0 && Day > 30) && Month > newMonth.length){
                document.writeln("Invalid Day and Month");
            }else if((Day <= 0 && Day > 30) && Year <= 2025){

            }else if(Month > newMonth.length){
                document.writeln("Invalid month")
            }else if(!newMonth){
                document.writeln("Invalid Year");
            }
        }
        break;

    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
        if(Day > 0 && Day <= 31 && newYear){
            document.writeln();
            document.writeln(`The Date today is ${newMonth[Month-1]} ${Day}, ${Year}`);
        }else{
            document.writeln("The Date is not valid");
        }
        break;

}
