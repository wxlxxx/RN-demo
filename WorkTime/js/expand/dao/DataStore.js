import {AsyncStorage} from 'react-native';

export default class DataStore {
  fetchData(url, method, postdata) {
    return new Promise((resolve, reject) => {
      this.fetchLocalData(url)
        .then(wrapData => {
          if (wrapData && this.checkTimestampValid(wrapData.timestamp)) {
            resolve(wrapData);
          } else {
            this.fetchNetData(url, method, postdata)
              .then(data => {
                resolve(this._wrapData(data));
              })
              .catch(error => {
                reject(error);
              });
          }
        })
        .catch(error => {
          this.fetchNetData(url, method, postdata)
            .then(data => {
              resolve(this._wrapData(data));
            })
            .catch(error2 => {
              reject(error2);
            });
        });
    });
  }

  saveData(url, data, callback) {
    if (!data || !url) {
      return;
    }
    AsyncStorage.setItem(url, JSON.stringify(this._wrapData(data)), callback);
  }

  fetchLocalData(url) {
    return new Promise((resolve, reject) => {
      AsyncStorage.getItem(url, (error, result) => {
        if (!error) {
          try {
            resolve(JSON.parse(result));
          } catch (e) {
            reject(e);
            console.error(e);
          }
        } else {
          reject(error);
          console.error(error);
        }
      });
    });
  }

  fetchNetData(url, method, postdata) {
    return new Promise((resolve, reject) => {
      fetch(url, {
        headers: {
          Authorization:
            'Basic MTYwNjI0OTQ6YzRjYTQyMzhhMGI5MjM4MjBkY2M1MDlhNmY3NTg0OWI=',
        },
        method: method ? method : 'GET',
        body: postdata ? JSON.stringify(postdata) : null,
      })
        .then(response => {
          if (response.ok) {
            return response.json();
          }
          throw new Error('Network not ok');
        })
        .then(responseData => {
          this.saveData(url, responseData);
          resolve(responseData);
        })
        .catch(error => {
          reject(error);
        });
    });
  }

  _wrapData(data) {
    return {data: data, timestamp: new Date().getTime()};
  }

  static checkTimestampValid(timestamp) {
    const currentDate = new Date();
    const targetDate = new Date();
    targetDate.setTime(timestamp);
    if (currentDate.getMonth() !== targetDate.getMonth()) {
      return false;
    }
    if (currentDate.getDate() !== targetDate.getDate()) {
      return false;
    }
    if (currentDate.getHours() - targetDate.getHours() > 4) {
      return false;
    }
    return true;
  }
}
