import { Box, Typography } from "@mui/material";
import image from "../../../assets/img/header__back.png";

const Header = () => {
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
                <Typography fontWeight="bold" textAlign={"start"} fontSize={18}>
                    Olá, meu nome é
                </Typography>
                <Typography fontSize={56} fontWeight="bold" color="red" lineHeight={0.8} sx={{textShadow: "3px 1px 17px rgba(255,0,0,0.72);"}} >
                    Eduardo Fiorentin
                </Typography>
                <Typography fontSize={30} letterSpacing={5} fontWeight={"bolder"}>
                    Desenvolvedor Web
                </Typography>
            </Box>
        </Box>
    );
    
};

export { Header };

