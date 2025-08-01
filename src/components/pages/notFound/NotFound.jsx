const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen text-center">
            <p className="text-base font-semibold">404</p>
            <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance supershadow-title sm:text-7xl">Página no encontrada</h1>
            <p className="mt-6 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">Lo lamento, no pudimos encontrar la página que deseas visualizar.</p>
        </div>
    )
}

export default NotFound;