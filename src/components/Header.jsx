
import Link from "next/link"
import classes from "@/styles/header.module.css"
import { useCallback, useState } from "react"

const Header = () => {

    const [hamburgerIsOpen, setHamburgerIsOpen] = useState(false)

    const clickHambergerHandler = useCallback(() => {
        setHamburgerIsOpen((prevSate) => !prevSate)
    }, [])

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
            <div className={`${classes.menu} ${hamburgerIsOpen? classes.active: ""}`}>
                <nav>
                    <ul className={classes.menu_box}>
                        <li>
                            <Link href="#" className={classes.menu_item}>アンケート一覧</Link>
                        </li>   
                        <li>
                            <Link href="#" className={classes.menu_item}>アンケート投稿</Link>
                        </li>
                        <li>
                            <Link href="#" className={classes.menu_item}>イベント掲示板</Link>
                        </li>
                        <li>
                            <Link href="#" className={classes.menu_item}>お問い合わせ</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header