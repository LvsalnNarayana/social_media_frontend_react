import React, { useState } from "react";

import { Fade, Stack, Popper, ClickAwayListener } from "@mui/material";

const CustomMenu = ({ menu, width, trigger, placement }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [menuAnchor, setMenuAnchor] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchor(event.currentTarget);
    setMenuOpen(true);
  };

  const handleMenuClose = () => {
    setMenuAnchor(null);
    setMenuOpen(false);
  };

  return (
    <>
      <Stack
        direction="row"
        justifyContent="flex-start"
        alignItems="center"
        onClick={handleMenuOpen}
      >
        {trigger}
      </Stack>
      <Popper
        sx={{ zIndex: 1200, width: width || 150, mr: "3px !important" }}
        open={menuOpen}
        anchorEl={menuAnchor}
        placement={placement || "bottom-end"}
        transition
      >
        {({ TransitionProps }) => {
          return (
            <ClickAwayListener onClickAway={handleMenuClose}>
              <Fade {...TransitionProps} timeout={350}>
                <Stack
                  direction="column"
                  justifyContent="flex-start"
                  alignItems="flex-start"
                  gap={1}
                  sx={{
                    p: 1,
                    border: 1,
                    width: "100%",
                    borderRadius: 2,
                    borderColor: "#00000020",
                    backgroundColor: "white",
                  }}
                >
                  {menu.map((menuItem, index) => {
                    return (
                      <Stack
                        direction="row"
                        alignItems="center"
                        justifyContent="flex-start"
                        // eslint-disable-next-line react/no-array-index-key
                        key={index}
                        onClick={handleMenuClose}
                        sx={{ width: "100%" }}
                      >
                        {menuItem}
                      </Stack>
                    );
                  })}
                </Stack>
              </Fade>
            </ClickAwayListener>
          );
        }}
      </Popper>
    </>
  );
};

export default CustomMenu;
