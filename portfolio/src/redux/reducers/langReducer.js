const INITIAL_STATE = {
  lang: 'en',
};

function langReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'LANG_CHANGE':
      return { lang: action.payload };
    default:
      return state;
  }
}

export default langReducer;
