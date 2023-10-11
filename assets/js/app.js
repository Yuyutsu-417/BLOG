const dNone = document.querySelector(".view-more");
const showBtn = document.querySelector(".blog-load-btn");
let flag = 0 

showBtn.addEventListener("click", () => {
    dNone.classList.toggle("d-block")
    if (flag == 0) {
        showBtn.innerHTML = "Show Less"; flag++
    }
    else {
        showBtn.innerHTML = "Load More"; flag--
    }
})

