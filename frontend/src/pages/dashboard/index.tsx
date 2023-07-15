import Container from "@/components/Container";
import Stats from "@/components/Dashboard/Stats";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";

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

  const people = [
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "jane.cooper@example.com",
    },
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "jane.cooper@example.com",
    },
    {
      name: "Jane Cooper",
      title: "Regional Paradigm Technician",
      role: "Admin",
      email: "jane.cooper@example.com",
    },
  ];

  return (
    <AdminLayout>
      <Container className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
        <Stats stats={stats} />
        <h2 className="font-bold">Latest Bills</h2>
        <Table tableHead={["Name", "Title", "Email", "Role"]}>
          {people.map((person) => (
            <tr key={person.email}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                {person.name}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {person.title}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {person.email}
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                {person.role}
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

export default Dashboard;
