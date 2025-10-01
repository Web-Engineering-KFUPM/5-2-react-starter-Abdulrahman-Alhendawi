function StudentCard(props) {
  return (
    <div className="student-card">
      <strong><h3>{props.name}</h3></strong>
      <p>ID: {props.id}</p>
      <p>Department: {props.department}</p>
    </div>
  );
}
export default StudentCard;