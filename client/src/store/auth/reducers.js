import ACTypes from '../types';

const initialState = {
  user: null,
};

export const auth = (state = initialState, action) => {

  switch (action.type) {

    case ACTypes.AUTH:
      return { ...state, user: { id: action.payload.id } }

    case ACTypes.USER_ROLE:
      return { ...state, user: { id: action.payload.id, name: action.payload.name, role: action.payload.role } }

    default:
      return state; 
  }
};