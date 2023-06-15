
document.querySelector('.bi-x-lg').style.display = 'none';
document.querySelector('.hamburger').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if(document.querySelector('.sidebar').classList.contains('sidebarGo')){
        document.querySelector('.bi-list').style.display = 'inline'
        document.querySelector('.bi-x-lg').style.display = 'none'
    }else{
        document.querySelector('.bi-x-lg').style.display = 'inline'
        setTimeout(() => {            
            document.querySelector('.bi-list').style.display = 'none'
        }, 00);
    }
})
