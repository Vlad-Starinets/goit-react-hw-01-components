import "./App.css";
import Profile from "./components/profile/Profile";
import Statistic from "./components/statistic/Statistic";
import Friends from "./components/friends/FriendList";
import TransactionHistory from "./components/transaction/TransactionHistory";
import statData from "./json/statistical-data.json";
import user from "./json/user.json";
import friends from "./json/friends.json";
import transaction from "./json/transactions.json";

function App() {
  return (
    <div className="App">
      <Profile
        name={user.name}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />

      <Statistic title="Upload stats" stats={statData} />

      <Friends friends={friends} />

      <TransactionHistory items={transaction} />
    </div>
  );
}

export default App;
