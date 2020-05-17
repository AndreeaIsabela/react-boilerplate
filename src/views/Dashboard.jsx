import React, {useState} from 'react';
import { connect } from 'react-redux';

import {requestTaskCreation} from '../redux-store/actions/actions';

const Dashboard = ({tasks, createNewTask}) => {
const [newTask,setNewTask] = useState('');

const onClickHandler = () => {
  createNewTask(newTask);
  setNewTask('');
}

return(
  <div>
    <h1 className="text-center mt-5 mb-5">Dashboard</h1>
    <ul className="list-group">
      {tasks.map(task => 
        <div className="row" key={task._id}>
          <li className="list-group-item offset-1 col-2">{task.name}</li>
        </div>
      )}
    </ul>
    <div className="input-group mt-5 row">
      <input 
        className="form-control offset-1 col-2"
        type="text" 
        placeholder="Add a new task..."
        value={newTask}
        onChange={(event) => setNewTask(event.target.value)}
        />
      <div className="input-group-append">
        <button 
          className="btn btn-outline-primary"
          onClick= {onClickHandler}
        >Add</button>
      </div>
    </div>

  </div>
)
};

const mapStateToProps = state => {
  console.log(state);
  return {
    tasks: state.taskReducer

  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    createNewTask (newTask) {
      dispatch(requestTaskCreation(newTask));
    }
  }
}

const ConnectedDashboard = connect(mapStateToProps, mapDispatchToProps)(Dashboard);

export default ConnectedDashboard;
