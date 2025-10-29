// Registra o Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => {
                console.log('Service Worker registrado com sucesso em:', reg.scope);
            })
            .catch(err => {
                console.log('Falha no registro do Service Worker:', err);
            });
    });
}
