"use client"
import Header from "../header";

const AdminLayout = (props: any) => {
    return (
            <main>
                <Header/>
                {props.children}
            </main>
    )
}

export default AdminLayout
