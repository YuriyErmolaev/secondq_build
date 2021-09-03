const toggleButton = document.getElementById('toggle');

toggleButton.addEventListener('click', toggleHandler);

function toggleHandler( event ){
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab =>{
       tab.classList.toggle('none');
    });
}