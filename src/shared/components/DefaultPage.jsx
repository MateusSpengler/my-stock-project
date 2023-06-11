import React from "react";
import { Outlet } from "react-router-dom";
import ScreenSkeleton from "./ScreenSkeleton";
import { Box } from "@mui/system";

function DefaultPage() {
  return (
    <Box display={'flex'}>
      <ScreenSkeleton />
      <Box sx={{ display: 'grid', width: '100%'}}>
        <Outlet />        
      </Box>
    </Box>
  );
}

export default DefaultPage;
