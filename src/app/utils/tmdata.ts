export class LocalDB {
  constructor() {}
  getData = key => {
    const datastr = localStorage.getItem(key);
    const data = datastr ? JSON.parse(datastr) : null;
    return data;
  };

  storeData = (key, data) => {
    const datatr = JSON.stringify(data);
    localStorage.setItem(key, datatr);
  };

  removeData = key => {
    localStorage.removeItem(key);
    //localStorage.clear();
  };

  getUser = () => {
    const userstr = localStorage.getItem('tm_user');
    const user = userstr ? JSON.parse(userstr) : {};
    return user;
  };

  storeUser = user => {
    const userstr = JSON.stringify(user);
    localStorage.setItem('tm_user', userstr);
  };

  removeUser = () => {
    localStorage.removeItem('tm_user');
    //localStorage.clear();
  };
}
