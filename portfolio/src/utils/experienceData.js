import tryunfoGif from '../Pictures/tryunfoGif.gif'
import trybeTunesGif from '../Pictures/trybeTunes.gif';
import trybeWalletGif from '../Pictures/trybeWalletGif.gif';
import { githubLinks, trybeTunesTxt, trybeWalletTxt, tryunfoTxt } from './phrases';


const experienceData = [
  {
    text: tryunfoTxt,
    data: tryunfoGif,
    repo: githubLinks.tryunfo,
  },
  {
    text: trybeTunesTxt,
    data: trybeTunesGif,
    repo: githubLinks.trybeTunes,
  },
  {
    text: trybeWalletTxt,
    data: trybeWalletGif,
    repo: githubLinks.trybeWallet,
  },
];

export default experienceData;