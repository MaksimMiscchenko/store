import * as React from 'react';
import IconButton from '@mui/joy/IconButton';
import { MenuItem, Menu, ListItemDecorator, ListDivider } from '@mui/joy';
import MoreVert from '@mui/icons-material/MoreVert';
import Edit from '@mui/icons-material/Edit';
import DeleteForever from '@mui/icons-material/DeleteForever';

export default function CardMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <IconButton
                id="positioned-demo-button"
                aria-controls={open ? 'positioned-demo-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                variant="outlined"
                color="neutral"
                onClick={handleClick}
            >
                <MoreVert />
            </IconButton>
            <Menu
                id="positioned-demo-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                aria-labelledby="positioned-demo-button"
                placement="bottom-end"
            >
                <MenuItem onClick={handleClose}>
                    <ListItemDecorator>
                        <Edit />
                    </ListItemDecorator>{' '}
                    Edit post
                </MenuItem>
                <MenuItem disabled onClick={handleClose}>
                    <ListItemDecorator />
                    Draft post
                </MenuItem>
                <ListDivider />
                <MenuItem onClick={handleClose} variant="soft" color="danger">
                    <ListItemDecorator sx={{ color: 'inherit' }}>
                        <DeleteForever />
                    </ListItemDecorator>{' '}
                    Delete
                </MenuItem>
            </Menu>
        </div>
    );
}