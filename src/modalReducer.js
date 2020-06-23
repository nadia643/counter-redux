import { MODAL_OPEN, MODAL_CLOSE } from './actions';

const defaultState =  {
  isOpen: false,
  name: "",
  text: ""
}

export default function reducer(state = defaultState, action) {
  return state;
}