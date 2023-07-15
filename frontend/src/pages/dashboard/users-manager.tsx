import { getUsers } from "@/api/admin/users";
import Container from "@/components/Container";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";
import { TUsers, TUsersResponse } from "@/types/users";
import { useEffect, useState } from "react";

const UsersManager = () => {
  const [users, setUsers] = useState<any>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const { data }: TUsersResponse = await getUsers();
      setUsers(data);
    };

    fetchUsers();
  }, []);

  return (
    <AdminLayout>
      <Container className="space-y-4">
        <h1 className="text-2xl font-semibold text-gray-900">Users Manager</h1>

        <Table tableHead={["ID", "Username", "Email", "Role"]}>
          {users.length != 0 &&
            users.map((user: TUsers, index: number) => (
              <tr key={index}>
                <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                  {index + 1}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.username}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  {user.role}
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

export default UsersManager;
