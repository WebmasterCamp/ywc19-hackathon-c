import { getProducts } from "@/api/admin/products";
import ActionPanel from "@/components/Admin/ActionPanel";
import Input from "@/components/Admin/Input";
import Container from "@/components/Container";
import Stats from "@/components/Dashboard/Stats";
import Table from "@/components/Dashboard/Table";
import Hero from "@/components/Home/Hero";
import { TProducts, TProductsResponse } from "@/types/products";

import Image from "next/image";
import { useEffect, useState } from "react";

const Analytics = () => {
  const stats = [
    {
      name: "Total Subscribers",
      stat: "71,897",
      previousStat: "70,946",
      change: "12%",
      changeType: "increase",
    },
    {
      name: "Avg. Open Rate",
      stat: "58.16%",
      previousStat: "56.14%",
      change: "2.02%",
      changeType: "increase",
    },
    {
      name: "Avg. Click Rate",
      stat: "24.57%",
      previousStat: "28.62%",
      change: "4.05%",
      changeType: "decrease",
    },
  ];
  const [products, setProducts] = useState<TProducts[]>([]);
  useEffect(() => {
    const fetchUsers = async () => {
      const { data }: TProductsResponse = await getProducts();
      setProducts(data);
    };

    fetchUsers();
  }, []);

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

  return (
    <div>
      <Hero />
      <div className="mt-8">
        <Stats stats={stats} />

        <Container className="space-y-4 my-8">
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
        <div className="relative w-full aspect-square">
          <Image
            src="/charts.webp"
            fill={true}
            alt=""
            className="object-contain"
          />
        </div>
      </div>
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
    </div>
  );
};
export default Analytics;
