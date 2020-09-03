const apiMonitor = (response) => {
  response.ok
    ? console.log(
        `API RESPONSE SUCESS: Status Code: ${response.status}, URL: ${response.config.baseURL}${response.config.url}`
      )
    : console.log(
        `API RESPONSE FAILED: Status Code: ${response.status}, URL: ${response.config.baseURL}${response.config.url}`, response.data
      );
};

export default apiMonitor;
