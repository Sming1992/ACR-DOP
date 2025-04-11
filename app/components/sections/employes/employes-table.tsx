"use client";
import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Pagination, PaginationContent, PaginationItem, PaginationLink } from "@/components/ui/pagination";

const employees = [
    { id: 1, name: "John Doe", cpf: "123.456.789-00", email: "john.doe@example.com", department: "Engineering", mobile: "+55 11 98765-4321", status: "Active" },
    { id: 2, name: "Jane Smith", cpf: "987.654.321-00", email: "jane.smith@example.com", department: "Marketing", mobile: "+55 21 91234-5678", status: "Inactive" },
    { id: 3, name: "Alice Johnson", cpf: "456.789.123-00", email: "alice.johnson@example.com", department: "HR", mobile: "+55 31 99876-5432", status: "Active" },
    { id: 4, name: "Bob Williams", cpf: "321.654.987-00", email: "bob.williams@example.com", department: "Finance", mobile: "+55 41 93456-7890", status: "Inactive" },
    { id: 5, name: "Charlie Brown", cpf: "654.321.987-00", email: "charlie.brown@example.com", department: "Sales", mobile: "+55 51 98712-3456", status: "Active" },
    { id: 6, name: "David Miller", cpf: "741.852.963-00", email: "david.miller@example.com", department: "IT", mobile: "+55 61 92345-6789", status: "Inactive" },
    { id: 7, name: "Emma Wilson", cpf: "369.258.147-00", email: "emma.wilson@example.com", department: "Legal", mobile: "+55 71 91234-5670", status: "Active" },
    { id: 8, name: "Frank Harris", cpf: "852.147.369-00", email: "frank.harris@example.com", department: "Operations", mobile: "+55 81 96789-1234", status: "Inactive" },
    { id: 9, name: "Grace Adams", cpf: "963.741.258-00", email: "grace.adams@example.com", department: "Customer Support", mobile: "+55 91 98765-1234", status: "Active" },
    { id: 10, name: "Henry Scott", cpf: "147.369.852-00", email: "henry.scott@example.com", department: "Product Management", mobile: "+55 41 91234-8765", status: "Inactive" },
    { id: 11, name: "Ivy Martinez", cpf: "258.963.741-00", email: "ivy.martinez@example.com", department: "Research & Development", mobile: "+55 51 92345-6789", status: "Active" },
    { id: 12, name: "Jack Robinson", cpf: "369.852.147-00", email: "jack.robinson@example.com", department: "Business Development", mobile: "+55 61 98765-4321", status: "Inactive" },
    { id: 13, name: "Kelly Thompson", cpf: "741.963.852-00", email: "kelly.thompson@example.com", department: "Security", mobile: "+55 71 93456-7890", status: "Active" },
    { id: 14, name: "Leo White", cpf: "852.369.147-00", email: "leo.white@example.com", department: "Administration", mobile: "+55 81 91234-5678", status: "Inactive" },
    { id: 15, name: "Mia Lewis", cpf: "963.258.741-00", email: "mia.lewis@example.com", department: "Training & Development", mobile: "+55 91 99876-5432", status: "Active" },
    { id: 16, name: "Nathan Green", cpf: "258.741.963-00", email: "nathan.green@example.com", department: "Sales", mobile: "+55 11 98745-3210", status: "Inactive" },
    { id: 17, name: "Olivia Brown", cpf: "369.741.852-00", email: "olivia.brown@example.com", department: "HR", mobile: "+55 21 91234-6789", status: "Active" },
    { id: 18, name: "Patrick Miller", cpf: "147.852.369-00", email: "patrick.miller@example.com", department: "Engineering", mobile: "+55 31 98765-4321", status: "Inactive" },
    { id: 19, name: "Quinn Carter", cpf: "852.741.369-00", email: "quinn.carter@example.com", department: "Legal", mobile: "+55 41 92345-6789", status: "Active" },
    { id: 20, name: "Rachel Adams", cpf: "741.369.852-00", email: "rachel.adams@example.com", department: "Finance", mobile: "+55 51 91234-5678", status: "Inactive" },
    { id: 21, name: "Sam Walker", cpf: "369.852.741-00", email: "sam.walker@example.com", department: "Operations", mobile: "+55 61 98765-4321", status: "Active" },
    { id: 22, name: "Tina Foster", cpf: "963.741.852-00", email: "tina.foster@example.com", department: "Marketing", mobile: "+55 71 99876-5432", status: "Inactive" },
    { id: 23, name: "Umar Harris", cpf: "147.963.852-00", email: "umar.harris@example.com", department: "IT", mobile: "+55 81 92345-6789", status: "Active" },
    { id: 24, name: "Vera Wilson", cpf: "852.963.741-00", email: "vera.wilson@example.com", department: "Customer Support", mobile: "+55 91 91234-5678", status: "Inactive" },
    { id: 25, name: "William Scott", cpf: "258.369.741-00", email: "william.scott@example.com", department: "Business Development", mobile: "+55 11 98712-3456", status: "Active" },
    { id: 26, name: "Xander Martin", cpf: "369.258.741-00", email: "xander.martin@example.com", department: "Training", mobile: "+55 21 91234-8765", status: "Inactive" },
    { id: 27, name: "Yasmine Lopez", cpf: "963.147.852-00", email: "yasmine.lopez@example.com", department: "Security", mobile: "+55 31 98765-6789", status: "Active" },
    { id: 28, name: "Zane Parker", cpf: "852.369.258-00", email: "zane.parker@example.com", department: "Product Management", mobile: "+55 41 92345-7890", status: "Inactive" },
    { id: 29, name: "Amelia Reed", cpf: "147.852.963-00", email: "amelia.reed@example.com", department: "Legal", mobile: "+55 51 91234-5678", status: "Active" },
    { id: 30, name: "Benjamin Young", cpf: "258.963.147-00", email: "benjamin.young@example.com", department: "Finance", mobile: "+55 61 98765-5432", status: "Inactive" },
  ];
  

