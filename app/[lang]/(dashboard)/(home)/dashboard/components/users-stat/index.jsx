"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Icon } from "@iconify/react";
import UsersDataChart from "./users-data-chart";
import UsersDataTable from "./users-data-table";

const UsersStat = () => {
  const users = [
    {
      id: 1,
      country: "Owners",
      count: "05",
    },
    {
      id: 2,
      country: "Buyers",
      count: "06",
    },
    {
      id: 3,
      country: "Tenants",
      count: "06",
    },
    {
      id: 4,
      country: "Commercial",
      count: "10",
    },
    {
      id: 5,
      country: "Sellers",
      count: "08",
    },
  ];
  return (
    <Card>
      <CardHeader className="border-none pb-0 mb-5">
        <div className="flex items-center gap-1">
          <div className="flex-1">
            <div className="text-xl font-semibold text-default-900"> Contacts </div>
            <span className="text-xs text-default-600 ml-1">In Last 30 Days</span>
          </div>
          <div className="flex-none flex items-center gap-1">
            <span className="text-4xl font-semibold text-primary">63</span>
            <span className="text-2xl text-success">
              <Icon icon="heroicons:arrow-trending-up-16-solid" />
            </span>
          </div>
        </div>
      </CardHeader>
      <CardContent className="px-5 pb-0">
        <p className="text-xs font-medium text-default-800">Contact Acquisition</p>
        <UsersDataChart />
        <UsersDataTable users={users} />
      </CardContent>
    </Card>
  );
};

export default UsersStat;