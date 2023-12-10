import { Outlet } from 'react-router-dom'

export const PrincipalLayout = () => {
    return (
        <main className="w-full h-full flex flex-col items-center gap-4 bg-gray-100">
            <Outlet />
        </main>
    )
}
