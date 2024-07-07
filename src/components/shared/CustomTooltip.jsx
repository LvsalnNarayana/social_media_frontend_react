import React from "react";

import { styled } from "@mui/material/styles";
import { Zoom, Tooltip, tooltipClasses } from "@mui/material";

const CustomTooltip = styled(
  ({ color, margin, padding, className, ...props }) => {
    return (
      <Tooltip
        {...props}
        arrow
        TransitionComponent={Zoom}
        classes={{ popper: className }}
        PopperProps={{
          modifiers: [
            {
              name: "flip",
              enabled: true,
            },
            {
              enabled: true,
              name: "preventOverflow",
              options: {
                boundary: "viewport",
              },
            },
          ],
        }}
      />
    );
  },
)(({ theme, color, margin, padding }) => {
  return {
    [`& .${tooltipClasses.tooltip}`]: {
      width: "auto",
      borderRadius: "10px",
      padding: padding || 7,
      color: color || "#fff",
      backgroundColor: "#fff",
      maxWidth: "100% !important",
      border: "1px solid #dadde9",
      fontSize: theme.typography.pxToRem(12),
      "& .MuiTooltip-arrow:before": {
        color: "#fff",
        border: "1px solid #dadde9",
      },
      "&.MuiTooltip-tooltip": {
        marginTop: margin || "7px",
        marginBottom: margin || "7px",
      },
    },
  };
});

export default CustomTooltip;
