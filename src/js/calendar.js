var date = document.getElementById("date"),
  day = document.getElementById("day"),
  month = document.getElementById("month"),
  year = document.getElementById("year"),
  days = [
    "星期日",
    "星期一",
    "星期二",
    "星期三",
    "星期四",
    "星期五",
    "星期六"
  ],
  months = [
    "一月",
    "二月",
    "三月",
    "四月",
    "五月",
    "六月",
    "七月",
    "八月",
    "九月",
    "十月",
    "十一月",
    "十二月"
  ],
  box = document.getElementById("box");

function update() {
    let now = new Date();
    date.innerText = now.getDate();
    day.innerText = days[now.getDay()];
    month.innerText = months[now.getMonth()];
    year.innerText = now.getFullYear();
}

setInterval(update, 1000);