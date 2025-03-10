import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import React from "react"

interface IExperienceItem {
    company: string,
    date: string,
    role: string,
    description: string
}

export const ExperieceItem = ({company, date, description, role}: IExperienceItem) => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    const lgDown = useMediaQuery(theme.breakpoints.down("lg"));

    return (
        <Box display={"flex"} flexDirection={"row"} width={"100%"}  marginBottom={"20px"}>
            <Box  display={"flex"} flexDirection={"column"} alignItems={"center"} gap={1}>
                {/* bolinha */}
                <Box width={"10px"} height={"10px"} borderRadius={"100%"} sx={{backgroundColor: "#04D9D9"}} marginTop={"10px"}></Box>
                {/* linha */}
                <Box width={"2px"} height={"90%"}sx={{backgroundColor: "white"}}></Box>
            </Box>
            <Box display={"flex"} flexDirection={mdDown ? "column" : "row"} width={"100%"} gap={1}>
                <Box display={"flex"} flexDirection={"column"} marginLeft={"20px"} width={mdDown ? "90%" : "30%"} gap={1}>
                    <Typography variant="h5" fontWeight={"bold"}>{company}</Typography>
                    <Typography color="#ffffffcc">{date}</Typography>
                    <Typography color="#ffffff99">{role}</Typography>
                </Box>
                <Box width={"70%"} display={"flex"}  alignItems={"center"} marginLeft={mdDown ? "20px" : "0px"}>
                    <Typography>{description}</Typography>
                </Box>
            </Box>
        </Box>
    )
}