import { Box } from "@mui/material"
import React from "react"

export const ExperieceBox = ({children}: {children: React.ReactElement}) => {
    return (
        <Box 
            maxWidth={"900px"} 
            display={"flex"} 
            flexDirection={"column"} 
            alignItems={"center"} 
            marginLeft={"80px"}
            marginTop={"50px"}
            // height={"100%"}
            gap={2}
            >
            {children}
        </Box>
    )
}