import React, { cloneElement } from "react"

export default function Familia(props: any) {
    return (
        <div>
            {
                props.children.map((child: any, i: Number) => {
                    return cloneElement(child, { ...props, key: i });
                })}
        </div>
    )
}