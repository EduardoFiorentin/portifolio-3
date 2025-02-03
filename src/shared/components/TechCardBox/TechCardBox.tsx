import { Box } from "@mui/material";
import React, { Dispatch, SetStateAction, useEffect } from "react";

interface ITechCardBox {
    children: React.ReactNode,
    setTitle: Dispatch<SetStateAction<string>>, 
    setDesc: Dispatch<SetStateAction<string>>,
    payload: {title: string, desc: string}, 
}

export const TechCardBox = ({children, payload, setDesc, setTitle}: ITechCardBox) => {
    
      
    const handleMouseEnter = () => {
        setTitle(payload.title)
        setDesc(payload.desc)
    }

    return (
       <Box width={"90px"} 
            height={"100px"} 
            border={"3px solid white"}
            borderRadius={"10px"}
            padding={"5px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            sx={
                {":hover": {transform: "scale(1.1)", transitionDuration: "500ms"}, 
                transitionDuration: "500ms"}
            }
            onMouseEnter={() => handleMouseEnter()}
            >


            {children}
        </Box>
    )
}