const wrapper = document.querySelector('.sliderWrapper')
const menuItem = document.querySelectorAll(".menuItem")

menuItem.forEach((Item, index) => {
    Item.addEventListener("click", () => {
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    })
})