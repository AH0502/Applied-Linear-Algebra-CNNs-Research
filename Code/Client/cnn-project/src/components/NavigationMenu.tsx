import { Stack, Typography, Link } from "@mui/material";

export default function NavigationMenu() {
    return (
        <>
        <Stack direction="row" spacing={4}>
            <Link href="/">
                <Typography variant="h4">Home</Typography>
            </Link>
            <Link href="/about">
            <Typography variant="h4">About</Typography>
            </Link>
            <Link href="/edge-detection" underline="none">
            <Typography variant="h4">Edge-Detection</Typography>
            </Link>
        </Stack>
        </>
    )
}