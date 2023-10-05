export async function getData(id?: string) {
  const res = id
    ? await fetch(`https://fakestoreapi.com/products/${id}`)
    : await fetch("https://fakestoreapi.com/products");

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}
