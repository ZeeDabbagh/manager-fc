const langBtn = document.getElementById("langSwitch");

async function toggleLanguage() {
    console.log("hello1");
    const response = await fetch('/switchLanguage', {
        method: 'POST'
    
    });
    console.log("hello");

    //const response2 = await fetch('/');
    
    //document.location.replace('/');
    document.location.reload();

   
  }
  
langBtn.addEventListener('click', toggleLanguage)