export class Message {
  static getMsg(result) {
    //console.log(result);
    let message = '';
    if (result && result.status === 1) {
      message = 'success';
    } else if (result && result.status === 0) {
      if (result && result.errors && result.errors.length > 0) {
        let error = result.errors[0];
        message = error.message;
      }
    } else {
      message = 'some error occured';
    }

    return message;
  }
}

export class ErrMessage {
  static getErrmsg(error) {
    let errMsg;
    if (error && error.message === 'Failed to fetch') {
      errMsg = 'Server down please try later';
    } else if (error && error.message) {
      errMsg = error.message;
    }
    return errMsg;
  }
}
