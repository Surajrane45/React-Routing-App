export default function FetchApi(url,api_method,api_header,api_body) {
  return fetch(url,{
    method: api_method,
    header: api_header,
    body: api_body
  })
  .then(response => {
    return response.json();
  })
}

