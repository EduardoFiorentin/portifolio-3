import { Box, Typography } from "@mui/material"
import React from "react"

const PageBase: React.FC<{title: string, children: React.ReactElement}> = ({title, children}) => {
    return (
        <Box 
        sx={{
            width: "100vw",
            minHeight: "95vh",
            backgroundColor: "primary.main",
        }}>
            <Box marginLeft={"20px"}>
                <Typography
                sx={{
                    fontSize: 45,
                    fontWeight: "bold"
                }}>
                    {title}
                </Typography>
                <Box sx={{width: "250px", backgroundColor: "primary.light", height: "3px", borderRadius: "2px"}}/>
            </Box>
            {children}
        </Box>
    )
}

export { PageBase }