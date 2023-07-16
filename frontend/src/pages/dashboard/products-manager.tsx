import { getProducts } from "@/api/admin/products";
import ActionPanel from "@/components/Admin/ActionPanel";
import Input from "@/components/Admin/Input";
import Container from "@/components/Container";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";
import { TProducts, TProductsResponse } from "@/types/products";
import { useEffect, useState } from "react";

const ProductsManager = () => {
  const [products, setProducts] = useState<TProducts[]>([]);

  const [selectedProduct, setSelectedProduct] = useState<TProducts | null>(
    null
  );
  const [isOpenEditPanel, setIsOpenEditPanel] = useState<boolean>(false);

  const handleEditSubmit = () => {
    console.log("Edit");
  };

  const handleDeleteSubmit = (product: TProducts) => {
    console.log("Delete", product);
  };

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
            products.map((product: TProducts, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.description.slice(0, 50)}...
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {product.price}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <button
                    onClick={() => {
                      setSelectedProduct(product);
                      setIsOpenEditPanel(true);
                    }}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteSubmit(product);
                    }}
                    className="text-red-600 hover:text-indigo-900"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
        </Table>
      </Container>

      <ActionPanel
        handleSubmit={handleEditSubmit}
        open={isOpenEditPanel}
        setOpen={setIsOpenEditPanel}
      >
        <h2>Edit {selectedProduct?.name}</h2>

        <div className="space-y-4">
          <Input label="Username" placeholder="Username" type="text" />
          <Input label="Products" placeholder="Products" type="text" />
        </div>
      </ActionPanel>
    </AdminLayout>
  );
};

export default ProductsManager;
