import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_POST } from '../constants/actionTypes';

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload;
    case FETCH_POST:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));  
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);  // return all posts, after filtering
    case LIKE:
        return posts.map((post) => (post._id === action.payload._id ? action.payload : post));
    default:
      return posts;
  }
};

// import { FETCH_ALL, CREATE, UPDATE, DELETE, LIKE, FETCH_POST } from '../constants/actionTypes';

// export default (state = { isLoading: true, posts: [] }, action) => {
//   switch (action.type) {
//     case FETCH_ALL:
//       return {
//                 ...state,
//                 posts: action.payload.data,
//                 currentPage: action.payload.currentPage,
//                 numberOfPages: action.payload.numberOfPages,
//               };
//     case FETCH_POST:
//       return state.map((post) => (post._id === action.payload._id ? action.payload : post));  
//     case CREATE:
//       return [...state, action.payload];
//     case UPDATE:
//       return state.map((post) => (post._id === action.payload._id ? action.payload : post));
//     case DELETE:
//       return state.filter((post) => post._id !== action.payload);  // return all state, after filtering
//     case LIKE:
//         return state.map((post) => (post._id === action.payload._id ? action.payload : post));
//     default:
//       return state;
//   }
// };

// import { FETCH_ALL, FETCH_POST, CREATE, UPDATE, DELETE, LIKE, START_LOADING, END_LOADING } from '../constants/actionTypes';

// export default (state = { isLoading: true, posts: [] }, action) => {
//   switch (action.type) {
//     case START_LOADING:
//       return { ...state, isLoading: true };
//     case END_LOADING:
//       return { ...state, isLoading: false };
//     case FETCH_ALL:
//       return {
//         ...state,
//         posts: action.payload.data,
//         currentPage: action.payload.currentPage,
//         numberOfPages: action.payload.numberOfPages,
//       };
//     case FETCH_POST:
//       return { ...state, post: action.payload.post };
//     case LIKE:
//       return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
//     case CREATE:
//       return { ...state, posts: [...state.posts, action.payload] };
//     case UPDATE:
//       return { ...state, posts: state.posts.map((post) => (post._id === action.payload._id ? action.payload : post)) };
//     case DELETE:
//       return { ...state, posts: state.posts.filter((post) => post._id !== action.payload) };
//     default:
//       return state;
//   }
// };