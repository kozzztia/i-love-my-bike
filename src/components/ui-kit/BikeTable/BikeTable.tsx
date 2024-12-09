import React from 'react'
import {BikeDetailsType} from "../../../types/BikeType"
import style from "./style.module.css"

const BikeTable: React.FC<Props> = ({details, className=""}) => {
    const keys = Object.keys(details!)
  return (
    <div className={[style.table, className].join(" ")}>
      {keys.map((key) => (
        <p key={key}>
          <strong>{key.split("_").join(" ")}:</strong> {details[key as keyof BikeDetailsType]}
        </p>
      ))}
    </div>
  )
}

export default BikeTable;

type Props = {
    details: BikeDetailsType;
    className?: string;
}