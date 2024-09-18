"use client";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { PoolDayData } from "@/types";
import { useQuery } from "urql";

const QUERY = `{
  poolDayDatas(first: 30, orderDirection: desc, orderBy: date, where: {
    pool: "0x88e6a0c2ddd26feeb64f039a2c41296fcb3f5640",
  } ) {
    date
    liquidity
    sqrtPrice
    token0Price
    token1Price
    volumeToken0
    volumeToken1
  }
}`;

const ExampleComponent = () => {
  const [{ data, fetching, error }] = useQuery({ query: QUERY });

  if (fetching) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  if (data?.poolDayDatas?.length > 0) {
    return (
      <section className="flex items-center">
        <Table className="w-96">
          <TableHeader>
            <TableRow>
              <TableHead>Date</TableHead>
              <TableHead>ETH price</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {data?.poolDayDatas.map((invoice: PoolDayData) => (
              <TableRow key={invoice.date}>
                <TableCell className="font-medium">
                  {new Date(invoice.date * 1000).toLocaleDateString()}
                </TableCell>
                <TableCell>
                  {parseFloat(invoice.token0Price).toFixed(2)}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </section>
    );
  }

  return <p>No data found</p>;
};

const WrappedExampleComponent = () => <ExampleComponent />;

export default WrappedExampleComponent;
