import { takeLatest, call, put, all } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import history from '~/services/history';
import { loadListSuccess, loadListFailure } from './actions';

import api from '~/services/api';

export function* loadList({ payload }) {
  try {
    const { file_id } = payload;
    const response = yield call(api.post, 'file', { file_id });

    yield put(loadListSuccess(response.data));

    history.push('/list');
  } catch (err) {
    toast.error('Falha na autenticação, verifique seus dados.');
    yield put(loadListFailure());
  }
}

export default all([
  takeLatest('@list/LOAD_LIST_REQUEST', loadList),
  // takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  // takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  // takeLatest('@auth/SIGN_OUT', signOut),
]);
