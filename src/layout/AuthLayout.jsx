import { Outlet } from "react-router";

export default function AuthLayout() {
    return (
        <div className="flex items-center justify-center min-h-screen bg-neutral-50">

            <div className="bg-white p-15 rounded-4xl shadow-xl w-full max-w-xl">
                <Outlet />
            </div>
        </div> 
    )
}