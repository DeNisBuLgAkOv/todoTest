import React from "react";
import {newTaskType} from "./index";

type TaskType={
    task:newTaskType
}

function Task(props:TaskType):JSX.Element{

  return(
        <div key={props.task.id} className={"task"}>
          <div>
            <label key={props.task.id} className={"label"}>
                <input  type={"checkbox"} className={"checkbox"}/>
                <span className={"fake"}></span>
                <span  className={"text" }>{props.task.title}</span>
            </label>
          </div>
        <div className={"delete_task"}>x</div>
        </div>)

}
export default Task