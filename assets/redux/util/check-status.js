export default function checkStatus(response) {
  if ( (response.status || response.statusCode) >= 200 &&
       (response.status || response.statusCode) < 300) {
    return response
  } else {
    let error = new Error(response.statusText)
    error.response = response
    throw error
  }
}
