
function createCard(title, cName, views, monthsOld, duration, thumbnail){

    let v = viewsunitconvertor(views);

    let box = document.createElement("div");
    box.className = "box";

    box.innerHTML = `<div class="box-left">
                <img src="${thumbnail}" alt="Thumbnail">
                <span>${duration}</span>
            </div>
            <div class="box-right">
                <h4>${title}</h4>
                <div class="sub-headers">
                    <span>${cName}</span>
                    <ul>
                        <li>${v} views</li>
                        <li>${monthsOld} months ago</li>
                    </ul>
                </div>
            </div>`;

    document.querySelector(".container").append(box)

}

function viewsunitconvertor(v) {
    let s = v.toString();
    if (s.length <= 3) return s
    else if (s.length <= 6) return s.slice(0,-3)+"."+s.at(-3)+"K";
    else if (s.length <= 9) return s.slice(0,-6)+"."+s.at(-6)+"M";
    else if (s.length <= 12) return s.slice(0,-9)+"."+s.at(-9)+"B";
    else return s
}


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 560000, 7, "31:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Javascript | Sigma Web Dev video #2", "CodeWithHarry", 35764465, 7, "07:55", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Backend | Sigma Web Dev video #3", "CodeWithHarry", 6100, 7, "11:22", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Backend | Sigma Web Dev video #4", "CodeWithHarry", 500, 7, "09:10", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Backend | Sigma Web Dev video #5", "CodeWithHarry", 47840583, 7, "25:06", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");


createCard("Introduction to Backend | Sigma Web Dev video #2", "CodeWithHarry", 43464, 7, "07:02", "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw");