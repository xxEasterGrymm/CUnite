var sidebar = document.getElementById('sidebar');

sidebar.addEventListener('click',()=>{
    document.getElementsByClassName('is-active')[0].parentNode.classList.add('is-active')
})

