import React, { useState } from "react";
import { useSelector } from "react-redux";
import { TaskList } from "../taskList/TaskList";
import { CreateTaskModal } from "../createTaskModal/CreateTaskModal";
import "./TodoCard.scss";

export const TodoCard = () => {
  const [showModalCreate, setShowModalCreate] = useState(false);
  const { taskList } = useSelector((state) => state.taskList);
  const setShowModal = () => {
    setShowModalCreate(true);
  };
  return (
    <>
      <div className="todo-card">
        <button className="button is-info is-focused" onClick={setShowModal}>
          Tambahkan Tugas
        </button>
        <button className="button is-primary is-focused">Hapus Tugas</button>
      </div>
      <div className="todo-card__line" />
      {taskList?.map((content, i) => (
        <TaskList content={content.task} key={i} />
      ))}
      <CreateTaskModal
        showModal={showModalCreate}
        closeModalCreate={(isCLosed) => setShowModalCreate(!isCLosed)}
      />
    </>
  );
};
