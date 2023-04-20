const abtMeText = {
  text: `I'm a fullStack Developer. Basically, i do things for web.`
}

const githubLinks = {
  tryunfo: 'https://github.com/igorrCarvalho/Project-Tryunfo',
  trybeTunes: 'https://github.com/igorrCarvalho/Project-TrybeTunes',
  trybeWallet: 'https://github.com/igorrCarvalho/Project-TrybeWallet',

};

const tryunfoTxt = `This project was made using the TDD (Test Driven Development) method. It simulates a trunfo card game. You can choose what theme of trunfo cards you want. The card Title, image, description, rarity and atributtes are choosed typing in the form. A preview card will show your new card. The save button is disabled if the atributes pass 210. Each one of the atributtes can't pass 90. In the image input you must add the image source. By clicking the save button the card is added to your stash. In the filter section the user can filter your cards by: Name, rarity and trunfo. The user can also remove each card by clicking the delete button.`;

const trybeTunesTxt = `This project simulates an music website (like spotify). It uses an apple music API to search te music data. The user can listen to various music previews, add music to the favorites page, login and customize your profile. The favorite musics stay saved using WebStorage.`;

const trybeWalletTxt = `This project was made using the TDD (Test Driven Development) method and simulates an expense control wallet. It uses an currency API key to get the currencies info. The user needs to login with an valid email and a password bigger than six digits. In the wallet page the user can add the expense in various currencies. When the expense is added, the value is converted to BRL, and updated in the header. You can also edit and delete an expense.`;

const texts = {
  tryunfoTxt,
  trybeTunesTxt,
  trybeWalletTxt,
};

export {
  githubLinks,
  abtMeText,
  texts,
}