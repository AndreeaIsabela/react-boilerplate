import { 
  CREATE_TASK, 
  REQUEST_TASK_CREATION 
} from './action_types';

export const requestTaskCreation = (task) => ({
  type: REQUEST_TASK_CREATION,
  task,
});

export const createTask = (task, taskID) => ({
  type: CREATE_TASK,
  task,
  taskID,
});
