"use client";

import Heading from "@/components/ui/Heading";
import { Apilist } from "@/components/ui/api-list";
import { Button } from "@/components/ui/button";
import { DataTable } from "@/components/ui/data-table";
import { Separator } from "@/components/ui/separator";
import { Plus } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { SizeColumn, columns } from "./columns";

interface SizeClientProps {
  data: SizeColumn[];
}
export const SizesClient: React.FC<SizeClientProps> = ({ data }) => {
  const router = useRouter();
  const params = useParams();

  return (
    <>
      <div className="flex items-center justify-between">
        <Heading
          title={`Sizes (${data.length})`}
          description="Manage sizes for your store"
        />
        <Button onClick={() => router.push(`/${params.storeId}/sizes/new`)}>
          <Plus className="mr-2 h-4 w-4" />
          Add new
        </Button>
      </div>
      <Separator />
      <DataTable data={data} searchKey="name" columns={columns} />
      <Heading title="API" description="API calls for Sizes" />
      <Separator />
      <Apilist entityName="sizes" entitiyIdName="sizeId" />
    </>
  );
};
