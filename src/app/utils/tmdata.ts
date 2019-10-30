export class LocalDB {
  constructor() {}

  getData = key => {
    const datastr = localStorage.getItem(key);
    return datastr;
  };

  storeData = (key, datastr) => {
    localStorage.setItem(key, datastr);
  };

  getJSONData = key => {
    const datastr = localStorage.getItem(key);
    const data = datastr ? JSON.parse(datastr) : null;
    return data;
  };

  storeJSONData = (key, data) => {
    const datastr = JSON.stringify(data);
    localStorage.setItem(key, datastr);
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
