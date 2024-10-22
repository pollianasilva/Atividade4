<div align="center">
<img alt="logomaisprati" title="logo" src="https://assespro-rs.org.br/wp-content/uploads/logo_azul.png " width="200vw"/>

![/](https://img.shields.io/badge/%2F-ff1493?style=for-the-badge) ![codifica](https://img.shields.io/badge/codifica-ffffff?style=for-the-badge) 

</div>

# Atividade 4 - Desenvolvendo LP Completa

Este projeto é uma **Landing Page** desenvolvida como parte da Atividade, que visa criar uma página moderna e interativa utilizando HTML, CSS, JavaScript e bibliotecas externas. O projeto é chamado **KiddyZone** e tem como foco promover o aprendizado de forma divertida para crianças, com uma interface amigável e intuitiva. 

DEPLOY: [KiddyZone](https://kiddyzone.netlify.app/)

### **Integração com API**
A página está conectada a uma **API externa (JSONPlaceholder)** para preencher os dados dinamicamente nas seções de **Serviços** e **Depoimentos**. Isso permite que essas informações sejam carregadas automaticamente na página, simulando dados reais.

## Tecnologias Utilizadas
- **HTML5**: Estrutura básica da página.
- **CSS3**: Estilização da página com uso de design responsivo.
- **JavaScript**: Adiciona interatividade e funcionalidades, como o consumo de APIs e sliders.
- **Bootstrap 5**: Framework CSS para facilitar a criação de layouts responsivos.
- **AOS (Animate On Scroll)**: Biblioteca para animação dos elementos conforme a rolagem da página.
- **Font Awesome/Bootstrap Icons**: Ícones para redes sociais e elementos visuais.
- **APIs (JSONPlaceholder)**: APIs simuladas para carregamento de serviços e depoimentos.

## Estrutura da Página

### 1. Header
O cabeçalho contém:
- O **logo** da empresa (um pinguim viking).
- Um **menu de navegação** com links que rolam suavemente para as seções "Sobre", "Serviços", "Testemunhos" e "Contato".
- O cabeçalho tem uma estilização moderna com cores vivas e texto centralizado.

### 2. Banner Principal
A página possui um **carrossel (slider)** com três imagens principais que destacam os valores da KiddyZone:
- "Aprenda Brincando"
- "Atividades Interativas"
- "Crescendo Juntos"
Cada slide inclui uma imagem e uma legenda para atrair a atenção do visitante. O carrossel é controlado através dos botões "Anterior" e "Próximo".

### 3. Seção Sobre Nós
Uma breve descrição da empresa é exibida centralizada para o usuário entender o propósito da KiddyZone, focando no aprendizado interativo e na diversão.

### 4. Seção Serviços
Os **serviços** da KiddyZone são carregados dinamicamente de uma API simulada (JSONPlaceholder) e exibidos em formato de **cartões**. Cada cartão contém o título e a descrição do serviço. Esta seção utiliza animações com AOS para dar mais dinamismo à página.

### 5. Seção Testemunhos
Depoimentos de clientes satisfeitos são carregados dinamicamente a partir da API simulada. Os depoimentos são exibidos como blocos de texto com a citação e o nome da pessoa que fez o comentário. A animação também é aplicada a esta seção.

### 6. Seção Contato
Um **formulário de contato** permite que os usuários enviem suas informações, como nome, email, telefone e uma mensagem personalizada. O formulário envia os dados para a API simulada através de um **request POST**. Após o envio, o formulário é resetado e o usuário recebe uma mensagem de sucesso.

### 7. Footer
O rodapé contém:
- Links para as redes sociais (Facebook, Instagram e Twitter), com ícones interativos.
- Links para "Termos de Uso" e "Política de Privacidade".
- Um texto de copyright.

## Funcionalidades
1. **Carrossel**: Um slider que exibe as imagens principais da página com navegação manual.
2. **Carregamento Dinâmico de Dados**: As seções de "Serviços" e "Testemunhos" utilizam JavaScript para consumir dados de uma API simulada e exibi-los dinamicamente.
3. **Envio de Formulário**: O formulário de contato valida os dados e os envia para a API simulada. Após o envio, o formulário é limpo e uma mensagem de sucesso é exibida.
4. **Animações**: Elementos da página são animados conforme o usuário rola a página, utilizando a biblioteca AOS.

## Como Executar o Projeto
1. Faça o download ou clone o repositório.
2. Abra o arquivo `index.html` em qualquer navegador para visualizar a página.
3. Certifique-se de que os arquivos de **CSS**, **JavaScript** e **imagens** estejam corretamente organizados na pasta `assets`.

## Links Externos Utilizados
- **Bootstrap 5**: Para o layout responsivo e componentes de interface.
- **Bootstrap Icons**: Ícones usados no rodapé.
- **AOS (Animate On Scroll)**: Para animações ao rolar a página.
- **JSONPlaceholder**: API simulada usada para carregar os serviços e depoimentos.

## Melhorias Futuras
- Substituir a API simulada por uma API real.
- Melhorar a acessibilidade com ferramentas como aria-labels e maior contraste de cores.
- Adicionar mais interatividade no formulário, como verificação de email em tempo real.
