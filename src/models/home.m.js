/**
 * Created Date: Tuesday November 28th 2017 10:56:38 am
 * Author: chengpu
 * -----
 * Last Modified:Tuesday November 28th 2017 10:56:38 am
 * Modified By: chengpu
 * -----
 */
import getOpportunityListRequest, { sayHelloRequest } from "../api/homeApi";

export async function getOpportunityList (params, put) {
  const response = await getOpportunityListRequest(params);
  put({
    type: "home/enters",
    data: response,
  });
  return response;
}
export async function sayHello (params, put) {
  const response = await sayHelloRequest(params);
  put({
    type: "home/say",
    data: response,
  });
  return response;
}

export default {
  namespace: "home", // 必须唯一 建议与文件名相同
  state: {
    enters: [],
    say: "",
  },
  cache: true,
  autowrite: {
    enters: getOpportunityList
  },
  reducers: {
    enters (state, action) {
      return {
        ...state,
        enters: action.data,
      };
    },
    say (state, action) {
      return {
        ...state,
        say: action.data,
      };
    },
  },
};
