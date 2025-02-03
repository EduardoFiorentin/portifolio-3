import { Box } from "@mui/material";
import React from "react";

export const IconBox = ({children}: {children: React.ReactNode}) => {
    return (
        <Box 
            width={"50px"} 
            height={"50px"} 
            border={"3px solid white"}
            borderRadius={"100%"}
            padding={"5px"}
            sx={
                {":hover": {transform: "scale(1.1)", transitionDuration: "500ms"}, 
                transitionDuration: "500ms"}
            }>
            {children}
        </Box>
    )
}