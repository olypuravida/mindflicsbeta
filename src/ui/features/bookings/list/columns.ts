import type { GridColDef } from '@mui/x-data-grid'

const columns: GridColDef[] = [
  {
    field: 'id',
    headerName: 'ID',
    width: 80,
  },
  {
    field: 'roomId',
    headerName: 'Room',
    flex: 1,
    minWidth: 200,
    // renderCell: ({ row }) => `${row.room?.name} (${row.room?.hotel?.name})`,
  },
  {
    field: 'userId',
    headerName: 'User',
    flex: 1,
    minWidth: 200,
    // renderCell: ({ row }) => `${row.user?.name} (${row.user?.email})`,
  },
  {
    field: 'checkIn',
    headerName: 'Check in',
    width: 110,
  },
  {
    field: 'checkOut',
    headerName: 'Check out',
    width: 110,
  },
]

export default columns
