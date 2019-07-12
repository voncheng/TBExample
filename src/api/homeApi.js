
export default function getOpportunityListRequest () {
  return new Promise(function (resolve) {
    setTimeout(() => {
      const response = [
        { id: 1, name: "hello Tomatobean 1" },
        { id: 2, name: "hello Tomatobean 2" }];
      resolve(response);
    }, 1000);
  });
}
export function sayHelloRequest () {
  return new Promise(function (resolve) {
    setTimeout(() => {
      const response = "hello";
      resolve(response);
    }, 1000);
  });
}

