const categoryButtons = document.querySelectorAll('.card-style__btn');

categoryButtons.forEach(btn => {
  btn.addEventListener('click', e => { 
    localStorage.setItem("category", e.target.dataset.category)
  });
});
 

 
