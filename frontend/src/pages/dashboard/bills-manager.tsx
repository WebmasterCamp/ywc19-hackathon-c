import { getBills } from "@/api/admin/bills";
import Container from "@/components/Container";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";
import { TBills, TBillsResponse } from "@/types/bills";
import { useEffect, useState } from "react";

const BillsManager = () => {
  const [bills, setBills] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data }: TBillsResponse = await getBills();
      setBills(data);
      console.log(data);
    };

    fetchUsers();
  }, []);
  return (
    <AdminLayout>
      <Container className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">Bills Manager</h1>

        <Table tableHead={["ID", "CreatedAt", "User", "Products"]}>
          {bills.length != 0 &&
            bills.map((bill: TBills, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {new Date(bill.createdAt.seconds * 1000).toLocaleString()}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bill.users.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {bill.products.map((product: any, index: number) => (
                    <div key={index}>{product.name}</div>
                  ))}
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

export default BillsManager;