const pageSize = 10;

export function EmployeesTable() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  // Filter and search logic
  const filteredEmployees = employees.filter((employee) => {
    const matchesSearch = [employee.name, employee.email, employee.department].some((field) =>
      field.toLowerCase().includes(search.toLowerCase())
    );
    const matchesStatus = statusFilter ? employee.status === statusFilter : true;
    return matchesSearch && matchesStatus;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredEmployees.length / pageSize);
  const paginatedEmployees = filteredEmployees.slice((currentPage - 1) * pageSize, currentPage * pageSize);

  return (
    <div className="space-y-4">
      {/* Search & Filter */}
      <div className="flex justify-between items-center gap-4">
        <Input
          placeholder="Search by name, email, or department..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-1/3"
        />
        <Select onValueChange={(value) => setStatusFilter(value === "all" ? "" : value)} value={statusFilter || "all"}>
  <SelectTrigger className="w-[200px]">
    <SelectValue placeholder="Filter by status" />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="all">All</SelectItem> {/* Use "all" instead of an empty string */}
    <SelectItem value="Active">Active</SelectItem>
    <SelectItem value="Inactive">Inactive</SelectItem>
  </SelectContent>
</Select>
      </div>

      {/* Table */}
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Serial No</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>CPF</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Mobile No</TableHead>
            <TableHead>Status</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {paginatedEmployees.map((employee, index) => (
            <TableRow key={employee.id}>
              <TableCell className="font-medium">{(currentPage - 1) * pageSize + index + 1}</TableCell>
              <TableCell>{employee.name}</TableCell>
              <TableCell>{employee.department}</TableCell>
              <TableCell>{employee.cpf}</TableCell>
              <TableCell>{employee.email}</TableCell>
              <TableCell>{employee.mobile}</TableCell>
              <TableCell>{employee.status}</TableCell>
              <TableCell className="text-right">
                {/* <Button variant="outline" size="sm">Edit</Button>
                <Button variant="destructive" size="sm" className="ml-2">Delete</Button> */}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <Pagination>
        <PaginationContent>
          <PaginationItem>
            <Button disabled={currentPage === 1} variant="outline" onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}>
              Previous
            </Button>
          </PaginationItem>
          {[...Array(totalPages)].map((_, i) => (
            <PaginationItem key={i}>
              <PaginationLink isActive={i + 1 === currentPage} onClick={() => setCurrentPage(i + 1)}>
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
          <PaginationItem>
            <Button disabled={currentPage === totalPages} variant="outline" onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}>
              Next
            </Button>
          </PaginationItem>
        </PaginationContent>
      </Pagination>
    </div>
  );
}
