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
        <Box component="header">
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h4" sx={{ flexGrow: 1 }}>
                        C-questionare
                    </Typography>
                    <IconButton>
                        <MenuIcon />
                    </IconButton>
                    <Menu>
                        <MenuItem>アンケート一覧</MenuItem>
                    </Menu>
                </Toolbar>
            </AppBar>
        </Box>
    )
}

export default Header