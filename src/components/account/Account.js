import "./Account.css";
import Operations from "../operations/Operations";
import Button from "../button/Button";

const Account = ({ name, balance, color, operationsBloc }) => {
  return (
    <div className="container-account">
      <div className="header-account" style={{ backgroundColor: { color } }}>
        <h2>{name}</h2>
        <h3>{balance + " € "}</h3>
      </div>
      <Operations operationLine={operationsBloc} />
      <Button />
    </div>
  );
};

export default Account;
