import { Card, CardContent, Typography } from "@mui/material"

export default function Proof({children}: {children: React.ReactNode}){
    return (
        <Card variant="outlined">
            <CardContent>
                <Typography>
                    Proof. {children}
                </Typography>
            </CardContent>
        </Card>
    )

}