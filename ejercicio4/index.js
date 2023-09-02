/*
Given a time in 12-hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
*/
function timeConversion(s) {
 const pm = [12,13,14,15,16,17,18,19,20,21,22,23, "12"];
    const am = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "00"];
    let hh = parseInt(s.slice(0,2));
    let mm = s.slice(2,5);
    let ss = s.slice(5,8);
    let format = s.slice(8,10);
    if(format === "PM"){
        hh = pm[hh];
    }
    if(format === "AM"){
      hh = am[hh];
    }
    return hh+mm+ss;
}
console.log(
    timeConversion("07:05:45PM")
);
