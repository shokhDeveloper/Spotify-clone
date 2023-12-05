import React from "react"

interface CustomBtnProps extends React.ComponentProps<"button"> {
    children: React.ReactNode,
    variant: "success" | "primary" | "danger",
}
export const CustonBtn = ({children, variant, ...reset}:CustomBtnProps) => {
    return(
        <button className={`btn btn-${variant}`} {...reset} >{children}</button>
    )
}