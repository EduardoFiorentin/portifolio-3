import { Box, useMediaQuery, useTheme } from "@mui/material"
import React from "react"

export const ExperieceBox = ({children}: {children: React.ReactElement}) => {
    
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box 
            maxWidth={"900px"} 
            display={"flex"} 
            flexDirection={"column"} 
            alignItems={"center"} 
            marginLeft={mdDown ? "20px" : "80px"}
            marginTop={"50px"}
            gap={2}
            >
            {children}
        </Box>
    )
}