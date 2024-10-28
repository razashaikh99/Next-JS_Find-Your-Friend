import Image from "next/image";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const events = [
  {
    title: "Wedding Event",
    description: "This Event is related about Wedding",
    location: "Orangi Town, Karachi",
    thumbnail: "https://images.unsplash.com/photo-1522413452208-996ff3f3e740?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHdlZGRpbmclMjAlMjBldmVudHxlbnwwfHwwfHx8MA%3D%3D",
    // date: new Date().toLocaleDateString(),
  },
  {
    title: "Birthday Party Event",
    description: "This Event is related about Birtday Party",
    location: "Liyari Town, Karachi",
    thumbnail: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YmlydGhkYXklMjBwYXJ0eSUyMGV2ZW50fGVufDB8fDB8fHww",
    // date: new Date().toLocaleDateString(),
  },
  {
    title: "Anniversary Event",
    description: "This Event is related about Anniversary Party",
    location: "Nazimabad Town, Karachi",
    thumbnail: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW5uaXZlcnNhcnklMjBwYXJ0eSUyMGV2ZW50fGVufDB8fDB8fHww",
    // date: new Date().toLocaleDateString(),
  },
  {
    title: "Nikkah Event",
    description: "This Event is related about Nikkah Wedding",
    location: "Gulshan e Iqbal, Karachi",
    thumbnail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fG5pa2thaCUyMGV2ZW50fGVufDB8fDB8fHww",
    // date: new Date().toLocaleDateString,
  },
]

export default function Events() {
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl p-5 text-center">Events List</h1>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>thumbnail Image</TableHead>
          <TableHead className="w-[200px]">title</TableHead>
          <TableHead>description</TableHead>
          <TableHead>Location</TableHead>
          {/* <TableHead>date</TableHead> */}
        </TableRow>
      </TableHeader>
      <TableBody>
        {events.map((events) => (
          <TableRow key={events.title}>
            <TableCell className="text-right">
              <Image 
                src={events.thumbnail} height={80} width={80} className="rounded"
              />  
            </TableCell>
            <TableCell>{events.title}</TableCell>
            <TableCell>{events.description}</TableCell>
            <TableCell>{events.location}</TableCell>
            {/* <TableCell>{events.date}</TableCell> */}
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
