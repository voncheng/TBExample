import fetch from "isomorphic-fetch";
// import { notification } from "antd";
import { urlAppendQuery } from "../util/tools";
import HttpRequest from "./request";

/**
 * 检查校验码
 * @param {*} response
 */
function checkStatus (response) {
  HttpRequest.afterResonseHandle(response);
}

function send (url, options) {
  const flag = HttpRequest.beforeSendHandle(url, options);
  if (flag === false) {
    return;
  }
  const defaultOptions = {
    // credentials: "include",
    headers: {},
  };
  defaultOptions.headers[HttpRequest.authentication] = localStorage[HttpRequest.HttpRequest];
  defaultOptions[HttpRequest.credentials] = HttpRequest.credentials;

  const newOptions = { ...defaultOptions, ...options };
  // newOptions.mode = "no-cors";
  if (newOptions.method === "POST" || newOptions.method === "PUT") {
    newOptions.headers = {
      Accept: "application/json",
      mode: "no-cors",
      "Content-Type": "application/json; charset=utf-8",
      ...newOptions.headers,
    };
    newOptions.body = JSON.stringify(newOptions.body);
  }
  if (newOptions.method === "UPLOAD") {
    newOptions.method = "POST";
  }
  // 拼接路径参数
  let newUrl = url;
  if (options && options.params) {
    newUrl = urlAppendQuery(url, {
      ...options.params,
    });
  }
  const checkBiz = response => response.json().then((res) => {
    const statue = HttpRequest.sueccessHandle(res);
    if (statue === false) {
      return;
    }
    return res;
  });
  return fetch(newUrl, newOptions)
    .then(checkStatus)
    .then(checkBiz)
    .catch((error) => {
      if (error.code) {
        // notification.error({
        //   message: error.name,
        //   description: error.message,
        // });
        // console.error(error.message);
      }
      if ("stack" in error && "message" in error) {
        // notification.error({
        //   message: `请求错误: ${url}`,
        //   description: error.message,
        // });
        // console.error(error.message);
      }
      return error;
    });
}
export default {
  GET (url, options, autoTips) {
    if (typeof options !== "object") {
      return send(url, { method: "GET" }, options);
    }
    return send(url, { ...options, method: "GET" }, autoTips);
  },
  POST (url, options, autoTips) {
    if (typeof options !== "object") {
      return send(url, { method: "POST" }, options);
    }
    return send(url, { ...options, method: "POST" }, autoTips);
  },
  PUT (url, options, autoTips) {
    if (typeof options !== "object") {
      return send(url, { method: "PUT" }, options);
    }
    return send(url, { ...options, method: "PUT" }, autoTips);
  },
  UPLOAD (url, options, autoTips) {
    if (typeof options !== "object") {
      return send(url, { method: "UPLOAD" }, options);
    }
    return send(url, { ...options, method: "UPLOAD" }, autoTips);
  },
  DELETE (url, options, autoTips) {
    if (typeof options !== "object") {
      return send(url, { method: "DELETE" }, options);
    }
    return send(url, { ...options, method: "DELETE" }, autoTips);
  },
};
