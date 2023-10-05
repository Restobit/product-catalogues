import { API_URL } from "../constants";
export async function getData(id?: string) {
  const res = id ? await fetch(`${API_URL}/${id}`) : await fetch(API_URL);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
