import tryunfoGif from '../Pictures/tryunfoGif.gif'
import trybeTunesGif from '../Pictures/trybeTunes.gif';
import trybeWalletGif from '../Pictures/trybeWalletGif.gif';
import talkerManager from '../Pictures/talkerManager.gif';
import { githubLinks, texts } from './phrases';


const experienceData = [
  {
    title: 'Tryunfo',
    text: texts.tryunfoTxt,
    data: tryunfoGif,
    repo: githubLinks.tryunfo,
  },
  {
    title: 'Trybetunes',
    text: texts.trybeTunesTxt,
    data: trybeTunesGif,
    repo: githubLinks.trybeTunes,
  },
  {
    title: 'Expense Wallet',
    text: texts.trybeWalletTxt,
    data: trybeWalletGif,
    repo: githubLinks.trybeWallet,
  },
  {
    title: 'Talker Manager',
    text: texts.talkerManagerTxt,
    data: talkerManager,
    repo: githubLinks.talkerManager,
  },
];

export default experienceData;