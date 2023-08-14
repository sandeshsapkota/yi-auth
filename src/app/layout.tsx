"use client"
import '@/assets/sass/app.scss'
import {Provider} from "react-redux";
import {ReactNode} from "react";

function RootLayout({children,}: {
    children: ReactNode
}) {
    return (
        <html lang="en">
        <body>
            {children}
        </body>
        </html>
    )
}

export default RootLayout;
