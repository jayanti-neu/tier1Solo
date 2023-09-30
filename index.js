let divTop = document.getElementById('topbtn');

window.onscroll = () => {
    if (document.documentElement.scrollTop > 200){
        divTop.style.display = 'block';
    } else {
        divTop.style.display = 'none';
    }
}

divTop.addEventListener('click', ()=>{
    window.scrollTo({top: 0, behavior: 'smooth'});

})