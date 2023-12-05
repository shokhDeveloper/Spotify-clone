import React, { FC } from 'react'
import { CustonBtn } from './CustomBtn'

export const ComponentProps:FC<React.ComponentProps<typeof CustonBtn>> = (props):JSX.Element => {
  console.log(props.variant)
    return (
    <div>

    </div>
   )
 }
