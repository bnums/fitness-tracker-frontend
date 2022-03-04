import "./EditActivity.css";

const EditActivity = ({ newActivity, setNewActivity }) => {
  return (
    <form>
      <label>
        <div className='edit-activity-label'>Activity Name:</div>
        <input
          className='edit-activity-input'
          value={newActivity.name}
          onChange={(e) => {
            setNewActivity({ ...newActivity, name: e.target.value });
          }}
        />
      </label>
      <label>
        <div className='edit-activity-label'>Description:</div>
        <input
          className='edit-activity-input'
          value={newActivity.description}
          onChange={(e) => {
            setNewActivity({ ...newActivity, description: e.target.value });
          }}
        />
      </label>
    </form>
  );
};

export default EditActivity;
