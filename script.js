// starts at 1:55:43 


//sidebar
const menuItem = document.querySelectorAll('.menu-item');

//remove active class from all menu items
const changeActiveItems = () => {
   menuItems.forEach(item =>{
     item.classList.remove('active');
   })
}

menuItem.forEach(item =>{
  item.addEventListener('click', () => {
    changeActiveItems();
    item.classList.add('active');
    if(item.id != 'notifications'){
      document.querySelector('.notification-popup').style.display = 'none';
    }else{
      document.querySelector('.notification-popup').style.display = 'block';
    }
  })
})

// 