const notificarBtn = document.querySelector('#notificar');

notificarBtn.addEventListener('click', () => {
    Notification
        .requestPermission()
        .then(resultado => {
            console.log(`El resultado es ${resultado}`);
        })
});

const verNoti = document.querySelector('#verNotificacion');
verNoti.addEventListener('click', () => {
    if(Notification.permission === 'granted') {
        const notificaion = new Notification('Noti', {
            icon: 'img/ccj.png',
            body: 'Algun texto extra'
        });

        notificaion.onclick = function() {
            window.open('google.com');
        }
    } else {
        console.log("huivgf")
    }

})