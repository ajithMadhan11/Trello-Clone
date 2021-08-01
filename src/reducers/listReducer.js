import { CONSTANTS } from "../action";
import { nanoid } from "nanoid";

const initialState = JSON.parse(localStorage.getItem("todo-list")) || [
  {
    title: "Sprint-Backlogs",
    id: `list-${0}`,
    cards: [
      {
        id: `card-${0}`,
        text: "Start creating your own Boards and cards 🚀",
      },
      {
        id: `card-${1}`,
        text: "keyboard shortcuts disabled ⌨️",
      },
      {
        id: `card-${5}`,
        text: "Preload card - attachment 🔌",
      },
    ],
  },
  {
    title: "In Progress",
    id: `list-${1}`,
    cards: [
      {
        id: `card-${2}`,
        text: "Splash screen -error 🐞",
      },
      {
        id: `card-${3}`,
        text: "New UI update to all cards 🥸",
      },
    ],
  },
  {
    title: "Sprint-Complete",
    id: `list-${2}`,
    cards: [
      {
        id: `card-${4}`,
        text: "About us Section of landing page ✅",
      },
    ],
  },
];

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_LIST:
      const listID = nanoid(5);
      const newlist = {
        title: action.payload,
        cards: [],
        id: `list-${listID}`,
      };
      localStorage.setItem("todo-list", JSON.stringify([...state, newlist]));
      return [...state, newlist];

    case CONSTANTS.ADD_CARD: {
      const cardID = nanoid(5);
      const newCard = {
        text: action.payload.text,
        id: `card-${cardID}`,
      };
      const newState = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: [...list.cards, newCard],
          };
        } else {
          return list;
        }
      });
      localStorage.setItem("todo-list", JSON.stringify(newState));
      return newState;
    }
    case CONSTANTS.DELETE_CARD:
      const { cardID } = action.payload;
      const newStateInit = state.map((list) => {
        if (list.id === action.payload.listID) {
          return {
            ...list,
            cards: list.cards.filter((card) => card.id !== cardID),
          };
        }
        return list;
      });
      localStorage.setItem("todo-list", JSON.stringify(newStateInit));
      return newStateInit;

    case CONSTANTS.DELETE_LIST: {
      const delListIndex = state.findIndex((list) => {
        return list.id === action.payload;
      });
      state.splice(delListIndex, 1);
      const newState = state;
      localStorage.setItem("todo-list", JSON.stringify(newState));
      return [...newState];
    }

    case CONSTANTS.DRAG_HAPPENED:
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
      } = action.payload;
      const newState = [...state];

      //In the same list
      if (droppableIdStart === droppableIdEnd) {
        const list = state.find((list) => droppableIdStart === list.id);
        const card = list.cards.splice(droppableIndexStart, 1);
        list.cards.splice(droppableIndexEnd, 0, ...card);
      }

      //other list
      if (droppableIdStart !== droppableIdEnd) {
        //find the list where the drag happened
        const listStart = state.find((list) => droppableIdStart === list.id);
        // pull out the card from the old list
        const card = listStart.cards.splice(droppableIndexStart, 1);
        //find list where drag ended
        const listEnd = state.find((list) => droppableIdEnd === list.id);
        //put the card in the new list
        listEnd.cards.splice(droppableIndexEnd, 0, ...card);
      }
      localStorage.setItem("todo-list", JSON.stringify(newState));
      return newState;

    default:
      return state;
  }
};

export default listReducer;
