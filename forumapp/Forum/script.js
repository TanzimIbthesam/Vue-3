const profile=document.querySelector('.icon');
    
    const navitems=document.querySelector('.navitems');
    const notifications =document.querySelector('.notifications');
    const notificationdropdown =document.querySelector('.notificationitems');

    profile.addEventListener('click',e=>{
        e.stopPropagation();
        console.log(navitems);
        // navitems.style="display:block";
        navitems.classList.toggle('hidden');
        
    })
notifications.addEventListener('click',e=>{
        e.stopPropagation();
        console.log(navitems);
        // navitems.style="display:block";
       notificationdropdown.classList.toggle('hidden');
        
    })