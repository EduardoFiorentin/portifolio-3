import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import React from "react"
import { Menu } from "../../components/Menu/Menu"

const PageBase: React.FC<{title: string, children: React.ReactElement}> = ({title, children}) => {
    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <Box 
        sx={{
            width: "100vw",
            minHeight: "100vh",
            backgroundColor: "primary.main",
            
        }}>
            <Box 
                marginLeft={"20px"} 
                paddingTop={"50px"}
            >
                <Typography
                sx={{
                    fontSize: smDown ? 30 : 40,
                    fontWeight: "bold"
                }}>
                    {title}
                </Typography>
                <Box sx={{width: "250px", backgroundColor: "primary.light", height: "3px", borderRadius: "2px"}}/>
            </Box>
            <Menu/>
            <Box>
                {children}
            </Box>
        </Box>
    )
}

export { PageBase }