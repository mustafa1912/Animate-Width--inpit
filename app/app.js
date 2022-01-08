let index = document.querySelector('input'),
    width = document.querySelector('.w-75 span'),
    num = document.querySelector('.num');

index.addEventListener('keyup', () => {
    let count = index.value.length
        // width
    let countWidth = count * 5;
    width.style.width = `${countWidth}%`
        // contant num
    num.textContent = 20 - count
        // color num
    if (count == 20) {
        num.style.color = ('#dc3545')
    } else if (count >= 15 & count < 20) {
        num.style.color = ('#ffc107')
    } else {
        num.style.color = ('#0d6efd')
    }
})