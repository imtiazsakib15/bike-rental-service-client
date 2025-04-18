import { useState } from "react";
import {
  useGetAllUsersQuery,
  useUpdateUserMutation,
} from "@/redux/features/user/userApi";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, MoreVertical, Shield, Trash2, Undo } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import TableRowSkeleton from "@/components/custom/Dashboard/Users/TableRowSkeleton";
import { TUser } from "@/types";
import { toast } from "sonner";

const Users = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRole, setSelectedRole] = useState("");

  const { data, isLoading, isError } = useGetAllUsersQuery({
    searchTerm,
    role: selectedRole,
  });
  const [updateUser] = useUpdateUserMutation();

  const users: TUser[] = data?.data;

  type TUpdateUserParams = {
    userId: string;
    newRole?: string;
    isActive?: boolean;
  };

  const handleUpdateUser = async ({
    userId,
    newRole,
    isActive,
  }: TUpdateUserParams) => {
    const result = await updateUser({
      userId,
      role: newRole,
      isActive,
    }).unwrap();

    if (result.error) {
      toast.error(result.error.message || "Failed to update user");
      return;
    }
    toast.success(result.message || "User updated successfully");
  };

  return (
    <div className="container mx-auto p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start gap-4 mb-6">
        <div>
          <h1 className="text-2xl font-bold flex items-center gap-2">
            <User className="h-6 w-6" />
            User Management
          </h1>
          <p className="text-muted-foreground">
            {users?.length || 0} registered users
          </p>
        </div>
        <div className="flex gap-2 w-full md:w-auto">
          <Input
            placeholder="Search users..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="md:max-w-xs"
          />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <Shield className="mr-2 h-4 w-4" />
                {selectedRole === "" ? "All Roles" : selectedRole}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem onSelect={() => setSelectedRole("")}>
                All Roles
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSelectedRole("user")}>
                Users
              </DropdownMenuItem>
              <DropdownMenuItem onSelect={() => setSelectedRole("admin")}>
                Admins
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Users Table */}
      <div className="rounded-md border">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Email</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Joined</TableHead>
              <TableHead>Status</TableHead>
              <TableHead className="text-right">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading ? (
              <>
                <TableRowSkeleton />
                <TableRowSkeleton />
                <TableRowSkeleton />
                <TableRowSkeleton />
                <TableRowSkeleton />
              </>
            ) : isError ? (
              <TableRow>
                <TableCell
                  colSpan={6}
                  className="text-center text-destructive h-24"
                >
                  Failed to load users
                </TableCell>
              </TableRow>
            ) : users?.length === 0 ? (
              <TableRow>
                <TableCell colSpan={6} className="text-center h-24">
                  No user found
                </TableCell>
              </TableRow>
            ) : (
              users?.map((user) => (
                <TableRow key={user._id}>
                  <TableCell className="font-medium">
                    <div className="flex items-center gap-2">
                      <User className="h-5 w-5 text-muted-foreground" />
                      {user.name}
                    </div>
                  </TableCell>
                  <TableCell>{user.email}</TableCell>
                  <TableCell>
                    <Badge
                      variant={user.role === "admin" ? "default" : "secondary"}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    {new Date(user.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge variant={user.isActive ? "default" : "destructive"}>
                      {user.isActive ? "Active" : "Inactive"}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="icon">
                          <MoreVertical className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem
                          onClick={() =>
                            handleUpdateUser({
                              userId: user._id,
                              newRole: user.role === "admin" ? "user" : "admin",
                            })
                          }
                        >
                          <Shield className="mr-2 h-4 w-4" />
                          {user.role === "admin"
                            ? "Demote to User"
                            : "Promote to Admin"}
                        </DropdownMenuItem>

                        {!user.isActive && (
                          <DropdownMenuItem
                            onClick={() =>
                              handleUpdateUser({
                                userId: user._id,
                                isActive: true,
                              })
                            }
                          >
                            <Undo className="mr-2 h-4 w-4" />
                            Reactivate User
                          </DropdownMenuItem>
                        )}

                        {user.isActive && (
                          <AlertDialog>
                            <AlertDialogTrigger asChild>
                              <div className="relative flex cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm text-destructive hover:bg-accent">
                                <Trash2 className="mr-2 h-4 w-4" />
                                Delete User
                              </div>
                            </AlertDialogTrigger>
                            <AlertDialogContent>
                              <AlertDialogHeader>
                                <AlertDialogTitle>
                                  Confirm Deletion
                                </AlertDialogTitle>
                                <AlertDialogDescription>
                                  Are you sure you want to delete {user.name}'s
                                  account?
                                </AlertDialogDescription>
                              </AlertDialogHeader>
                              <AlertDialogFooter>
                                <AlertDialogCancel>Cancel</AlertDialogCancel>
                                <AlertDialogAction
                                  onClick={() =>
                                    handleUpdateUser({
                                      userId: user._id,
                                      isActive: false,
                                    })
                                  }
                                  className="bg-destructive hover:bg-destructive/90"
                                >
                                  Delete User
                                </AlertDialogAction>
                              </AlertDialogFooter>
                            </AlertDialogContent>
                          </AlertDialog>
                        )}
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Users;
