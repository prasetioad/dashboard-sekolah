import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import SearchBar from "@/components/SearchBar";
import Table from "@/components/Table/Table";
import ImageViewer from "@/components/image-viewer";
import { TextField } from "@mui/material";
import CustomDatePicker from "@/hooks/CustomDatePicker";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { TDataTable, TScriningData } from "./type";
import { inputNational, dataArray } from "./Data";

function Screening() {
  const [keyword, setKeyword] = useState("");
  const [draft, setDraft] = useState<TScriningData | null>(null);
  const data: TDataTable[] = dataArray.filter((item) =>
    item.student_name.toLowerCase().includes(keyword.toLowerCase())
  );

  interface Column<T> {
    key: keyof T;
    label: string;
    render?: (val: T[keyof T], row: T) => React.ReactNode;
  }

  const columns: Column<TDataTable>[] = [
    {
      key: "registration_number",
      label: "Registration Number",
    },
    {
      key: "student_name",
      label: "Student Name",
      render: (val: string | number, row: TDataTable) => {
        return (
          <div className="flex items-center gap-2">
            {row?.student_image && (
              <ImageViewer
                key={row?.student_name}
                image={row?.student_image ?? ""}
                styles={{ borderRadius: 50 }}
                height={50}
                width={50}
              />
            )}
            <div className="text-black">{row?.student_name || ""}</div>
          </div>
        );
      },
    },
    {
      key: "origin_school",
      label: "Origin School",
    },
    {
      key: "status",
      label: "Status",
      render: (val: string | number, row: TDataTable) => {
        console.log("row", row, val);
        return (
          <div className="flex justify-center items-center h-full">
            {val === "Screening Test" && (
              <div
                className={`bg-red-100 text-red-800 font-medium px-4 py-2 rounded-full text-sm`}
                style={{ backgroundColor: "#7957DA", color: "white" }}
              >
                {val}
              </div>
            )}
          </div>
        );
      },
    },
    {
      key: "result",
      label: "Result",
      render: (val: string | number, row: TDataTable) => {
        let bgColor = "";
        if (row.result === "Accepted") {
          bgColor = "#6EC207";
        } else if (row.result === "Idle") {
          bgColor = "#B7B7B7";
        } else if (row.result === "Rejected") {
          bgColor = "#DB0000";
        }
        return (
          <div className="flex justify-center items-center h-full">
            <div
              className="text-white font-medium px-4 py-2 rounded-full text-sm"
              style={{ backgroundColor: bgColor }}
            >
              {row.result}
            </div>
          </div>
        );
      },
    },
  ];

  const handleEdit = (selected: TDataTable) => {
    setDraft({
      id: selected.id,
      fullName: selected.student_name,
      tanggal_lahir: null,
      tempat_lahir: "",
      alamat: "",
      grade: selected.result,
      math: "",
      science: "",
      social: "",
      bahasa_indonesia: "",
      sport: "",
      art: "",
      level: "",
    });
  };

  const handleAddInput = () => {
    setDraft((prev) => prev);
  };

  const handleChange = (field: keyof TScriningData, value: string | number) => {
    setDraft((prev) => {
      if (!prev) return prev;
      return {
        ...prev,
        [field]: value,
      };
    });
  };

  return (
    <div>
      <div className="flex bg-white p-4">
        <Grid container spacing={2} className="w-full">
          <Grid size={10}>
            <div className="text-lg font-semibold">
              Student Screening Records
            </div>
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
          <Table listData={data} handleEdit={handleEdit} columns={columns} />
        </Grid>
      </div>
      {draft?.id && (
        <div>
          <Grid size={12} className="flex justify-end mt-4">
            <div className="grid grid-cols-1 gap-4 w-full bg-white rounded-lg p-3">
              <div className="flex gap-4 items-center">
                <div>
                  <img src="/icons/screening_new_student.png" alt="image" />
                </div>
                <div className="flex flex-col justify-center">
                  <div className="text-lg font-semibold">
                    Screening New Student
                  </div>
                  <div className="text-xs text-gray-500">
                    Tincidunt egestas sagittis erat ut in donec ultrices.
                    Commodo eu amet vulputate pharetra venenatis..
                  </div>
                </div>
                <div
                  className="ml-auto w-[400px] bg-green-600 p-4 rounded-lg text-[#767C85]"
                  style={{ width: 200 }}
                >
                  <div className="mb-2 text-white">Screening result :</div>
                  <div className="px-5 py-2 rounded-md text-xl bg-white w-max ">
                    76.33
                  </div>
                </div>
              </div>

              <div className="border radius-lg flex flex-col gap-2 rounded-lg">
                <div className="text-md font-semibold border radius-lg p-3 rounded-t-lg">
                  Selected student screening
                </div>
                <Grid container spacing={2} style={{ padding: 12 }}>
                  <Grid size={6}>
                    <TextField
                      value={draft.fullName}
                      fullWidth
                      name="fullName"
                      label="Full name"
                      variant="outlined"
                      onChange={(e) => handleChange("fullName", e.target.value)}
                    />
                  </Grid>
                  <Grid size={3}>
                    <CustomDatePicker
                      name="tanggal_lahir"
                      label="Date of birth"
                      value={null}
                      onChange={(date) => () => {
                        handleChange("tanggal_lahir", date ? +date : 0);
                      }}
                      size="medium"
                      disableFuture
                    />
                  </Grid>
                  <Grid size={3}>
                    <TextField
                      value={draft.tempat_lahir}
                      fullWidth
                      name="tempat_lahir"
                      label="Place of birth"
                      variant="outlined"
                      onChange={(e) =>
                        handleChange("tempat_lahir", e.target.value)
                      }
                    />
                  </Grid>
                  <Grid size={12}>
                    <TextField
                      value={draft.alamat}
                      fullWidth
                      name="alamat"
                      label="Address"
                      variant="outlined"
                      onChange={(e) => handleChange("alamat", e.target.value)}
                    />
                  </Grid>
                </Grid>
              </div>
              <div className="border radius-lg flex flex-col gap-2 rounded-lg">
                <div className="text-md font-semibold border radius-lg p-3 rounded-t-lg">
                  Input national exam scores
                </div>
                <Grid container spacing={2} style={{ padding: 12 }}>
                  {inputNational.map((item) => (
                    <Grid size={6}>
                      <Typography>{item.subject}</Typography>
                      <Grid container className={"mt-3"}>
                        <Grid size={6} className="pr-3">
                          <TextField
                            label="Grade"
                            fullWidth
                            name={item.status}
                            onChange={(e) =>
                              handleChange(item.name, e.target.value)
                            }
                          />
                        </Grid>
                        <Grid size={6}>
                          <div>
                            <Typography variant="subtitle2">Status</Typography>
                            <div className="flex justify-start items-center h-full">
                              {Status(
                                draft?.[item.name] !== null
                                  ? (Number(draft?.[item.name]) as number)
                                  : undefined
                              )}
                            </div>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  ))}
                </Grid>
              </div>
              <div className="border flex flex-col rounded-lg">
                <div className="flex justify-between border radius-lg p-3 items-center rounded-t-lg">
                  <div className="text-md font-semibold">Achievements</div>
                  <div
                    className="flex gap-1 items-center cursor-pointer"
                    onClick={handleAddInput}
                  >
                    <img src="/icons/plus.svg" alt="add" />
                    <div className="text-xs font-semibold text-blue-dark">
                      Add New
                    </div>
                  </div>
                </div>
                <Grid container spacing={2} style={{ padding: 12 }}>
                  <Grid size={4}>
                    <TextField
                      value={draft.alamat}
                      fullWidth
                      name="achievement"
                      label="Achievement"
                      variant="outlined"
                      onChange={(e) => handleChange("alamat", e.target.value)}
                    />
                  </Grid>
                  <Grid size={4}>
                    <FormControl sx={{ minWidth: 120 }} fullWidth>
                      <InputLabel id="demo-simple-select-helper-label">
                        Level
                      </InputLabel>
                      <Select
                        labelId="demo-simple-select-helper-label"
                        id="demo-simple-select-helper"
                        value={draft.level || ""}
                        label="level"
                        // onChange={handleChange}
                      >
                        <MenuItem value="">
                          <em>None</em>
                        </MenuItem>
                        <MenuItem value={100}>International</MenuItem>
                        <MenuItem value={90}>National</MenuItem>
                        <MenuItem value={80}>Province</MenuItem>
                        <MenuItem value={70}>City</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                  <Grid size={4}>
                    <TextField
                      value={draft.grade}
                      fullWidth
                      name="grade"
                      label="Grade"
                      variant="outlined"
                      onChange={(e) => handleChange("grade", e.target.value)}
                    />
                  </Grid>
                </Grid>
              </div>
            </div>
          </Grid>
        </div>
      )}
    </div>
  );
}

const Status = (value: number | undefined) => {

  let bgColor = "";
  let text = "";

  if (value === undefined || value === null || value === 0) {
    bgColor = "#B7B7B7";
    text = "Idle";
  } else if (value > 70) {
    bgColor = "#6EC207";
    text = "Passed";
  } else {
    bgColor = "#DB0000";
    text = "Failed";
  }
  return (
    <div
      className="text-white font-medium px-4 py-1 rounded-full text-sm inline-block"
      style={{ backgroundColor: bgColor }}
    >
      <Typography variant="inherit">{text}</Typography>
    </div>
  );
};

export default Screening;
