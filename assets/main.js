document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.heart').addEventListener('click', async () => {

        var arr = [...new Array(Math.floor(Math.random() * 1000))];
        const newArr = arr.map(() => {
            const count = Math.floor(Math.random() * 10);
            if (count < 3) {
                return `<div class="animation__item1" style="top: ${Math.floor(Math.random() * 100)}%; left: ${Math.floor(Math.random() * 100)}%" > <p>Anh yêu em 💕</p> </div>`
            } else if (count < 6) {
                return `<div class="animation__item" style="top: ${Math.floor(Math.random() * 100)}%; left: ${Math.floor(Math.random() * 100)}%" > <p>Anh yêu em rất rất nhiều 🥰</p> </div>`
            }
            return `<div class="animation__item2" style="top: ${Math.floor(Math.random() * 100)}%; left: ${Math.floor(Math.random() * 100)}%" > <p>Thương em và nhớ em rất nhiều 😘</p> </div>`
        }).join('');

        document.querySelector('#animation').innerHTML = newArr;

        setTimeout(() => document.querySelector('#animation').innerHTML = "", 5000)
    })
})