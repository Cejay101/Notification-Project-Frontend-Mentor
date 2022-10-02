'use strict'
// Declaring variables
const unread =document.querySelector('.not-num')
const markAll =document.querySelector('.sub-heading')
const unreadMessages =document.querySelectorAll('.unread')


//remember that the Queryselector all creats an array of all the elements with that seletor
unreadMessages.forEach((mes) => {
  mes.addEventListener("click", () => {
    mes.classList.remove("unread");
    const newMessage = document.querySelectorAll(".unread");
    unread.innerText = newMessage.length;
  });
});
markAll.addEventListener("click", () => {
  unreadMessages.forEach((mes) => mes.classList.remove("unread"));
  const newMessage = document.querySelectorAll(".unread");
  unread.innerText = newMessage.length;
});
