interface ChatContainerProps {
    children: React.ReactNode;
}

export function ChatContainer({ children }: ChatContainerProps) {
    return (
        <div className="min-h-full bg-gray-50 flex flex-col">
            {children}
        </div>
    );
}