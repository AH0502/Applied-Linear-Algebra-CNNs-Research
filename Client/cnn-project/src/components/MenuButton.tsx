import { Button, Menu, MenuItem } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router";

interface OptionsProps {
    name: string;
    path: string;
}

export interface MenuButtonProps {
    label: string;
    options: OptionsProps[]

}

export default function MenuButton({props}: {props: MenuButtonProps}) {
    const navigate = useNavigate()
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
    setAnchorEl(null);
    };

    return (
        <div>
        <Button color="inherit" onClick={handleClick}>
            {props.label}
            </Button> 
            <Menu
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
            {props.options.map((prop) => {
               return <MenuItem onClick={() => navigate(prop.path)}>{prop.name}</MenuItem> 
            })}

            </Menu>
        </div>
    )
}