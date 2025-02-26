import { Box, Typography } from "@mui/material"
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
    return (
        <Box
            height={"230px"}
            width={"70%"}
            maxWidth={"940px"}
            display={"flex"}
            alignItems={"center"}
            padding={"20px"}
            border={"1px solid black"}
            borderRadius={"10px"}
            sx={{
                // ":not(:last-child)": {
                //     marginBottom: "30px"
                // },
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
                width: "35%",
                height: "200px",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat"
            }}
                maxWidth={"200px"}
                // marginRight={"10px"}
            >

            </Box>
            <Box
                marginX={"20px"}
                width={"70%"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
                justifyContent={"space-evenly"}
            >
                <Typography
                    component={"h3"}
                    variant="h4"
                >
                    {item.title}
                </Typography>
                <Typography
                    component={"p"}
                    variant="overline"
                >
                    {item.description}
                </Typography>
                <Box>
                    {
                        item.flags.map(flag => {
                            return (
                                <Typography key={flag} sx={{
                                        backgroundColor: "#EAB41E",
                                        marginX: "5px"
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
                width={"5%"}
                // height={"150px"}
                height={"100%"}
                display={"flex"}
                flexDirection={"column"}
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