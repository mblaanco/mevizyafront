export function loadListRequest(file_id) {
  return {
    type: '@list/LOAD_LIST_REQUEST',
    payload: { file_id },
  };
}

export function loadListSuccess(list) {
  return {
    type: '@list/LOAD_SUCCESS',
    payload: { list },
  };
}

// export function signUpRequest(name, email, password) {
//   return {
//     type: '@auth/SIGN_UP_REQUEST',
//     payload: { name, email, password },
//   };
// }

export function loadListFailure() {
  return {
    type: '@list/LOAD_FAILURE',
  };
}

// export function signOut() {
//   return {
//     type: '@auth/SIGN_OUT',
//   };
// }
