import { notification } from "antd";

export default class HttpRequest {
  static host = "dfd";
  static credentials = true;
  static authentication = "Authentication";
  static contentType = "application/json; charset=utf-8";
  static accept = "application/json";

  // url, options
  static beforeSendHandle () {

  }
  static afterResonseHandle (response) {
    if (response.status >= 200 && response.status <= 400) {
      return response;
    }
    if (response.status === 401 || response.status === 403) {
      window.location = "login";
    }
    const error = new Error(response.statusText);
    error.response = response;
    throw error;
  }
  static sueccessHandle (response) {
    if (!response.success) {
      notification.error({
        message: response.msg,
      });
    } else if (response.msg) {
      notification.success({
        message: response.msg,
      });
    }
    return true;
  }
  static cat () {

  }
}
