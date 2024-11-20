"use client";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import BasicDataTable from "./basic-table";

const DataTablePage = () => {


  return (
    <div className=" space-y-5">
      <Card>
        <CardHeader>
          <CardTitle>Leads</CardTitle>
        </CardHeader>
        <CardContent className="p-0 mb-5">
          <BasicDataTable />
        </CardContent>
      </Card>

    </div>
  );
};

export default DataTablePage;
