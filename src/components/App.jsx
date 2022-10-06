import { Profile } from "./Profile/Profile";
import userData from "../components/Profile/data/user.json";
import { Statistics } from "./Statistics/Statistics";
import data from "./Statistics/data/data.json";
import { FriendList } from "./FriendList/FriendList";
import friends from "./FriendList/data/friends.json"
import { TransactionHistory } from "./TransactionHistory/TransactionHistory";
import transactions from "./TransactionHistory/data/transactions.json"


export const App = () => {
  return (
    <>
      <Profile user={userData} />

      <Statistics title="Upload stats" stats={data} />

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </>
  );
};
