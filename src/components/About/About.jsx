/* eslint-disable max-lines */
/* eslint-disable operator-linebreak */
import React, { useState } from "react";

import MaleIcon from "@mui/icons-material/Male";
import FemaleIcon from "@mui/icons-material/Female";
import WorkOutlineIcon from "@mui/icons-material/WorkOutline";
import CakeOutlinedIcon from "@mui/icons-material/CakeOutlined";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import { Stack, Button, Divider, Typography } from "@mui/material";
import SchoolOutlinedIcon from "@mui/icons-material/SchoolOutlined";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import MailOutlineOutlinedIcon from "@mui/icons-material/MailOutlineOutlined";
import FavoriteBorderOutlinedIcon from "@mui/icons-material/FavoriteBorderOutlined";

import AboutItem from "./AboutItem";
import AboutMenu from "./AboutMenu";
import useData from "../../hooks/data/useData";
import EditEmailItem from "./Email/EditEmailItem";
import EditPhoneItem from "./Phone/EditPhoneItem";
import EditPlacesItem from "./Places/EditPlacesItem";
import EditWorkplaceItem from "./Work/EditWorkplaceItem";
import EditEducationItem from "./School/EditEducationItem";

const About = () => {
  const [activeMenu, setOverviewActiveMenu] = useState("overview");
  const [addSchoolOpen, setAddSchoolOpen] = useState(false);
  const [addUniversityOpen, setAddUniversityOpen] = useState(false);
  const [addWorkOpen, setAddWorkOpen] = useState(false);
  const [addPlaceOpen, setAddPlaceOpen] = useState(false);
  const [addEmailOpen, setAddEmailOpen] = useState(false);
  const [addPhoneOpen, setAddPhoneOpen] = useState(false);
  const { user } = useData();

  return (
    <Stack
      gap={4}
      direction="row"
      justifyContent="flex-start"
      alignItems="flex-start"
      sx={{
        my: 3,
        px: 2,
        width: "100%",
        borderRadius: 2,
        border: "1px solid #ccc",
      }}
    >
      <AboutMenu
        activeMenu={activeMenu}
        setActiveMenu={(value) => {
          return setOverviewActiveMenu(value);
        }}
      />
      <Divider orientation="vertical" />
      <Stack gap={2} sx={{ py: 2, width: "100%" }}>
        {activeMenu === "overview" && (
          <>
            {user.work
              .filter((workItem) => {
                return workItem.current === true;
              })
              .map((workItem) => {
                return (
                  <AboutItem
                    key={workItem.id}
                    data={workItem}
                    Icon={WorkOutlineIcon}
                    type="workplace"
                  />
                );
              })}
            {user.education
              .filter((educationItem) => {
                return educationItem?.graduated === false;
              })
              .map((educationItem) => {
                return (
                  <AboutItem
                    key={educationItem?.id}
                    data={educationItem}
                    Icon={SchoolOutlinedIcon}
                    type="school"
                  />
                );
              })}
            {user?.info?.email
              ?.filter((email) => {
                return email?.primary === true;
              })
              .map((emailItem) => {
                return (
                  <AboutItem
                    key={emailItem?.id}
                    data={emailItem}
                    Icon={MailOutlineOutlinedIcon}
                    type="email"
                  />
                );
              })}
            {user?.places
              ?.filter((place) => {
                return place?.current === true;
              })
              .map((placeItem) => {
                return (
                  <AboutItem
                    key={placeItem?.id}
                    data={placeItem}
                    Icon={CottageOutlinedIcon}
                    type="place"
                  />
                );
              })}
            {user.info?.phone?.map((phoneItem) => {
              return (
                <AboutItem
                  key={phoneItem?.id}
                  data={phoneItem}
                  Icon={LocalPhoneOutlinedIcon}
                  type="phone"
                />
              );
            })}
            <AboutItem
              key={user?.info?.birthdate?.date}
              data={user?.info?.birthdate}
              Icon={CakeOutlinedIcon}
              type="birthday"
            />
            <AboutItem
              key={user?.info?.relationship?.id}
              data={user?.info?.relationship}
              Icon={FavoriteBorderOutlinedIcon}
              type="relationship"
            />
          </>
        )}
        {activeMenu === "work_and_education" && (
          <>
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "18px" }}
            >
              Work
            </Typography>
            <Typography
              variant="body1"
              component="p"
              onClick={() => {
                return setAddWorkOpen(true);
              }}
              sx={{
                gap: 1,
                color: "blue",
                display: "flex",
                fontSize: "14px",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <ControlPointIcon />
              Add Work
            </Typography>
            {addWorkOpen && (
              <>
                <EditWorkplaceItem />
                <Divider sx={{ width: "100%" }} />
                <Stack
                  width="100%"
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={2}
                  sx={{ mb: 2 }}
                >
                  <Button disableElevation size="small" variant="contained">
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setAddWorkOpen(false);
                    }}
                    disableElevation
                    size="small"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </>
            )}
            {user.work
              .filter((workItem) => {
                return workItem.current === true;
              })
              .map((workItem) => {
                return (
                  <AboutItem
                    key={workItem.id}
                    data={workItem}
                    Icon={WorkOutlineIcon}
                    type="workplace"
                  />
                );
              })}
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "18px" }}
            >
              University
            </Typography>
            <Typography
              variant="body1"
              component="p"
              onClick={() => {
                return setAddUniversityOpen(true);
              }}
              sx={{
                gap: 1,
                color: "blue",
                display: "flex",
                fontSize: "14px",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <ControlPointIcon />
              Add University
            </Typography>
            {addUniversityOpen && (
              <>
                <EditEducationItem type="High School" />
                <Divider sx={{ width: "100%" }} />
                <Stack
                  width="100%"
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={2}
                  sx={{ mb: 2 }}
                >
                  <Button disableElevation size="small" variant="contained">
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setAddUniversityOpen(false);
                    }}
                    disableElevation
                    size="small"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </>
            )}

            {user.education
              .filter((educationItem) => {
                return (
                  educationItem?.attendedFor === "University(postgraduate)" ||
                  educationItem?.attendedFor === "University"
                );
              })
              .map((educationItem) => {
                return (
                  <AboutItem
                    key={educationItem?.id}
                    data={educationItem}
                    Icon={SchoolOutlinedIcon}
                    type="school"
                  />
                );
              })}
            <Typography
              variant="body1"
              sx={{ fontWeight: 600, fontSize: "18px" }}
            >
              School
            </Typography>
            <Typography
              variant="body1"
              component="p"
              onClick={() => {
                return setAddSchoolOpen(true);
              }}
              sx={{
                gap: 1,
                color: "blue",
                display: "flex",
                fontSize: "14px",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <ControlPointIcon />
              Add School
            </Typography>
            {addSchoolOpen && (
              <>
                <EditEducationItem type="High School" />
                <Divider sx={{ width: "100%" }} />
                <Stack
                  width="100%"
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={2}
                  sx={{ mb: 2 }}
                >
                  <Button disableElevation size="small" variant="contained">
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setAddSchoolOpen(false);
                    }}
                    disableElevation
                    size="small"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </>
            )}

            {user.education
              .filter((educationItem) => {
                return educationItem?.attendedFor === "High School";
              })
              .map((educationItem) => {
                return (
                  <AboutItem
                    key={educationItem?.id}
                    data={educationItem}
                    Icon={SchoolOutlinedIcon}
                    type="school"
                  />
                );
              })}
          </>
        )}
        {activeMenu === "places" && (
          <>
            <Typography
              variant="body1"
              component="p"
              onClick={() => {
                return setAddPlaceOpen(true);
              }}
              sx={{
                gap: 1,
                color: "blue",
                display: "flex",
                fontSize: "14px",
                cursor: "pointer",
                alignItems: "center",
              }}
            >
              <ControlPointIcon />
              Add Place
            </Typography>
            {addPlaceOpen && (
              <>
                <EditPlacesItem />
                <Divider sx={{ width: "100%" }} />
                <Stack
                  width="100%"
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={2}
                  sx={{ mb: 2 }}
                >
                  <Button disableElevation size="small" variant="contained">
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setAddPlaceOpen(false);
                    }}
                    disableElevation
                    size="small"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </>
            )}
            {user?.places
              ?.filter((place) => {
                return place?.current === true;
              })
              .map((placeItem) => {
                return (
                  <AboutItem
                    key={placeItem?.id}
                    data={placeItem}
                    Icon={CottageOutlinedIcon}
                    type="place"
                  />
                );
              })}
          </>
        )}
        {activeMenu === "basic_info" && (
          <>
            <AboutItem
              data={user?.gender}
              Icon={user?.gender === "Male" ? MaleIcon : FemaleIcon}
              type="gender"
            />
            {!addEmailOpen && (
              <>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Email
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  onClick={() => {
                    return setAddEmailOpen(true);
                  }}
                  sx={{
                    gap: 1,
                    color: "blue",
                    display: "flex",
                    fontSize: "14px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <ControlPointIcon />
                  Add Email
                </Typography>
              </>
            )}
            {addEmailOpen && (
              <>
                <EditEmailItem /> <Divider sx={{ width: "100%" }} />
                <Stack
                  width="100%"
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={2}
                >
                  <Button disableElevation size="small" variant="contained">
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setAddEmailOpen(false);
                    }}
                    disableElevation
                    size="small"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </>
            )}
            {user?.info?.email
              ?.filter((email) => {
                return email?.primary === true;
              })
              .map((emailItem) => {
                return (
                  <AboutItem
                    key={emailItem?.id}
                    data={emailItem}
                    Icon={MailOutlineOutlinedIcon}
                    type="email"
                  />
                );
              })}
            {!addPhoneOpen && (
              <>
                <Typography
                  variant="body1"
                  sx={{ fontWeight: 600, fontSize: "18px" }}
                >
                  Phone
                </Typography>
                <Typography
                  variant="body1"
                  component="p"
                  onClick={() => {
                    return setAddPhoneOpen(true);
                  }}
                  sx={{
                    gap: 1,
                    color: "blue",
                    display: "flex",
                    fontSize: "14px",
                    cursor: "pointer",
                    alignItems: "center",
                  }}
                >
                  <ControlPointIcon />
                  Add Phone
                </Typography>
              </>
            )}
            {addPhoneOpen && (
              <>
                <EditPhoneItem />
                <Divider sx={{ width: "100%" }} />
                <Stack
                  width="100%"
                  direction="row"
                  justifyContent="flex-end"
                  alignItems="center"
                  gap={2}
                >
                  <Button disableElevation size="small" variant="contained">
                    Save
                  </Button>
                  <Button
                    onClick={() => {
                      setAddPhoneOpen(false);
                    }}
                    disableElevation
                    size="small"
                    variant="outlined"
                  >
                    Cancel
                  </Button>
                </Stack>
              </>
            )}
            {user?.info?.phone?.map((phoneItem) => {
              return (
                <AboutItem
                  key={phoneItem?.id}
                  data={phoneItem}
                  Icon={LocalPhoneOutlinedIcon}
                  type="phone"
                />
              );
            })}
            <AboutItem
              data={user?.info?.relationship}
              Icon={FavoriteBorderOutlinedIcon}
              type="relationship"
            />
            <AboutItem
              data={user?.info?.birthdate}
              Icon={CakeOutlinedIcon}
              type="birthday"
            />
          </>
        )}
      </Stack>
    </Stack>
  );
};

export default About;
