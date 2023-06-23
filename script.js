let nowDate


let myDate={
	year:0,
	month:"a",
	day:"b",
	dayName:"c",
	hour:0,
	minutes:0,
	seconds:0,
}

setInterval(()=>{
document.getElementById("day").innerText=myDate.day
document.getElementById("dayName").innerText=myDate.dayName
document.getElementById("year").innerText=myDate.year
document.getElementById("month").innerText=myDate.month
document.getElementById("hour").innerText=myDate.hour
document.getElementById("minutes").innerText=myDate.minutes
document.getElementById("seconds").innerText=myDate.seconds
},100)

const updateDate=()=>{
	nowDate= new Date()
	myDate.dayName=nowDate.toLocaleString('en-us', {  weekday: 'short' })
	myDate.day=nowDate.getDate()
	myDate.year=nowDate.getFullYear()
	myDate.month=nowDate.toLocaleString('en-us', {  month: 'long' })
	myDate.hour=("0"+nowDate.getHours()).slice(-2)+":"
	myDate.minutes=("0"+nowDate.getMinutes()).slice(-2)+":"
	myDate.seconds=("0"+nowDate.getSeconds()).slice(-2)
}

setInterval(updateDate,100)