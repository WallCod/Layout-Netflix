const translations = {
    en: {
        language: 'English',
        signIn: 'Sign In',
        headerTitle: 'Unlimited movies, TV shows, and more',
        headerSubtitle: 'Starts at BRL 20.90. Cancel anytime.',
        headerDescription: 'Ready to watch? Enter your email to create or restart your membership',
        input: 'Email Address',
        button: 'Get Started >',
        first: 'What is Netflix?',
        first1: 'Netflix is a streaming service that offers a wide variety of award-winning series, films and documentaries on thousands of devices connected to the internet. You can watch as many films and series as you want, whenever and wherever you want – all for an affordable monthly price. Here you will always find new things. Every week, we add new series and movies.',
        second: 'How much does Netflix cost?',
        second1: 'Watch Netflix on your cell phone, tablet, Smart TV, laptop or streaming device for a single monthly fee. Plans range from R$20.90 to R$59.90 per month. No contract or extra fees.',
        third: 'Where can I watch?',
        third1: 'Watch wherever you want, whenever you want. Access your Netflix account at netflix.com to watch on your computer or on any internet-connected device compatible with the Netflix app, such as Smart TVs, smartphones, tablets, streaming devices and video game consoles. You can also download your favorite series with the Netflix app for iOS or Android. Use downloads to take Netflix wherever you want without needing an internet connection. Take Netflix with you anywhere.',
        fourth: 'How do I cancel?',
        fourth1: 'Netflix is flexible. There are no contracts or commitments. You can cancel your online account with just two clicks. There is no cancellation fee – you can start or end your subscription at any time.',
        fifth: 'What can I watch on Netflix?',
        fifth1: 'Netflix has a huge catalog of award-winning movies, documentaries, series, Netflix originals and more. Watch as much as you want, whenever you want.',
        sixth: 'Is Netflix suitable for kids?',
        sixth1: 'The Netflix kids experience is part of your subscription so that children can enjoy family-friendly series and movies in their own space under the supervision of their parents. The parental controls feature, included in the kids profiles and protected by a PIN, allows you to restrict the age rating of content that children can watch and block specific titles that you dont want them to watch.',
        trending: 'Trending-Now',
        questions: 'Frequently Asked Questions',
        small: 'Want to watch? Enter your email to create or restart your subscription.', //Add more translations as needed. input1: 'Email Address',
        input1: 'Email Address',
        button1: 'Get Started >',
        questions1: 'Questions? Call 0800 591 2876',
        faq: 'Frequently Asked Questions',
        investor: 'Investor Relations',
        ways: 'Ways to watch',
        corporate: 'Corporate Information',
        only: 'Only on Netflix',
        help: 'Help Center',
        jobs: 'Careers',
        terms: 'Terms of Use',
        contact: 'Contact Us',
        account: 'Account',
        redeem: 'Redeem Prepaid Card',
        privacy: 'Privacy',
        speed: 'Speed Test',
        media: 'Media Center',
        buy: 'Buy Prepaid Card',
        cookie: 'Cookie Preferences',
        legal: 'Legal Notices',
        brazil: 'Netflix Brazil'
        
        //Adicione mais traduções conforme necessário.
    },

    pt: {
        language: 'Português',
        signIn: 'Entrar',
        headerTitle: 'Filmes, séries e muito mais, sem limites',
        headerSubtitle: 'A partir de R$ 20,90. Cancele quando quiser.',
        headerDescription: 'Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.',
        input: 'Endereço de Email',
        button: 'Vamos lá >',
        trending: 'Em alta',
        questions:'Perguntas Frequentes',
        first: 'O que é a Netflix ?',
        first1: 'A Netflix é um serviço de streaming que oferece uma ampla variedade de séries,filmes e documentários premiados em milhares de aparelhos conectados à internet.Você pode assistir a quantos filmes e séries quiser, quando e onde quiser – tudo por um preço mensal acessível. Aqui você sempre encontra novidades. A cada semana, adicionamos novas séries e filmes.',
        second: 'Quanto custa a Netflix ?',
        second1: 'Assista à Netflix no seu celular, tablet, Smart TV, notebook ou aparelho de streaming por uma taxa mensal única. Os planos variam de R$ 20,90 a R$ 59,90 por mês. Sem contrato nem taxas extras.',
        third: 'Onde posso assistir ?',
        third1: 'Assista onde quiser, quando quiser. Acesse sua conta Netflix em netflix.com para assistir no computador ou em qualquer aparelho conectado à internet compatível com o aplicativo Netflix, como Smart TVs, smartphones, tablets, aparelhos de streaming e videogames.Você também pode baixar suas séries favoritas com o aplicativo Netflix para iOS ou Android. Use os downloads para levar a Netflix para onde quiser sem precisar de conexão com a internet. Leve a Netflix com você para qualquer lugar.',
        fourth: 'Como faço para cancelar ?',
        fourth1: 'A Netflix é flexível. Não há contratos nem compromissos. Você pode cancelar a sua conta na internet com apenas dois cliques. Não há taxa de cancelamento – você pode começar ou encerrar a sua assinatura a qualquer momento.',
        fifth: 'O que eu posso assistir na Netflix ?',
        fifth1: 'A Netflix tem um grande catálogo de filmes, documentários, séries, originais Netflix premiados e muito mais. Assista o quanto quiser, quando quiser.',
        sixth: 'A Netflix é adequada para crianças ?',
        sixth1: 'A experiência infantil da Netflix faz parte da sua assinatura para que as crianças se divirtam em seu próprio espaço com séries e filmes familiares sob a supervisão dos responsáveis.O recurso de controle parental, incluso nos perfis para crianças e protegido por PIN, permite restringir a classificação etária do conteúdo que as crianças podem ver e bloquear títulos específicos que você não quer que elas assistam.',
        small: 'Quer assistir? Informe seu email para criar ou reiniciar sua assinatura.',
        input1: 'Endereço de Email',
        button1: 'Vamos lá >',
        questions1: 'Dúvidas? Ligue para 0800 591 2876',
        faq: 'Perguntas frequentes',
        investor: 'Relações com investidores',
        ways: 'Formas de assistir',
        corporate: 'Informações corporativas',
        only: 'Só na Netflix',
        help: 'Central de ajuda',
        jobs: 'Carreiras',
        terms: 'Termos de uso',
        contact: 'Entre em contato',
        account: 'Conta',
        redeem: 'Resgatar cartão pré-pago',
        privacy: 'Privacidade',
        speed: 'Teste de velocidade',
        media: 'Media Center',
        buy: 'Comprar cartão pré-pago',
        cookie: 'Preferências de cookies',
        legal: 'Avisos legais',
        brasil: 'Netflix Brasil'
 }
};


function toggleDropdown() {
    document.getElementById("language-dropdown").classList.toggle("show");
}

function changeLanguage(language) {
    const elements = document.querySelectorAll('[data-translate]');
    elements.forEach(element => {
        const key = element.getAttribute('data-translate');
        if (element.tagName.toLowerCase() === 'input' && element.type === 'email') {
            element.placeholder = translations[language][key]; // traduz o input //
        } else {
            element.textContent = translations[language][key];
        }

    });

    document.querySelector('.language-btn').innerHTML = `${translations[language].language} <img src="img/down-icon.png" alt="${translations[language].language}">`;
}

// Fechar o dropdown se o usuário clicar fora dele
window.onclick = function (event) {
    if (!event.target.matches('.language-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}


// Efeito Rolover no Trending-Now //

document.querySelector('.scroll-left').addEventListener('click', function () {
    document.querySelector('.thumbnails').scrollBy({
        left: -200, // Ajuste a quantidade de rolagem conforme necessário //
        behavior: 'smooth'
    });
});

document.querySelector('.scroll-right').addEventListener('click', function () {
    document.querySelector('.thumbnails').scrollBy({
        left: 200, //Ajustea quantidade de rolagem conforme necessário //
        behavior: 'smooth'
    });
});