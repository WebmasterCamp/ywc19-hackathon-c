import { getProducts } from "@/api/admin/products";
import Container from "@/components/Container";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";
import { TProducts, TProductsResponse } from "@/types/products";
import { useEffect, useState } from "react";

const ProductsManager = () => {
  const [products, setProducts] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data }: TProductsResponse = await getProducts();
      setProducts(data);
    };

    fetchUsers();
  }, []);
  return (
    <AdminLayout>
      <Container className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">
          Products Manager
        </h1>

        <Table tableHead={["ID", "Name", "Description", "Price"]}>
          {products.length != 0 &&
            products.map((user: TProducts, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.description.slice(0, 50)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                  <a href="#" className="text-indigo-600 hover:text-indigo-900">
                    Edit
                  </a>
                </td>
              </tr>
            ))}
        </Table>
      </Container>
    </AdminLayout>
  );
};

export default ProductsManager;
