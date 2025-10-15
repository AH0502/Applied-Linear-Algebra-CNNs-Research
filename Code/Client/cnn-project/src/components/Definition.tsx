import { Card, CardContent, Typography } from "@mui/material"

export default function Definition({number, title, children}: {
    number: string, 
    title: string,
    children: React.ReactNode
})  {
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    Definition {number} {title}. 
                </Typography>
                {children}
            </CardContent>
        </Card>
    )

}