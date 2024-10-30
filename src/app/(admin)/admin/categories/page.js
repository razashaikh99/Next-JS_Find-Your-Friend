import Image from "next/image";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"

const categories = [
  {
    title: "Kids Cloths",
    description: "This Category is related Kids Cloths",
    thumbnail: "https://images.unsplash.com/photo-1540479859555-17af45c78602?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDJ8fEtpZHMlMjBDbG90aHN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Mens Watches",
    description: "This Category is related about Mens Watches",
    thumbnail: "https://images.unsplash.com/photo-1703505841379-2f863b201212?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fE1lbnMlMjBXYXRjaGVzfGVufDB8fDB8fHww",
  },
  {
    title: "Perfumes",
    description: "This Category is related about Perfumes",
    thumbnail: "https://images.unsplash.com/photo-1716978499366-d5a84bf1fe70?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fFBlcmZ1bWVzfGVufDB8fDB8fHww",
  },
  {
    title: "Electronic Accessories",
    description: "This Category is related about Electronic Accessories",
    thumbnail: "https://images.unsplash.com/photo-1630080644615-0b157f1574ec?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTF8fEVsZWN0cm9uaWMlMjBBY2Nlc3Nvcmllc3xlbnwwfHwwfHx8MA%3D%3D",
  },
]

export default function Categories() {
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl p-5 text-center">Categories List</h1>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Thumbnail</TableHead>
          <TableHead className="w-[200px]">Title</TableHead>
          <TableHead>Description</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {categories.map((categories) => (
          <TableRow key={categories.title}>
            <TableCell className="text-right">
              <Image 
                src={categories.thumbnail} height={80} width={80} className="rounded"
              />  
            </TableCell>
            <TableCell>{categories.title}</TableCell>
            <TableCell>{categories.description}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
