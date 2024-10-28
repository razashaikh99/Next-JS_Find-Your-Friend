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

const user = [
  {
    fullName: "Muhammad Akbar Ahmed",
    email: "akbarahmed@gmail.com",
    location: "Orangi Town, Karachi",
    profileImage: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    events: 4,
  },
  {
    fullName: "Muddassir Iqbal",
    email: "muddassir64@gmail.com",
    location: "Johar Town, Lahore",
    profileImage: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    events: 5,
  },
  {
    fullName: "Afzal Ur Rehman",
    email: "afzalrehman@gmail.com",
    location: "Gulberg Town, Karachi",
    profileImage: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    events: 3,
  },
  {
    fullName: "Muhammad Saad Raza",
    email: "saadraza@gmail.com",
    location: "Korangi Town, Karachi",
    profileImage: "https://images.unsplash.com/photo-1503235930437-8c6293ba41f5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NTl8fHByb2ZpbGUlMjBhdmF0YXJ8ZW58MHx8MHx8fDA%3D",
    events: 7,
  }
]

export default function Users() {
  return (
    <div className="min-h-screen">
      <h1 className="font-bold text-3xl p-5 text-center">Users List</h1>
      <Table>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[150px]">Full Name</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Location</TableHead>
          <TableHead>Profile Image</TableHead>
          <TableHead>Total Events</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {user.map((user) => (
          <TableRow key={user.fullName}>
            <TableCell className="text-right">
              <Image 
                src={user.profileImage} height={60} width={60} className="rounded-full"
              />  
            </TableCell>
            <TableCell>{user.fullName}</TableCell>
            <TableCell>{user.email}</TableCell>
            <TableCell>{user.location}</TableCell>
            <TableCell>{user.events}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
    </div>
  );
}
