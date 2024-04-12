const PersonDetail = ({ name, number, id, handleDelete }) => {
  return (
    <div className="numbers-list">
      <span style={{ marginRight: "0.5rem" }}>
        {name} {number}
      </span>
      <button onClick={() => handleDelete(id)}>delete</button>
    </div>
  );
};

export default PersonDetail;
