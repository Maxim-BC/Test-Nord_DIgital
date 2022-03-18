const apiList = "https://jsonplaceholder.typicode.com/users";

export async function apiGetList() {
  const response = await fetch(apiList, {
    method: "GET",
    headers: {
      "Content-Type": "application/json;",
    },
  });
  const body = await response.json();
  return body;
}
