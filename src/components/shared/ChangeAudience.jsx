/* eslint-disable operator-linebreak */
import React, { useState } from "react";

import {
  LockOutlined,
  CloseOutlined,
  GroupOutlined,
  PublicOutlined,
} from "@mui/icons-material";
import {
  Stack,
  Radio,
  Dialog,
  Button,
  Divider,
  Typography,
  IconButton,
  FormControlLabel,
} from "@mui/material";

import CustomTooltip from "./CustomTooltip";

const ChangeAudience = ({ sx, label }) => {
  const [changeAudienceDialogOpen, setChangeAudienceDialogOpen] =
    useState(false);

  const handleChangeAudienceDialogOpen = () => {
    return setChangeAudienceDialogOpen(true);
  };
  const handleChangeAudienceDialogClose = () => {
    return setChangeAudienceDialogOpen(false);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        gap={0.5}
        width="fit-content"
        sx={{
          px: 1,
          py: 0.4,
          borderRadius: 3,
          cursor: "pointer",
          "&:hover": { backgroundColor: "#00000008" },
          border: label ? "1px solid #00000020" : "none",
          ...sx,
        }}
        component="div"
        onClick={handleChangeAudienceDialogOpen}
      >
        {label ? (
          <>
            <PublicOutlined fontSize="medium" />
            <Typography sx={{ fontSize: "14px" }}>Global</Typography>
          </>
        ) : (
          <CustomTooltip padding={8} title="Global" color="#000">
            <PublicOutlined fontSize="medium" />
          </CustomTooltip>
        )}
      </Stack>
      <Dialog
        open={changeAudienceDialogOpen}
        onClose={handleChangeAudienceDialogClose}
        PaperProps={{
          elevation: 0,
          sx: {
            p: 2,
            width: "35vw",
            height: "auto",
            backgroundColor: "white",
            maxWidth: "90vw !important",
            transition: "all 0.1s ease-in",
          },
        }}
      >
        <Stack
          width="100%"
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography
            variant="body1"
            sx={{ fontWeight: 600, fontSize: "18px" }}
          >
            Change Audience
          </Typography>
          <IconButton size="small" onClick={handleChangeAudienceDialogClose}>
            <CloseOutlined fontSize="small" />
          </IconButton>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
              sx={{ py: 2 }}
            >
              <PublicOutlined sx={{ fontSize: "40px" }} />
              <Stack>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  Global
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  Anyone on or off social media
                </Typography>
              </Stack>
            </Stack>
            <FormControlLabel
              control={<Radio disableRipple checked size="small" />}
            />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
              sx={{ py: 2 }}
            >
              <GroupOutlined sx={{ fontSize: "40px" }} />
              <Stack>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  Friends
                </Typography>
                <Typography variant="body1" sx={{ fontSize: "12px" }}>
                  your friends on social media
                </Typography>
              </Stack>
            </Stack>
            <FormControlLabel control={<Radio disableRipple size="small" />} />
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
          >
            <Stack
              direction="row"
              justifyContent="flex-start"
              alignItems="center"
              gap={1}
              sx={{ py: 2 }}
            >
              <LockOutlined sx={{ fontSize: "40px" }} />
              <Stack>
                <Typography variant="body1" sx={{ fontSize: "14px" }}>
                  Only Me
                </Typography>
              </Stack>
            </Stack>
            <FormControlLabel control={<Radio disableRipple size="small" />} />
          </Stack>
        </Stack>
        <Divider sx={{ my: 2 }} />
        <Stack
          width="100%"
          direction="row"
          justifyContent="flex-end"
          alignItems="center"
          gap={2}
        >
          <Button
            disableElevation
            disableRipple
            size="small"
            variant="outlined"
            onClick={handleChangeAudienceDialogClose}
          >
            Cancel
          </Button>
          <Button
            disableElevation
            disableRipple
            size="small"
            variant="contained"
          >
            Save
          </Button>
        </Stack>
      </Dialog>
    </>
  );
};

export default ChangeAudience;
