const SEND_MESSAGE = "SEND_MESSAGE";

let initialState = {
  dialogsData: [
    { id: 1, name: "Dmitry" },
    { id: 2, name: "Sasha" },
    { id: 3, name: "Niki" },
    { id: 4, name: "Viki" },
    { id: 5, name: "Alyona" },
    { id: 6, name: "Stas" },
  ],
  messageData: [
    { id: 1, message: "hi" },
    { id: 2, message: "hello" },
    { id: 3, message: "how are you" },
    { id: 4, message: "fine" },
    { id: 5, message: "hi" },
    { id: 6, message: "hi" },
  ],
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEND_MESSAGE: {
      let body = action.newMessageText;
      return {
        ...state,

        messageData: [...state.messageData, { id: 7, message: body }],
      };
    }

    default:
      return state;
  }
};

export const sendMessageCreator = (newMessageText) => ({
  type: SEND_MESSAGE,
  newMessageText,
});

export default messageReducer;
