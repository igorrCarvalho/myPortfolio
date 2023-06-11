const abtMeText = {
  text_en: `I'm a fullStack Developer. Basically, i do things for web.`,
  text_pt: 'Sou um desenvolvedor Fullstack. Basicamente, eu faço programas para a web',
}

const githubLinks = {
  tryunfo: 'https://github.com/igorrCarvalho/Project-Tryunfo',
  trybeTunes: 'https://github.com/igorrCarvalho/Project-TrybeTunes',
  trybeWallet: 'https://github.com/igorrCarvalho/Project-TrybeWallet',
  talkerManager: 'https://github.com/igorrCarvalho/Project-API-Talker-Manager',
};

const tryunfoEnTxt = `This project was made using the TDD (Test Driven Development) method. It simulates a trunfo card game. You can choose what theme of trunfo cards you want. The card Title, image, description, rarity and atributtes are choosed typing in the form. A preview card will show your new card. The save button is disabled if the atributes pass 210. Each one of the atributtes can't pass 90. In the image input you must add the image source. By clicking the save button the card is added to your stash. In the filter section the user can filter your cards by: Name, rarity and trunfo. The user can also remove each card by clicking the delete button.`;

const trybeTunesEnTxt = `This project simulates an music website (like spotify). It uses an apple music API to search te music data. The user can listen to various music previews, add music to the favorites page, login and customize your profile. The favorite musics stay saved using WebStorage.`;

const trybeWalletEnTxt = `This project was made using the TDD (Test Driven Development) method and simulates an expense control wallet. It uses an currency API key to get the currencies info. The user needs to login with an valid email and a password bigger than six digits. In the wallet page the user can add the expense in various currencies. When the expense is added, the value is converted to BRL, and updated in the header. You can also edit and delete an expense.`;

const talkerManagerEnTxt = `This project was made using the TDD (Test Driven Development) method. It simulates a control backend program to an talker website. It has many API endpoints, you can test it using VsCode extensions like 'Thunder-Client', or in the browser. This project use an simulated database, which is the talker.json file.`

const tryunfoPtTxt = 'Este projeto foi feito utilizando o método TDD (Desenvolvimento Orientado a Testes). Ele simula um jogo de cartas do tipo "trunfo". Você pode escolher qual tema de cartas de trunfo deseja. O título, imagem, descrição, raridade e atributos da carta são escolhidos digitando no formulário. Uma visualização da carta será exibida. O botão de salvar é desabilitado se os atributos ultrapassarem 210. Cada um dos atributos não pode ultrapassar 90. No campo de imagem, você deve adicionar a fonte da imagem. Ao clicar no botão de salvar, a carta é adicionada ao seu conjunto. Na seção de filtro, o usuário pode filtrar suas cartas por: nome, raridade e trunfo. O usuário também pode remover cada carta clicando no botão de exclusão.';

const trybeTunesPtTxt = 'Este projeto simula um site de música (como o Spotify). Ele utiliza uma API do Apple Music para buscar dados musicais. O usuário pode ouvir prévias de várias músicas, adicionar músicas à página de favoritos, fazer login e personalizar seu perfil. As músicas favoritas ficam salvas utilizando o WebStorage.';

const trybeWalletPtTxt = 'Este projeto foi feito utilizando o método TDD (Desenvolvimento Orientado a Testes) e simula uma carteira de controle de despesas. Ele utiliza uma API de conversão para obter informações sobre as moedas. O usuário precisa fazer login com um email válido e uma senha com mais de seis dígitos. Na página da carteira, o usuário pode adicionar despesas em várias moedas. Quando a despesa é adicionada, o valor é convertido para BRL e atualizado no cabeçalho. Você também pode editar e excluir uma despesa.';

const talkerManagerPtTxt = `Este projeto foi feito utilizando o método TDD (Desenvolvimento Orientado por Testes). Ele simula um programa de controle de backend para um site de palestras. Possui vários endpoints de API, que podem ser testados usando extensões do VsCode, como o 'Thunder-Client', ou no navegador. Este projeto utiliza um banco de dados simulado, que é o arquivo talker.json.`;

const texts = {
  tryunfoEnTxt,
  trybeTunesEnTxt,
  trybeWalletEnTxt,
  talkerManagerEnTxt,
  tryunfoPtTxt,
  trybeTunesPtTxt,
  trybeWalletPtTxt,
  talkerManagerPtTxt,
};

export {
  githubLinks,
  abtMeText,
  texts,
}