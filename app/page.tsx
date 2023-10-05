//import { mockProducts } from "./constants";
import ProductList from "./Components/ProductList";
import { getData } from "./services/asyncFunctions";

export default async function Home() {
  const products = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <ProductList products={products} />
    </main>
  );
}
