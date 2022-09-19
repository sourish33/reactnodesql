import React from 'react'
import styles from './Button.module.css'

const Button = ({type, clickAction, children}) => {

    const btn = styles.button
    const btnClass = styles[`${type}`]
  return (
    <button className={`${btn} ${btnClass}`} onClick = {clickAction} >{children}</button>
  )
}

export default Button
