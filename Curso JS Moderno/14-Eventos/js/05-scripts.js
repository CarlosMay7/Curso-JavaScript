window.addEventListener('scroll', () => {
    const premium = document.querySelector('.premium');
    const ubi = premium.getBoundingClientRect();

    if(ubi.top < 784) {
        console.log('visibile');
    } else {
        console.log('Aún no');
    }
});