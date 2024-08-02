/* eslint-disable no-undefined */
/* eslint-disable no-negated-condition */
/* eslint-disable multiline-ternary */
import moment from "moment";
import React, { useState } from "react";

import {
  Stack,
  Radio,
  Select,
  MenuItem,
  Checkbox,
  Typography,
  FormControlLabel,
} from "@mui/material";

import InputField from "../../shared/InputField";
import ChangeAudience from "../../shared/ChangeAudience";

const EditEducationItem = ({ type, schoolItem }) => {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: currentYear - 1950 + 1 }, (_, index) => {
    return 1950 + index;
  });
  const [newSchoolItem, setNewSchoolItem] = useState({
    id: schoolItem?.id || "new",
    city: schoolItem?.city || "",
    school: schoolItem?.school || "",
    company: schoolItem?.company || "",
    endDate: schoolItem?.endDate || "",
    position: schoolItem?.position || "",
    current: schoolItem?.current || false,
    startDate: schoolItem?.startDate || "",
    graduated: schoolItem?.graduated || false,
    description: schoolItem?.description || "",
    Visibility: schoolItem?.Visibility || false,
    attendedFor: schoolItem?.attendedFor || type,
    courses: schoolItem?.courses || [{ name: "" }, { name: "" }],
  });

  return (
    <Stack gap={1} sx={{ my: 2 }}>
      <ChangeAudience label />
      <InputField
        name={`school_name_${newSchoolItem?.id}`}
        placeholder="Enter your school name"
        value={newSchoolItem?.school}
        changeValue={(value) => {
          setNewSchoolItem({
            ...newSchoolItem,
            school: value,
          });
        }}
      />
      <InputField
        rows={4}
        multiple
        name={`school_description_${newSchoolItem?.id}`}
        placeholder="Description"
        value={newSchoolItem?.description}
        changeValue={(value) => {
          setNewSchoolItem({
            ...newSchoolItem,
            description: value,
          });
        }}
      />
      <Typography sx={{ fontWeight: 600, fontSize: "15px" }}>
        Time period
      </Typography>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={2}
        sx={{ my: 1 }}
      >
        <Select
          id={`school_from_select_${newSchoolItem?.id}`}
          value={
            newSchoolItem?.startDate !== null && newSchoolItem?.startDate !== ""
              ? moment(newSchoolItem?.startDate).format("YYYY").toString()
              : ""
          }
          displayEmpty
          MenuProps={{
            PaperProps: {
              elevation: 0,
              sx: {
                mt: 0.2,
                py: 0.4,
                maxHeight: "200px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              },
            },
          }}
          onChange={(event) => {
            setNewSchoolItem({
              ...newSchoolItem,
              startDate: moment(event.target.value).format("YYYY").toString(),
            });
          }}
          sx={{
            my: 0.5,
            width: "100px",
            "& .MuiSelect-select": {
              p: 0.85,
            },
          }}
          size="small"
        >
          <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
            <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
              Year
            </Typography>
          </MenuItem>{" "}
          {years.map((year) => {
            return (
              <MenuItem
                key={year}
                sx={{ px: 0.8, py: 0.2 }}
                value={year.toString()}
              >
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  {year.toString()}
                </Typography>
              </MenuItem>
            );
          })}
        </Select>
        <Select
          id={`school_to_select_${newSchoolItem?.id}`}
          value={
            !newSchoolItem?.graduated
              ? moment().format("YYYY").toString()
              : newSchoolItem?.endDate !== null && newSchoolItem?.endDate !== ""
                ? moment(newSchoolItem?.endDate).format("YYYY").toString()
                : moment().format("YYYY").toString()
          }
          displayEmpty
          MenuProps={{
            PaperProps: {
              elevation: 0,
              sx: {
                mt: 0.2,
                py: 0.4,
                maxHeight: "200px",
                backgroundColor: "#fff",
                border: "1px solid #ccc",
              },
            },
          }}
          onChange={(event) => {
            setNewSchoolItem({
              ...newSchoolItem,
              endDate: moment(event.target.value).format("YYYY").toString(),
            });
          }}
          sx={{
            my: 0.5,
            width: "100px",
            "& .MuiSelect-select": {
              p: 0.85,
            },
          }}
          size="small"
        >
          <MenuItem sx={{ px: 0.8, py: 0.2 }} value="" disabled>
            <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
              Year
            </Typography>
          </MenuItem>
          {years.map((year) => {
            return (
              <MenuItem
                key={year}
                sx={{ px: 0.8, py: 0.2 }}
                value={year.toString()}
              >
                <Typography sx={{ fontSize: "13px", textAlign: "center" }}>
                  {year.toString()}
                </Typography>
              </MenuItem>
            );
          })}
        </Select>
      </Stack>
      <FormControlLabel
        sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
        control={
          <Checkbox
            id={`school_graduated_${newSchoolItem?.id}`}
            disableRipple
            size="small"
            checked={newSchoolItem?.graduated}
            onChange={(event) => {
              setNewSchoolItem({
                ...newSchoolItem,
                graduated: event.target.checked,
              });
            }}
          />
        }
        label="Graduated"
      />
      {newSchoolItem?.attendedFor !== "High School" && (
        <>
          <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
            Attended for
          </Typography>
          <Stack
            width="100%"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-satrt"
          >
            <FormControlLabel
              sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
              control={
                <Radio
                  id={`school_attended_university_${newSchoolItem?.id}`}
                  disableRipple
                  size="small"
                  onChange={() => {
                    setNewSchoolItem({
                      ...newSchoolItem,
                      attendedFor: "University",
                    });
                  }}
                  checked={newSchoolItem?.attendedFor === "University"}
                />
              }
              label="University"
            />
            <FormControlLabel
              sx={{ "& .MuiTypography-root": { fontSize: "14px" } }}
              control={
                <Radio
                  id={`school_attended_postgraduate_${newSchoolItem?.id}`}
                  disableRipple
                  size="small"
                  onChange={() => {
                    setNewSchoolItem({
                      ...newSchoolItem,
                      attendedFor: "University(postgraduate)",
                    });
                  }}
                  checked={
                    newSchoolItem?.attendedFor === "University(postgraduate)"
                  }
                />
              }
              label="University (postgraduate)"
            />
          </Stack>
        </>
      )}
      <Stack
        gap={1}
        direction="column"
        justifyContent="flex-start"
        alignItems="flex-start"
      >
        <Typography sx={{ fontWeight: 600, fontSize: "16px" }}>
          Courses
        </Typography>
        <InputField
          name={`school_course0_${newSchoolItem?.id}`}
          placeholder="Enter your course name"
          value={newSchoolItem?.courses[0]?.name}
          changeValue={(value) => {
            setNewSchoolItem({
              ...newSchoolItem,
              courses: [
                { name: value },
                { name: newSchoolItem?.courses[1]?.name },
              ],
            });
          }}
          sx={{ mb: 0 }}
        />
        <InputField
          name={`school_course1_${newSchoolItem?.id}`}
          placeholder="Enter your course name"
          value={newSchoolItem?.courses[1]?.name}
          changeValue={(value) => {
            setNewSchoolItem({
              ...newSchoolItem,
              courses: [
                { name: newSchoolItem?.courses[0]?.name },
                { name: value },
              ],
            });
          }}
        />
      </Stack>
    </Stack>
  );
};

export default EditEducationItem;
