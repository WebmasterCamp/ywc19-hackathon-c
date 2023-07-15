type TProducts = {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  createdAt: string;
};

type TProductsResponse = {
  status: boolean;
  data: TProducts[];
};

export type { TProducts, TProductsResponse };
