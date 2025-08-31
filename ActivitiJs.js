let Month = Number(window.prompt("Enter the Month: "));
let Day = Number(window.prompt("Enter the Day: "));
let Year = Number(window.prompt("Enter the Year: "));
                   //0         //1        //2     //3     //4    //5      //6    //7          //8          //9        /10         //11                        
let newMonth = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

let br = "<br>"
let LeapYears = null;

if((Year % 4 === 0 && Year % 100 !== 0) || (Year % 400 === 0)){
    LeapYears = true;
}else{
    LeapYears = false;
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

            if((Day <= 0 || Day > 30) && (Month > newMonth.length || Month < 0) && Year > 2025){
                document.writeln("Invalid Day, Month, and Year");
            }else if((Day <= 0 || Day > 30) && Month > newMonth.length){
                document.writeln("Invalid Month and Day");
            }else if((Day <= 0 || Day > 30) && Year > 2025){
                document.writeln("Invalid Day and Year")
            }else if(Month > newMonth.length){
                document.writeln("Invalid month")
            }else if(Year > 2025){
                document.writeln("Invalid Year");
            }else{
                document.writeln("Invalid Day")
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
        if(Day > 0 && Day <= 31 && Year <= 2025){
            document.writeln(`Month: ${newMonth[Month-1]} ${br}`);
            document.writeln(`Day: ${Day} ${br}`);
            document.writeln(`Year: ${Year} ${br}`); 
            document.writeln(`The Date today is ${newMonth[Month-1]} ${Day}, ${Year}`);
        }else{

            if((Day <= 0 || Day > 31) && (Month > newMonth.length || Month < 0) && Year > 2025){
                document.writeln("Invalid Day, Month, and Year");
            }else if((Day <= 0 || Day > 31) && Month > newMonth.length){
                document.writeln("Invalid Month and Day");
            }else if((Day <= 0 || Day > 31) && Year > 2025){
                document.writeln("Invalid Day and Year")
            }else if(Month > newMonth.length){
                document.writeln("Invalid month")
            }else if(Year > 2025){
                document.writeln("Invalid Year");
            }else{
                document.writeln("Invalid Day")
            }
        }
        break;

    case "February":
        if(LeapYears && (Day <= 29 && Year <= 2025)){
            document.writeln(`Month: ${newMonth[Month-1]} ${br}`);
            document.writeln(`Day: ${Day} ${br}`);
            document.writeln(`Year: ${Year} ${br}`); 
            document.writeln(`The Date today is ${newMonth[Month-1]} ${Day}, ${Year}`);
        }else if(Day <= 28 && Year <= 2025){
            document.writeln(`Month: ${newMonth[Month-1]} ${br}`);
            document.writeln(`Day: ${Day} ${br}`);
            document.writeln(`Year: ${Year} ${br}`); 
            document.writeln(`The Date today is ${newMonth[Month-1]} ${Day}, ${Year}`);
        }else{
            if(!LeapYears && (Day <= 0 || Day > 28) && (Month > newMonth.length || Month < 0) && Year > 2025){
                document.writeln("Invalid Day, Month, and Year");
            }else if((Day <= 0 || Day > 28) && Month > newMonth.length){
                document.writeln("Invalid Month and Day");
            }else if((Day <= 0 || Day > 28) && (Year > 2025 || !LeapYears)){
                document.writeln("Invalid Day and Not a LeapYear")
            }else if(Month > newMonth.length){
                document.writeln("Invalid month")
            }else if(Year > 2025 || !LeapYears){
                document.writeln("Not a LeapYear");
            }else{
                document.writeln("Invalid Day")
            }
        }
        break;

    default:
        if((Month > newMonth.length && Day > 30) && Year > 2025 ){
            document.writeln("Invalid Day, Month, and Year");
        }else if(Month > newMonth.length && Day > 30){
            document.writeln("Invalid month and Day");
        }else if(Month > newMonth.length && Year > 2025){
            document.writeln("Invalid Month and Year")
        }else if(Month > newMonth.length){
            document.writeln("Invalid Month");
        }else{
            document.writeln("Invalid Day");
        }

}