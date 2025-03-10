import { Box, Typography, useMediaQuery, useTheme } from "@mui/material"
import { IconBox } from "../IconBox/IconBox"
import { Icon } from "../Icon/Icon"
import { GitHub, PlayCircleOutline, Language } from "@mui/icons-material"
import Tooltip from '@mui/material/Tooltip';

interface IProjectItem {
    img: string,
    title: string,
    description: string,
    flags: string[],
    github: string,
    deploy: string,
    video: string
}

export const ProjectItem = (item: IProjectItem) => {
    
    const theme = useTheme();
    const mdDown = useMediaQuery(theme.breakpoints.down("md"));
    
    return (
        <Box
            height={mdDown ? "auto" : "280px"}
            width={"70%"}
            maxWidth={"940px"}
            display={"flex"}
            flexDirection={mdDown ? "column" : "row"}
            alignItems={"center"}
            padding={"20px"}
            border={"1px solid black"}
            borderRadius={"10px"}
            sx={{
                marginBottom: "30px",
                ":first-child": {
                    marginTop: "30px"
                },
                backgroundColor: "#000F1C"
            }}
            >
            <Box style={{
                backgroundImage: `url("${item.img}")`,
                borderRadius: "10px",
                width: mdDown ? '90%' : "35%",
                height: "200px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}>

            </Box>
            <Box
                marginX={"20px"}
                width={mdDown ? "90%" : "70%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
            >
                <Typography
                    component={"h3"}
                    variant="h4"
                    fontSize={mdDown ? "1.5rem" : "auto"}
                    margin={mdDown ? "20px 0" : "0"}
                >
                    {item.title}
                </Typography>
                <Typography
                    component={"p"}
                    variant="overline"
                    fontSize={mdDown ? ".6rem" : "auto"}
                >
                    {item.description}
                </Typography>
                <Box width={"100%"} display={"flex"} flexDirection={"row"} flexWrap={"wrap"}>
                    {
                        item.flags.map(flag => {
                            return (
                                <Typography key={flag} sx={{
                                        backgroundColor: "#EAB41E",
                                        marginX: "5px",
                                        marginY: "5px"
                                    }} 
                                    component={"p"}
                                    display={"inline"}
                                    flexDirection={"row"}
                                    width={"auto"}
                                    padding={"5px"}
                                    borderRadius={"5px"}
                                    color="black"
                                    >
                                    {flag}
                                </Typography>
                            )
                        })
                    }
                </Box>
            </Box>
            <Box
                width={mdDown ? "100%" : "5%"}
                height={mdDown ? "100px" : "100%"}
                display={"flex"}
                flexDirection={mdDown ? "row" : "column"}
                alignItems={"center"}
                justifyContent={"space-evenly"}
            >
                {item.github.length != 0 && (
                    <Tooltip title="Ver Repositório" arrow placement="right">
                        <IconBox width="30px" height="30px" radius="5px">
                            <GitHub sx={{ width: "30px", height: "30px", cursor: "pointer" }} color="action"/>
                        </IconBox>
                    </Tooltip>
                )}     
                {item.deploy.length != 0 && (
                    <Tooltip title="Visualizar página" arrow placement="right">
                        <IconBox width="30px" height="30px" radius="5px">
                            <Language sx={{ width: "30px", height: "30px", cursor: "pointer" }} color="action"/>
                        </IconBox>
                    </Tooltip>
                )}     
                {item.video.length != 0 && (
                    <Tooltip title="Video de demonstração" arrow placement="right">
                        <IconBox width="30px" height="30px" radius="5px">
                            <PlayCircleOutline sx={{ width: "30px", height: "30px", cursor: "pointer" }} color="action"/>
                        </IconBox>
                    </Tooltip>
                )}     
            </Box>
        </Box>
    )
}