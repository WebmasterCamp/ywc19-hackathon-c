import { getBills } from "@/api/admin/bills";
import Container from "@/components/Container";
import Stats from "@/components/Dashboard/Stats";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";
import { TBills, TBillsResponse } from "@/types/bills";
import { useEffect, useState } from "react";

const Dashboard = () => {
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

  const [bills, setBills] = useState<TBills[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data }: TBillsResponse = await getBills();
      setBills(data);
    };

    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <Container className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <Stats stats={stats} />
        <h2 className="font-bold">Latest Bills</h2>
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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4"></td>
              </tr>
            ))}
        </Table>
      </Container>
    </AdminLayout>
  );
};

export default Dashboard;
