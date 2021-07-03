import "./App.css";
import Header from "./components/header/Header";
import Account from "./components/account/Account";
import listBankAccount from "./listBankAccount.json";

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        {listBankAccount.map((item, index) => {
          return (
            <Account
              key={index}
              name={item.name}
              balance={item.balance}
              color={item.color}
              operationsBloc={item.operations}
            />
          );
        })}
      </div>
    </div>
  );
}

export default App;
