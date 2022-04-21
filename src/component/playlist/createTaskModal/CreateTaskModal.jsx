import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { update } from "../../../store/playlistSlice";

export const CreateTaskModal = (props) => {
  const [isShowModal, setShowModal] = useState(false);
  const [taskContent, setTaskContent] = useState("");
  const dispatch = useDispatch();
  CreateTaskModal.defaultProps = {
    showModal: false,
  };

  const closeModal = () => {
    setShowModal(false);
    props.closeModalCreate(true);
  };

  useEffect(() => {
    setShowModal(props.showModal);
  }, [props.showModal]);

  const createTask = (e) => {
    e.preventDefault();
    const date = new Date();
    dispatch(update({ content: taskContent, createdAt: date.toDateString() }));
    closeModal();
    setTaskContent("");
  };

  return (
    <div className={isShowModal ? "modal is-active" : "modal"}>
      <div className="modal-background"></div>
      <div className="modal-content card p-5">
        <div className="field">
          <label className="label">Create your task here</label>
          <div className="control">
            <input
              className="input"
              type="text"
              placeholder="finish my homework.."
              onChange={(e) => setTaskContent(e.target.value)}
              value={taskContent}
            />
          </div>
        </div>
        <button
          className="button is-primary is-focused"
          aria-label="close"
          onClick={createTask}
        >
          Create Task
        </button>
      </div>
      <button
        className="modal-close is-large"
        aria-label="close"
        onClick={closeModal}
      ></button>
    </div>
  );
};
