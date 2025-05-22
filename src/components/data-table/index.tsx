import React from 'react';
import { TablePaginationProps } from '@mui/material';
import MuiPagination from '@mui/material/Pagination';
import {
  DataGrid,
  DataGridProps,
  gridPageCountSelector,
  GridPagination,
  useGridApiContext,
  useGridSelector,
} from '@mui/x-data-grid';

import { TBaseParams } from './types';

function Pagination({
  page,
  onPageChange,
  className,
}: Pick<TablePaginationProps, 'page' | 'onPageChange' | 'className'>) {
  const apiRef = useGridApiContext();
  const pageCount = useGridSelector(apiRef, gridPageCountSelector);

  return (
    <MuiPagination
      color="primary"
      className={className}
      count={pageCount}
      page={page + 1}
      shape="rounded"
      onChange={(event, newPage) => {
        onPageChange(event as any, newPage - 1);
      }}
    />
  );
}

function CustomPagination(props: any) {
  return <GridPagination ActionsComponent={Pagination} {...props} />;
}

export interface DataTableProps
  extends Omit<DataGridProps, 'pageSizeOptions' | 'paginationModel' | 'paginationMode' | 'rowCount'> {
  handleChange: (pagination: Pick<TBaseParams, 'page' | 'limit'>) => void;
  paginationInfo: {
    total?: number;
    page_size: number;
    page: number;
  };
  getRowId?: (row: any) => any;
}

const DataTable = ({ handleChange, paginationInfo, getRowId, ...others }: DataTableProps) => {
  return (
    <DataGrid
      {...others}
      getRowId={getRowId}
      paginationMode="server"
      // paginationModel={{
      //   pageSize: paginationInfo.page_size,
      //   page: paginationInfo.page,
      // }}
      // rowCount={paginationInfo.total}
      pageSizeOptions={[10]}
      disableRowSelectionOnClick
      checkboxSelection={false}
      // pagination={false}
      slots={{
        pagination: CustomPagination,
      }}
      disableColumnMenu
      sx={{
        '& .MuiTablePagination-displayedRows': {
          display: 'none',
        },
        '& .MuiTablePagination-actions': {
          display: 'none',
        },
      }}
      // onPaginationModelChange={(params) => {
      //   const page = params.page ? params.page + 1 : 1;
      //   handleChange({
      //     page,
      //     limit: params.pageSize,
      //   });
      // }}
    />
  );
};
export default DataTable;
