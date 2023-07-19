import { getGraphRevenue } from "@/actions/get-graph-revenue";
import { getSalesCount } from "@/actions/get-sales-count";
import { getStockCount } from "@/actions/get-stock-count";
import { getTotalRevenue } from "@/actions/get-total-revenue";
import Overview from "@/components/overview";
import Heading from "@/components/ui/Heading";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { formatter } from "@/lib/utils";
import { CreditCard, DollarSign, Package } from "lucide-react";

interface DashBoardPageProps {
  params: { storeId: string };
}
const DashBoardPage: React.FC<DashBoardPageProps> = async ({ params }) => {
  const totalRevenue = await getTotalRevenue(params.storeId);
  const salesCount = await getSalesCount(params.storeId);
  const stockCount = await getStockCount(params.storeId);
  const graphRevenue = await getGraphRevenue(params.storeId);
  return (
    <div className="flex-col ">
      <div className="flex-1 space-y-4 p-6 pt-6">
        <Heading title="Dashborad" description="Overview of your store" />
        <div className="grid gap-4 grid-cols-3 ">
          {/* CARD FOR REVENUE */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-23">
              <CardTitle className="text-sm font-medium">
                Total Revenue
              </CardTitle>
              <DollarSign className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">
                {formatter.format(totalRevenue)}
              </div>
            </CardContent>
          </Card>
          {/* CARD FOR SALES */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-23">
              <CardTitle className="text-sm font-medium">Sales</CardTitle>
              <CreditCard className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold"> +{salesCount} </div>
            </CardContent>
          </Card>
          {/* CARD FOR PRODUCTS IN STOCK */}
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-23">
              <CardTitle className="text-sm font-medium">
                Products In Stock
              </CardTitle>
              <Package className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold"> {stockCount} </div>
            </CardContent>
          </Card>
        </div>
        <Card className="col-span-4 ">
          <CardHeader>
            <CardTitle>Overview</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview data={graphRevenue} />
          </CardContent>
        </Card>
      </div>{" "}
    </div>
  );
};

export default DashBoardPage;
