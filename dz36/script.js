class Header {
    constructor(image, h1,blockId) {
        this.src = image;
        this.h1 = h1;
        this.blockId=blockId;
        this.out = "";
    }
    render() {
        const block=document.querySelector(`#${this.blockId}`)
        this.out = `
        <img src="${this.src}">
        <h1>${this.h1}</h1>
        `;
        block.innerHTML = this.out;
    }
}
const blocks = [
    new Header("img/img1.jpg", `Работа 24 часа в сутки, 7 дней <br>в неделю,
         365 дней в году`,"block1"),
    new Header("img/img2.jpg", "Нет географических границ","block2"),
    new Header("img/img3.jpg", "Ассортимент","block3"),
    new Header("img/img4.jpg", "Безопасность","block4"),
    new Header("img/img5.jpg", "Сокращение расходов на <br>аренду и персонал","block5"),
    new Header("img/img6.jpg", "Партнерские отношения","block6"),
    new Header("img/img7.jpg", "Покупатель всегда на связи","block7"),
    new Header("img/img8.jpg", "Комфортный выбор","block8"),
    new Header("img/img9.jpg", "Удобство оплаты","block9")

];
for (let i = 0; i < blocks.length; i++) {
    blocks[i].render();
}


