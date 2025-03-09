import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import image from "../../../assets/img/header__back.png";


const Header = () => {

    const theme = useTheme();
    const smDown = useMediaQuery(theme.breakpoints.down("sm"));

    return (
        <Box 
            component="header" 
            sx={{
                backgroundImage: `url(${image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                width: "100vw",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                borderBottom: "1px solid white"
            }}
        >
           
            <Box 
                sx={{
                    textAlign: "center",
                    marginBottom: "120px"
                }}
            >
                <Typography fontWeight="bold" textAlign={"start"} fontSize={smDown ? 13 : 18}>
                    Olá, meu nome é
                </Typography>
                <Typography  fontSize={smDown ? 30 : 56} fontWeight="bold" color="red" lineHeight={0.8} sx={{textShadow: "3px 1px 17px rgba(255,0,0,0.72);"}} >
                    Eduardo Fiorentin
                </Typography>
                <Typography fontSize={smDown ? 10 : 30} letterSpacing={5} fontWeight={"bolder"}>
                    Desenvolvedor Web
                </Typography>
            </Box>
        </Box>
    );
    
};

export { Header };

