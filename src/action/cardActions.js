import { CONSTANTS } from "./index";

export const addCard = (listID, text) => {
  return {
    type: CONSTANTS.ADD_CARD,
    payload: { text, listID },
  };
};
export const delCard = (listID, cardID) => {
  return {
    type: CONSTANTS.DELETE_CARD,
    payload: { listID, cardID },
  };
};
