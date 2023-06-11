import tryunfoGif from '../Pictures/tryunfoGif.gif'
import trybeTunesGif from '../Pictures/trybeTunes.gif';
import trybeWalletGif from '../Pictures/trybeWalletGif.gif';
import talkerManager from '../Pictures/talkerManager.gif';
import { githubLinks, texts } from './phrases';


const experienceData = [
  {
    title: 'Tryunfo',
    en_text: texts.tryunfoEnTxt,
    pt_text: texts.tryunfoPtTxt,
    data: tryunfoGif,
    repo: githubLinks.tryunfo,
  },
  {
    title: 'Trybetunes',
    en_text: texts.trybeTunesEnTxt,
    pt_text: texts.trybeTunesPtTxt,
    data: trybeTunesGif,
    repo: githubLinks.trybeTunes,
  },
  {
    title: 'Expense Wallet',
    en_text: texts.trybeWalletEnTxt,
    pt_text: texts.trybeWalletPtTxt,
    data: trybeWalletGif,
    repo: githubLinks.trybeWallet,
  },
  {
    title: 'Talker Manager',
    en_text: texts.talkerManagerEnTxt,
    pt_text: texts.talkerManagerPtTxt,
    data: talkerManager,
    repo: githubLinks.talkerManager,
  },
];

export default experienceData;