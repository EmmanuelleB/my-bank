import "./User.css";

const User = (props) => {
  return (
    <div className="user-container">
      <h4>{props.userName}</h4>
      <div className="icon">
        <i class="fas fa-user"></i>
      </div>
    </div>
  );
};

export default User;
