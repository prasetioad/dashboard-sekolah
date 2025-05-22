import { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import SearchBar from "@/components/SearchBar";
import DataTable from "@/components/data-table";
import { GridColDef } from "@mui/x-data-grid";
import ImageViewer from "@/components/image-viewer";

type TScrining = {
  news_id: number;
  title: string;
  content: string;
  result: string;
  status: string;
  student_name: string;
  student_image: string;
};
function Screening() {
  const [keyword, setKeyword] = useState("");

  const data: any = [
    {
      id: 1,
      registration_number: "SEC-2069291854S",
      student_name: "Alfredo Curtis",
      origin_school: "SMPK BPK PENABUR Bandar Lampung",
      status: "Screening Test",
      result: "Accepted",
      action: "See detail",
      student_image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
    {
      id: 2,
      registration_number: "SEC-1960380456R",
      student_name: "Adison Carder",
      origin_school: "SMPK BPK PENABUR Bandar Lampung",
      status: "Screening Test",
      result: "Accepted",
      action: "See detail",
      student_image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
    {
      id: 3,
      registration_number: "REX-2069293854S",
      student_name: "Scarlett Fatimah",
      origin_school: "SDN 1 Jakarta",
      status: "Screening Test",
      result: "Accepted",
      action: "See detail",
      student_image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
    {
      id: 4,
      registration_number: "REX-2069295854S",
      student_name: "Scarlett Fatimah",
      origin_school: "SDN 1 Jakarta",
      status: "Screening Test",
      result: "Idle",
      action: "See detail",
      student_image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
    {
      id: 5,
      registration_number: "REX-2069295854S",
      student_name: "Scarlett",
      origin_school: "SDN 1 Jakarta",
      status: "Screening Test",
      result: "Rejected",
      action: "See detail",
      student_image: "https://fastly.picsum.photos/id/10/2500/1667.jpg?hmac=J04WWC_ebchx3WwzbM-Z4_KC_LeLBWr5LZMaAkWkF68"
    },
  ].filter((item) =>
    item.student_name.toLowerCase().includes(keyword.toLowerCase())
  );

  const getTableColumn = ({}) => {
    const columns: GridColDef<TScrining>[] = [
      {
        field: "registration_number",
        headerName: "Registration Number",
        minWidth: 200,
        sortable: false,
        // flex: 1,
      },
      {
        field: "student_name",
        headerName: "Student Name",
        minWidth: 200,
        // flex: 1,
        sortable: false,
        renderCell : (params) => {
          return (
            <div className="flex items-center gap-2">
              {params.row.student_image && (<ImageViewer key={params.row.student_name} image={params.row.student_image ?? ""}  styles={{borderRadius: 50}} height={50} width={50}/>)}
              <div className="text-black">
                {params.row.student_name}
              </div>
            </div>
          )
          
        }
      },
      {
        field: "origin_school",
        headerName: "Origin School",
        minWidth: 200,
        flex: 1,
        sortable: false,
      },
      {
        field: "status",
        headerName: "Status",
        minWidth: 160,
        // maxWidth: 200,
        // flex: 1,
        sortable: false,
        renderCell: (params) => {
          return (
            <div className="flex justify-center items-center h-full">
              {params.row.status === "Screening Test"  && (
                <div className={`bg-red-100 text-red-800 font-medium px-4 py-2 rounded-full text-sm`} style={{backgroundColor: "#7957DA", color: "white"}}>
                {params.row.status}
              </div>
              )}
              
            </div>
          );
        },
      },
      {
        field: "result",
        headerName: "Result",
        minWidth: 150,
        // flex: 1,
        sortable: false,
        renderCell: (params) => {
          return (
            <div className="flex justify-center items-center h-full">
              {params.row.result === "Accepted" ? (
                <div
                  className={`bg- text-white font-medium px-4 py-2 rounded-full text-sm`} style={{backgroundColor: "#6EC207", color: "white"}}
                >
                  {params.row.result}
                </div>
              ) : 
              params.row.result === "Idle" ? (
                <div
                  className={`bg-gray-400 text-white font-medium px-4 py-2 rounded-full text-sm`} style={{backgroundColor: "#B7B7B7", color: "white"}}
                >
                  {params.row.result}
                </div>
              ) : 
              (
                <div
                  className={`bg-green-800 text-white font-medium px-4 py-2 rounded-full text-sm`} style={{backgroundColor: "#DB0000", color: "white"}}
                >
                  {params.row.result}
                </div>
              )}
            </div>
          );
        },
      },
      // {
      //   field: "action",
      //   headerName: "Action",
      //   minWidth: 100,
      //   sortable: false,
      //   renderCell: (params) => {
      //     return (
      //       <div className="flex justify-center items-center h-full hover:bg-gray-100 cursor-pointer">
      //         <div>See detail</div>
      //       </div>
      //     );
      //   },
      // },
    ];
    return columns;
  };
  return (
    <div className="flex bg-white p-4">
      <Grid container spacing={2} className="w-full">
        <Grid size={10}>
          <div className="text-lg font-semibold">Student Screening Records</div>
          <div className="text-xs text-grey">
            Displaying student data sorted by most recent entries.
          </div>
        </Grid>
        <Grid size={2} className="flex justify-end items-start">
          <Button
            variant="outlined"
            startIcon={<AddIcon />}
            sx={{ textTransform: "none" }}
            href="/registration"
          >
             {/* <div className="text-lg font-semibold">New Screening</div> */}
            <Typography variant="body2">New Screening</Typography>
          </Button>
        </Grid>
        <Grid size={12}>
          <SearchBar
            keyword={keyword}
            setKeyword={setKeyword}
            placeholder="Search...."
            withFilter={true}
          />
        </Grid>
        <Grid size={12}>
          <DataTable
            // loading={query.isLoading}
            rows={data}
            columns={getTableColumn({
              // onDelete: (row) => {
              //   setId(row.news_id);
              //   setDeletePopup(true);
              // },
              // onEdit: (row) => {
              //   router.push(route(paths.marketing.news.update, { id: row.news_id }));
              // },
              // onDetail: (row) => {
              //   setId(row.news_id);
              //   setDetailPopup(true);
              // },
            })}
            // checkboxSelection
            paginationInfo={{
              page: 1,
              page_size: 10,
              total: 0,
            }}
            handleChange={(pagination) => {}}
            // getRowId={(row: TNews) => row.news_id}
            slots={{
              pagination: () => null, // <- hide pagination component
            }}
          />
        </Grid>
        {/* </Card> */}
      </Grid>
    </div>
  );
}

export default Screening;
