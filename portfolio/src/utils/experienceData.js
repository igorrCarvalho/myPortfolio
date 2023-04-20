import tryunfoGif from '../Pictures/tryunfoGif.gif'
import trybeTunesGif from '../Pictures/trybeTunes.gif';
import trybeWalletGif from '../Pictures/trybeWalletGif.gif';
import { githubLinks, texts} from './phrases';


const experienceData = [
  {
    text: texts.tryunfoTxt,
    data: tryunfoGif,
    repo: githubLinks.tryunfo,
  },
  {
    text: texts.trybeTunesTxt,
    data: trybeTunesGif,
    repo: githubLinks.trybeTunes,
  },
  {
    text: texts.trybeWalletTxt,
    data: trybeWalletGif,
    repo: githubLinks.trybeWallet,
  },
];

export default experienceData;