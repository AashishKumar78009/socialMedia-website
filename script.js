// starts at 1:55:43 

// variables for message section
const messageNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector('.messages');
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');


//====================sidebar===========================
const menuItem = document.querySelectorAll('.menu-item');

//remove active class from all menu items
const changeActiveItems = () => {
   menuItems.forEach(item =>{
     item.classList.remove('active');
   })
}

menuItem.forEach(item =>{
  item.addEventListener('click', () => {
    changeActiveItem();
    item.classList.add('active');
    if(item.id != 'notifications'){
      document.querySelector('.notifications-popup').style.display = 'none';
    }else{
      document.querySelector('.notifications-popup').style.display = 'block';
      document.querySelector('#notifications .notification-count').style.display = 'none';
    }
  })
})


//==================== Messages =========================== 2:00:0

// serach-chat feature
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    console.log(val);
    message.forEach(chat => {
       let name = chat.querySelectorAll('h5').textContent.toLowerCase();
       if(name.indexOf(val) != -1){
          chat.style.display = 'flex';
       }else{
          chat.style.display = 'none';
       }
    })
}

// search chat
messageSearch.addEventListener('keyup', searchMessage);


// the below function highlights the messages menu item when clicked
messageNotification.addEventListener('click', () => {
  messages.style.boxShadow = '0 0 1rem var(--color-primary)';
  messageNotification.querySelector('.notification-count').style.display = 'none';
  setTimeout(() => {
    messages.style.boxShadow = 'none';
 }, 2000)
})

// resume at 2:009:00 
// serach bar functionality not working
