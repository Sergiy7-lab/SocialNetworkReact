// import messageReducer from "./messageReducer";
// import profileReducer from "./profileReducer";
// import sidebarReducer from "./sidebarReducer";

// let store = {
//   _state: {
//     profilePage: {
//       postsData: [
//         { id: 1, message: "Hi iam there", like: "10" },
//         { id: 2, message: "Do you?", like: "5" },
//         { id: 3, message: "how are you" },
//       ],
//       newPostText: "",
//     },
//     messagePage: {
//       dialogsData: [
//         { id: 1, name: "Dmitry" },
//         { id: 2, name: "Sasha" },
//         { id: 3, name: "Niki" },
//         { id: 4, name: "Viki" },
//         { id: 5, name: "Alyona" },
//         { id: 6, name: "Stas" },
//       ],
//       messageData: [
//         { id: 1, message: "hi" },
//         { id: 2, message: "hello" },
//         { id: 3, message: "how are you" },
//         { id: 4, message: "fine" },
//         { id: 5, message: "hi" },
//         { id: 6, message: "hi" },
//       ],

//       newMessageText: "",
//     },
//     sidebar: {},
//   },
//   _callSubscriber() {
//     console.log("state changed");
//   },

//   getState() {
//     return this._state;
//   },
//   subscribe(observer) {
//     this._callSubscriber = observer;
//   },

//   dispatch(action) {
//     this._state.profilePage = profileReducer(this._state.profilePage, action);
//     this._state.messagePage = messageReducer(this._state.messagePage, action);
//     this._state.sidebar = sidebarReducer(this._state.sidebar, action);

//     this._callSubscriber(this._state);
//   },
// };

// export default store;
// window.store = store;
