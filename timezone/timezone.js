const date = new Date();

console.log(date);

const day = date.getDay();

console.log(day + " day");
let jo=    date.toLocaleTimeString("en-US" ,{
    hour12: false,
    timeZone: "Asia/Amman" 
});
  console.log(jo)


  let start = "08:00:00"; //start time 
let end = "23:59:00"; //end time 

switch (day) {
  case 0: //sunday
    if (jo>= start && jo <= end) {
      var validation = true;
     
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log("sunday");
    break;

  case 1: //monday
    if (jo >= start && jo <= end) {
      var validation = true;
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log("monday");
    break;
  case 2: //tuesday
    if (jo >= start && jo <= end) {
      var validation = true;
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log("tuesday");
    break;

  case 3: //wednesday
    if (jo >= start && jo <= end) {
      var validation = true;
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log(wednesday);

    break;

  case 4: //thursday
    if (jo >=start && jo <= end) {
      var validation = true;
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log(thursday);
    break;
  case 5: //friday
    if (jo >= start && jo <= end) {
      var validation = true;
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log(friday);
    break;

  case 6: //saturday
    if (jo >= start && jo <= end) {
      var validation = true;
    } else {
      var validation = false;
    }
    console.log(validation);
    console.log(saturday);
    break;
}


// const tzone = date.getTimezoneOffset();
// console.log(tzone);
// const hour = date.getHours();
// const minutes = date.getMinutes();
// const hour = date.toJSON().slice(11, 13)
// const htomin = hour * 60;
// const minutes = date.toJSON().slice(14, 16)
// const minutesp =  JSON.parse(minutes)


// console.log(hour  + " hour");
// console.log(htomin  + " hour in min");
// console.log(minutes + " min");






// if (tzone < 0 && tzone != -180) {
//   var time = htomin + tzone + 180 ;
//   if(time<0){
//   var time =1440+ time; //for positive format
//    }

//   console.log("not jo less")
// } 
// else if (tzone => 0) {
//   var time = htomin + tzone + 180;
//   if(time<0){
//     var time =1440+ time;
   

//    };
//   console.log("not jo more")
// } 
// else {
//   var time = htomin;
//   console.log("jo")
// }
// console.log(time + " hour with timezone conv.");

// const sumtime = time + minutes;
// console.log(sumtime + " time with timezone conv.");


