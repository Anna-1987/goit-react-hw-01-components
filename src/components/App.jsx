import { Profile } from './Profile/Profile';
import { Statistics } from './Statistics/Statistics';
import { FriendList } from './FriendList/FriendList';
import { TransactionHistory } from './TransactionHistory/Transaction';

import user from './Datas/user.json';
import data from './Datas/data.json';
import friends from './Datas/friends.json';
import transactions from './Datas/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        display: 'flex',
        gap:'20px',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
       <Profile
       username={user.username}
       tag={user.tag}
       location={user.location}
       avatar={user.avatar}
       stats={user.stats}
       />
        <Statistics title="Upload stats" stats={data} />
        <FriendList friends={friends} />
        <TransactionHistory items={transactions} /> 
    </div>
     
    //  <div>
    //  <Profile
    //    username={user.username}
    //    tag={user.tag}
    //    location={user.location}
    //    avatar={user.avatar}
    //    stats={user.stats}
    //  />


  );
};
