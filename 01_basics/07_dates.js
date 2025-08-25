const myDate=new Date()

console.log(myDate);
console.log(typeof myDate);
console.log(myDate.toString());
console.log(myDate.toLocaleString());
console.log(myDate.toDateString());

// formats
// YYYY-MM-DD note mm starts from 1 to 12
let myDate2= new Date("2025-08-25")
console.log(myDate2.toLocaleString());

//MM-DD-YYYY
let myDate3= new Date("08-25-2025")
console.log(myDate3.toLocaleString());

//(y,m,d) here m starts from 0 to 11
let myDate4= new Date(2025,7,25)
console.log(myDate4.toLocaleString());


//(m,d,y,h,m,s)
let myDate6 = new Date(2025,7,25,12,50,20)
console.log(myDate6.toLocaleString());


// timestamps in msec
console.log(Date.now());  // in ms
console.log(Math.floor(Date.now()/1000));  // in sec 10 digits from 1 jan 1970 to today

console.log(myDate.getTime());   // in ms


//extracting month , year , date and so on
let myDate_t=new Date(2025,7,25);
console.log(myDate_t.getDate());
console.log(myDate_t.getDay());     // 1 =monday , ... 7=sunday
console.log(myDate_t.getMonth()+1);   // months => 0=jan,....11=dec
console.log(myDate_t.getFullYear());
console.log(myDate_t.getTime());   // in msec
console.log(myDate_t.getHours());

console.log(`today the year is ${myDate.getFullYear()}`);




