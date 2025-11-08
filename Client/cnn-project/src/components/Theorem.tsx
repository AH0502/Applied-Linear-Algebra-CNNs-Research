import { Card, CardContent, Typography } from "@mui/material"

export default function Theorem({number, title, children}: {
    number: string, 
    title: string,
    children: React.ReactNode
})  {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    Theorem {number} {title}. 
                </Typography>
                {children}
            </CardContent>
        </Card>
    )

}