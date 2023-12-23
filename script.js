const labels = document.querySelectorAll('.bar');

labels.forEach( (label) => {
    label.addEventListener('mouseenter', (e) => {
        e.target.classList.add('active');
    });
    label.addEventListener('mouseleave', (e) => {
        if(e.target.classList.contains('clicked')){
            e.target.classList.remove('clicked')
        }else{
            e.target.classList.remove('active')
        }        
    });
    label.addEventListener('click', (e) => {
        e.target.classList.add('clicked');
        for (const label of labels) {
            if(label !== e.target){
                label.classList.remove('active');
            }
        }
    })
})