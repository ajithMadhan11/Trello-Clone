import { CONSTANTS } from "./index";

export const addList = (title) => {
  return {
    type: CONSTANTS.ADD_LIST,
    payload: title,
  };
};
export const delList = (listId) => {
  return {
    type: CONSTANTS.DELETE_LIST,
    payload: listId,
  };
};

export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId
) => {
  return {
    type: CONSTANTS.DRAG_HAPPENED,
    payload: {
      droppableIdStart,
      droppableIdEnd,
      droppableIndexStart,
      droppableIndexEnd,
      draggableId,
    },
  };
};
