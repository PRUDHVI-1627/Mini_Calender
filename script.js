// ----------------------------------------
//  Mini Calendar — script.js
// ----------------------------------------

const weekDays = [
    "Sunday", "Monday", "Tuesday", "Wednesday",
    "Thursday", "Friday", "Saturday"
];

const allMonths = [
    "January", "February", "March", "April",
    "May", "June", "July", "August",
    "September", "October", "November", "December"
];

function renderDate() {
    const now = new Date();

    const dd    = String(now.getDate()).padStart(2, "0");
    const day   = weekDays[now.getDay()];
    const month = allMonths[now.getMonth()];
    const year  = now.getFullYear();

    document.getElementById("date").textContent  = dd;
    document.getElementById("day").textContent   = day;
    document.getElementById("month").textContent = month;
    document.getElementById("label-year").textContent = year;
}

// Render immediately, then refresh at midnight
renderDate();

function msUntilMidnight() {
    const now  = new Date();
    const next = new Date(now);
    next.setDate(now.getDate() + 1);
    next.setHours(0, 0, 0, 0);
    return next - now;
}

setTimeout(function tick() {
    renderDate();
    setTimeout(tick, 24 * 60 * 60 * 1000);
}, msUntilMidnight());