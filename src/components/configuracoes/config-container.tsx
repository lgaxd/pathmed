interface ConfigContainerProps {
    children: React.ReactNode;
}

export function ConfigContainer({ children }: ConfigContainerProps) {
    return (
        <div className="min-h-screen bg-gray-50 p-4">
            <div className="max-w-2xl mx-auto">
                {children}
            </div>
        </div>
    );
}