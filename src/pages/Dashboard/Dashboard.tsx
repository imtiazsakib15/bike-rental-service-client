import { DollarSign } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";
import { LineChart, Line, ResponsiveContainer } from "recharts";

const Dashboard = () => {
  // Sample data
  const stats = [
    { title: "Total Rentals", value: "1,234", trend: "+12%" },
    { title: "Active Bikes", value: "45", trend: "+5%" },
    { title: "Revenue", value: "$23,450", trend: "+18%" },
  ];

  const recentRentals = [
    {
      id: 1,
      bike: "Mountain Pro X1",
      user: "Sarah J.",
      status: "active",
      date: "2024-03-15",
    },
    {
      id: 2,
      bike: "Urban Commuter",
      user: "Mike C.",
      status: "completed",
      date: "2024-03-14",
    },
    {
      id: 3,
      bike: "Adventure Tourer",
      user: "Emma W.",
      status: "cancelled",
      date: "2024-03-13",
    },
  ];

  return (
    <main className="flex-1 p-4 md:p-6 overflow-y-auto">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {stats.map((stat) => (
          <Card key={stat.title}>
            <CardHeader className="flex flex-row items-center justify-between pb-2">
              <CardTitle className="text-sm font-medium">
                {stat.title}
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <div className="text-xs text-muted-foreground mt-1">
                <span className="text-green-500">{stat.trend}</span> last month
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Chart */}
      <Card className="mb-6">
        <CardHeader>
          <CardTitle>Rental Activity</CardTitle>
        </CardHeader>
        <CardContent className="h-64">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={[]}>
              <Line type="monotone" dataKey="uv" stroke="#3b82f6" />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* Recent Rentals Table */}
      <Card>
        <CardHeader>
          <CardTitle>Recent Rentals</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Bike</TableHead>
                <TableHead>User</TableHead>
                <TableHead>Date</TableHead>
                <TableHead>Status</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {recentRentals.map((rental) => (
                <TableRow key={rental.id}>
                  <TableCell className="font-medium">{rental.bike}</TableCell>
                  <TableCell>{rental.user}</TableCell>
                  <TableCell>{rental.date}</TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        rental.status === "active"
                          ? "default"
                          : rental.status === "completed"
                          ? "secondary"
                          : "destructive"
                      }
                    >
                      {rental.status}
                    </Badge>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </main>
  );
};

export default Dashboard;
