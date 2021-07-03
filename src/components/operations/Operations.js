import "./Operations.css";

const Operations = ({ operationLine }) => {
  return operationLine.map((items, index) => {
    return (
      <div className="operation-array">
        <p key={index}>
          <span>{items.date}</span>
          <span>{items.description}</span>
          <span>{items.amount + " € "}</span>
        </p>
      </div>
    );
  });
};

export default Operations;
