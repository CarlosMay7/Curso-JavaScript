const hoy = new Date();

moment.locale('es');
moment().format('MMM Do YYYY h:mm:ss a');

moment().format('LLLL', hoy);