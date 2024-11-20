"use client"
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Icon } from "@iconify/react";
import { Cup, Eye, Increase, Session } from "@/components/svg";

const ReportsArea = () => {
  const reports = [
    {
      id: 1,
      name: "Avg Listings",
      count: "38",
      rate: "7.6",
      isUp: false,
      icon: <Session className="h-4 w-4" />,
      color: "primary",
    },
    {
      id: 2,
      name: "Avg Sales",
      count: "14",
      rate: "5",
      isUp: false,
      icon: <Eye className="h-4 w-4" />,
      color: "info",
    },
    {
      id: 3,
      name: "Avg Conversion",
      count: "67 Days",
      rate: "22",
      isUp: true,
      icon: <Increase className="h-4 w-4" />,
      color: "warning",
    },
    {
      id: 4,
      name: "Avg Floor Size",
      count: "357 m²",
      rate: "30",
      isUp: false,
      icon: <Cup className="h-4 w-4" />,
      color: "destructive",
    },
  ];
  return (
    <>
      {reports.map((item, index) => (
        <Card key={`report-card-${index}`} >
          <CardHeader className="flex-col-reverse sm:flex-row flex-wrap gap-2  border-none mb-0 pb-0">
            <span className="text-sm font-medium text-default-900 flex-1">{item.name}</span>
            <span className={cn("flex-none h-9 w-9 flex justify-center items-center bg-default-100 rounded-full", {
              "bg-primary bg-opacity-10 text-primary": item.color === "primary",
              "bg-info bg-opacity-10 text-info": item.color === "info",
              "bg-warning bg-opacity-10 text-warning": item.color === "warning",
              "bg-destructive bg-opacity-10 text-destructive": item.color === "destructive",
            })}>{item.icon}</span>
          </CardHeader>
          <CardContent className="pb-4 px-4">
            <div className="text-2xl font-semibold text-default-900 mb-2.5">{item.count}</div>
            <div className="flex items-center font-semibold gap-1">
              {
                item.isUp ? <>
                  <span className="text-success">{item.rate}%</span>
                  <Icon icon="heroicons:arrow-trending-up-16-solid" className="text-success text-xl" />
                </>
                  :
                  <>
                    <span className="text-destructive">{item.rate}</span>
                    <Icon icon="heroicons:arrow-trending-down-16-solid" className="text-destructive text-xl" />
                  </>
              }
            </div>
            <div className="mt-1 text-xs text-default-600">vs Previous 30 Days</div>
          </CardContent>
        </Card>
      ))}
    </>

  );
};

export default ReportsArea;