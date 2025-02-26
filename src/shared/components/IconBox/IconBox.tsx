import { Box } from "@mui/material";
import React from "react";

interface IIconBox extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    width: string;
    height: string;
    radius?: string;
    href?: string; 
}

export const IconBox = React.forwardRef<HTMLDivElement | HTMLAnchorElement, IIconBox>(
    ({ children, width, height, radius, href, ...props }, ref) => {
        const Component = href ? "a" : "div"; 

        return (
            <Box
                ref={ref as any} 
                component={Component} 
                href={href} 
                target={href ? "_blank" : undefined} 
                rel={href ? "noopener noreferrer" : undefined} 
                {...props} 
                width={width}
                height={height}
                border={"3px solid white"}
                borderRadius={radius ? radius : "100%"}
                padding={"5px"}
                sx={{
                    ":hover": {
                        transform: "scale(1.1)",
                        transitionDuration: "500ms"
                    },
                    transitionDuration: "500ms",
                    textDecoration: "none", 
                    display: "inline-flex", 
                    alignItems: "center",
                    justifyContent: "center"
                }}
            >
                {children}
            </Box>
        );
    }
);