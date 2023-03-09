import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack'

import Link from "next/link"
import classes from "@/styles/header.module.css"
import { useCallback, useState } from "react"

const Header = () => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

    const clickHambergerHandler = useCallback(() => {
        setHamburgerIsOpen((prevSate) => !prevSate)
    }, [])

    console.log(hamburgerIsOpen)

    return (
        <header className={classes.header}>
            <h1 className={`${classes.heading}`}>
                <Link href="#" className={classes.link}>
                        C-questionare
                </Link>
            </h1>
            <div className={`${classes.hamburger_btn} ${hamburgerIsOpen? classes.active: ""}`} onClick={clickHambergerHandler}>
                <span className={classes.hamburger_line}></span>
                <span className={classes.hamburger_line}></span>
                <span className={classes.hamburger_line}></span>
            </div>
        </header>
    )
}

export default Header