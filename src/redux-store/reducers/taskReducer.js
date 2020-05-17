import { state } from '../state';
import * as types from '../actions/action_types';

const taskReducer = (tasks = state.tasks, action) => {
  switch (action.type) {
    case types.CREATE_TASK:
      return [
        ...tasks,
        {
          _id: action.taskID,
          name: action.task,
        },
      ];
    default:
      return tasks;
  }
};

export default taskReducer;
