import Image from "next/image";
import Link from 'next/link';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

export default function Dashboard() {
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl p-20 text-center">Dashboard Page</h1>
      <Table className="">
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[200px]">Users ID</TableHead>
            <TableHead>User Name</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Last Active</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">YSD453</TableCell>
            <TableCell>Afzal Ahmed</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>25 Oct 2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">KSD345</TableCell>
            <TableCell>Umer Siddique</TableCell>
            <TableCell>Un Active</TableCell>
            <TableCell>30 Sep 2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">FDK752</TableCell>
            <TableCell>Jaweed Arsal</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>18 Oct 2024</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">NSB834</TableCell>
            <TableCell>Majid Farooq</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>21 Oct 2024</TableCell>
          </TableRow>
        </TableBody>
      </Table>

    </div>
  );
}
