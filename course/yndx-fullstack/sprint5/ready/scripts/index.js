// @todo: Темплейт карточки
const template = document.querySelector('#card-template').content;
const templateCard = template.querySelector('.card');

// @todo: DOM узлы
const list = document.querySelector('.places__list');

// @todo: Функция создания карточки
function createCard(item, removeItem) {
    const cardContent = templateCard.cloneNode(true);
    const name = item.name;
    const image = item.link;
    const imageContent = cardContent.querySelector('.card__image');
    const titleContent = cardContent.querySelector('.card__title');
    const removeIcon = cardContent.querySelector('.card__delete-button');

    imageContent.src = image;
    imageContent.alt = name;
    titleContent.textContent = name;

    removeIcon.addEventListener('click', () => {
        removeItem(cardContent);
    });

    return cardContent;
}

// @todo: Функция удаления карточки
function removeCard(item) {
    item.remove();
}

// @todo: Вывести карточки на страницу
initialCards.forEach((item) => {
    const cardReady = createCard(item, removeCard);
    list.append(cardReady);
})
