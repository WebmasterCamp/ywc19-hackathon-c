type TUsers = {
  id: string;
  username: string;
  email: string;
  role: "ADMIN" | "USER";
  createdAt: string;
};

type TUsersResponse = {
  status: boolean;
  data: TUsers[];
};

export type { TUsers, TUsersResponse };
