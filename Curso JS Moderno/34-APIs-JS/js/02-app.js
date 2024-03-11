document.addEventListener('DOMContentLoaded', () => {
    const observer = new IntersectionObserver(entries => {
        observer.observe(document.querySelector('.premium'));

        if(entries[0].isIntersecting) {
            console.log('Visible');
        }
    });
})