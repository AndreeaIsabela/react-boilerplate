import { take, put } from 'redux-saga/effects';
import { v1 as uuid } from 'uuid';

import * as types from './actions/action_types';
import * as actions from './actions/actions';

export function* taskCreationSaga() {
  while (true) {
    const { task } = yield take(types.REQUEST_TASK_CREATION);
    const taskID = uuid();

    const action = actions.createTask(task, taskID);

    yield put(action);
  }
}
