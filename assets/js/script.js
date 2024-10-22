AOS.init();

// Função para carregar serviços
async function carregarServicos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts'); // Altere para uma API de preferencia, no caso está sendo usado o jsonplaceholder
        if (!response.ok) throw new Error('Network response was not ok');
        const servicos = await response.json();
        const servicosLista = document.getElementById('servicos-lista');

        servicos.forEach(servico => {
            const div = document.createElement('div');
            div.className = 'col-md-4 mb-4';
            div.setAttribute('data-aos', 'fade-up');
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${servico.title}</h5>
                        <p class="card-text">${servico.body}</p>
                    </div>
                </div>
            `;
            servicosLista.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao carregar os serviços:', error);
        alert('Erro ao carregar serviços. Tente novamente mais tarde.');
    }
}

// Função para carregar depoimentos
async function carregarDepoimentos() {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/comments'); // Altere para uma API de preferencia, no caso está sendo usado o jsonplaceholder
        if (!response.ok) throw new Error('Network response was not ok');
        const depoimentos = await response.json();
        const depoimentosLista = document.getElementById('testemunhos-lista');

        depoimentos.forEach(depoimento => {
            const div = document.createElement('div');
            div.className = 'col-md-4 mb-4';
            div.setAttribute('data-aos', 'fade-up');
            div.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <p class="card-text">${depoimento.body}</p>
                        <footer class="blockquote-footer">${depoimento.email}</footer>
                    </div>
                </div>
            `;
            depoimentosLista.appendChild(div);
        });
    } catch (error) {
        console.error('Erro ao carregar os depoimentos:', error);
        alert('Erro ao carregar depoimentos. Tente novamente mais tarde.');
    }
}

// Função para enviar o formulário de contato
document.getElementById('form-contato').addEventListener('submit', async function(event) {
    event.preventDefault(); // Evita o envio padrão do formulário

    const nome = document.getElementById('nome').value.trim();
    const email = document.getElementById('email').value.trim();
    const telefone = document.getElementById('telefone').value.trim();
    const mensagem = document.getElementById('mensagem').value.trim();

    // Validação simples
    if (!nome || !email || !telefone || !mensagem) {
        alert('Por favor, preencha todos os campos.');
        return;
    }

    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                nome,
                email,
                telefone,
                mensagem
            })
        });

        if (response.ok) {
            alert('Mensagem enviada com sucesso!');
            document.getElementById('form-contato').reset(); // Limpa o formulário após o envio
        } else {
            alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
        }
    } catch (error) {
        console.error('Erro ao enviar mensagem:', error);
        alert('Erro ao enviar mensagem. Tente novamente mais tarde.');
    }
});

// Carrega serviços e depoimentos ao iniciar
carregarServicos();
carregarDepoimentos();
