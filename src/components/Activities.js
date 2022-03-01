const Activities = ({ activities }) => {
  return (
    <>
      <h1>Activities Page</h1>
      {activities.map((activity) => {
        return (
          <div key={activity.id}>
            {activity.name} {activity.description}
          </div>
        );
      })}
    </>
  );
};

export default Activities;
