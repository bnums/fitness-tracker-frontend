import { useState } from "react";
import Modal from "../Modal";
import ActivityForm from "./ActivityForm";
import useAuth from "../../hooks/useAuth";
import "./Activities.css";

const Activities = ({ activities }) => {
  const {
    auth: { token },
  } = useAuth();
  const [show, setShow] = useState(false);
  const [activityField, setActivityField] = useState({});

  return (
    <>
      <h1 className="activities-header">Activities</h1>
      {token ? (
        <button className="add-activity-button" onClick={() => setShow(true)}>
          Add A New Activity +
        </button>
      ) : null}
      <div className="activities-cards">
        {activities.map((activity) => {
          return (
            <div className="activity-card" key={activity.id}>
              <div className="activity-name">{activity.name}</div>
              <div className="activity-description">{activity.description}</div>
              {token ? (
                <button
                  className="edit-activity-card-button"
                  onClick={() => {
                    setShow(true);
                    setActivityField({
                      id: activity.id,
                      name: activity.name,
                      description: activity.description,
                    });
                  }}
                >
                  Edit
                </button>
              ) : null}
            </div>
          );
        })}
        <Modal
          show={show}
          title={activityField.name ? activityField.name : "Add A New Activity"}
          onClose={() => {
            setShow(false);
            setActivityField({});
          }}
        >
          <ActivityForm
            token={token}
            method={"temp"}
            activity={activityField}
          />
        </Modal>
      </div>
    </>
  );
};

export default Activities;
