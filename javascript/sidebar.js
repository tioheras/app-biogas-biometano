document.addEventListener("DOMContentLoaded", function() {
    const contentArea = document.getElementById('content-area');

    const routes = {
        'home-link': '<h1>Home</h1><p>Bem-vindo à página inicial!</p>',
        'dashboards-link': '<h1>Dashboards</h1><p>Aqui estão os seus dashboards.</p>',
        'lab-link': '<h1>Laboratório</h1><p>Bem-vindo ao laboratório.</p>',
        'electricity-link': '<h1>Eletricidade</h1><p>Informações sobre eletricidade.</p>',
        'settings-link': '<h1>Configurações</h1><p>Ajuste suas configurações aqui.</p>'
    };

    document.querySelectorAll('nav .item-menu a').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const route = routes[this.id];
            if (route) {
                contentArea.innerHTML = route;
            } else {
                contentArea.innerHTML = '<h1>Página não encontrada</h1>';
            }
        });
    });
});