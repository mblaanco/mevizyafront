import produce from 'immer';

const INITIAL_STATE = {
  list: null,
  loading: true,
};

export default function list(state = INITIAL_STATE, action) {
  return produce(state, (draft) => {
    switch (action.type) {
      case '@list/LOAD_LIST_REQUEST': {
        draft.list = action.payload.file_id;
        break;
      }
      case '@list/LOAD_SUCCESS': {
        draft.list = action.payload.list;
        draft.loading = false;
        break;
      }
      case '@list/LOAD_FAILURE': {
        draft.loading = false;
        break;
      }
      // case '@auth/SIGN_OUT': {
      //   draft.token = null;
      //   draft.signed = false;
      //   break;
      // }
      default:
        draft.loading = false;
    }
  });
}
