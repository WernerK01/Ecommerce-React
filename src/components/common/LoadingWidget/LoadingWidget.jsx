const LoadingWidget = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[200px] w-full">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-b-4 border-blue-600 mb-4"></div>
      <span className="text-lg font-semibold text-blue-700">Cargando...</span>
    </div>
  );
};

export default LoadingWidget;