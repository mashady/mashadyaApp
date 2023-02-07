import http from "./httpService";

const apiEndpoint = "/lists";

function listUrl(id) {
  return `${apiEndpoint}/${id}`;
}

export function getLists() {
  return http.get(apiEndpoint);
}

export function getList(id) {
  return http.get(listUrl(id));
}

export function saveList(list) {
  // Update
  if (list._id) {
    const body = { ...list };
    delete body._id;
    return http.put(listUrl(list._id), body);
  }

  // Create
  return http.post(apiEndpoint, list);
}

export function deleteList(id) {
  return http.delete(listUrl(id));
}
