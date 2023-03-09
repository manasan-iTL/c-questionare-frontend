import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Stack from '@mui/material/Stack'


const Header = () => {
    return (
        <header className={classes.header}>
            <h1 className={`${classes.heading}`}>
                <Link href="#" className={classes.link}>
                        C-questionare
                </Link>
            </h1>
        </header>
    )
}

export default Header