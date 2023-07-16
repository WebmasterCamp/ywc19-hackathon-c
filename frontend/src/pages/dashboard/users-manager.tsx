import { getUsers } from "@/api/admin/users";
import ActionPanel from "@/components/Admin/ActionPanel";
import Input from "@/components/Admin/Input";
import Container from "@/components/Container";
import Table from "@/components/Dashboard/Table";
import AdminLayout from "@/layouts/AdminLayout";
import { TUsers, TUsersResponse } from "@/types/users";
import { useEffect, useState } from "react";

const UsersManager = () => {
  const [users, setUsers] = useState<TUsers[]>([]);

  const [selectedUser, setSelectedUser] = useState<TUsers | null>(null);
  const [isOpenEditPanel, setIsOpenEditPanel] = useState<boolean>(false);

  const handleEditSubmit = () => {
    console.log("Edit");
  };

  const handleDeleteSubmit = (user: TUsers) => {
    console.log("Delete", user);
  };

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
                <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium space-x-4">
                  <button
                    onClick={() => {
                      setSelectedUser(user);
                      setIsOpenEditPanel(true);
                    }}
                    className="text-indigo-600 hover:text-indigo-900"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => {
                      handleDeleteSubmit(user);
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
        <h2>Edit {selectedUser?.username}</h2>

        <div className="space-y-4">
          <Input label="Username" placeholder="Username" type="text" />
          <Input label="Products" placeholder="Products" type="text" />
        </div>
      </ActionPanel>
    </AdminLayout>
  );
};

export default UsersManager;
