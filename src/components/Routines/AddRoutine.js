import "./EditRoutine.css";

const AddRoutine = ({ routine, setRoutine, errMsg }) => {
  return (
    <>
      <p aria-live='assertive'>{errMsg}</p>
      <form className='routine-form'>
        <label className='name-label'>Routine Name:</label>
        <input
          className='name-input'
          value={routine.name}
          onChange={(e) => {
            setRoutine({ ...routine, name: e.target.value });
          }}
        />
        <br></br>
        <label className='goal-label'>Goal:</label>
        <input
          className='goal-input'
          value={routine.goal}
          onChange={(e) => {
            setRoutine({ ...routine, goal: e.target.value });
          }}
        />
        <label className='public-label-container'>
          <div className='public-label'>Public?</div>
          <div className='public-input'>
            <input
              type='radio'
              name='isPublic'
              onClick={() => {
                setRoutine({ ...routine, isPublic: true });
              }}
            />
            Yes
            <input
              type='radio'
              name='isPublic'
              defaultChecked
              onClick={() => {
                setRoutine({ ...routine, isPublic: false });
              }}
            />
            No
          </div>
        </label>
      </form>
    </>
  );
};

export default AddRoutine;
