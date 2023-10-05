export interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  rating: Rating;
  image: string;
}

interface Rating {
  rate: number;
}
