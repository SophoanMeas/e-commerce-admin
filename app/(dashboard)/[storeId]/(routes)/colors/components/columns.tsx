"use client"

import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

import { Button } from "@/components/ui/button/button"
import CellAction from "./cell-action"

export type ColorColumn = {
    id: string
    name: string
    value: string
    createdAt: string
    modifiedAt: string
}

export const columns: ColumnDef<ColorColumn>[] = [
    {
        accessorKey: "name",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Name
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "value",
        header: ({ column }) => {
            return (
                <Button className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Value
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
        cell: ({ row }) => (
            <div className="flex items-center gap-x-2">
                <div className="h-6 w-6 rounded-full border" style={{ backgroundColor: row.original.value }} />
            </div>
        )
    },
    {
        accessorKey: "createdAt",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Created At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>
            )
        },
    },
    {
        accessorKey: "modifiedAt",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Modified At
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>

            )
        },
    },
    {
        id: "action",
        header: ({ column }) => {
            return (
                <Button
                    className="pl-0"
                    variant="sortButton"
                    onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
                >
                    Action
                    <ArrowUpDown className="ml-2 h-4 w-4" />
                </Button>

            )
        },
        cell: ({ row }) => <CellAction data={row.original} />
    }
]