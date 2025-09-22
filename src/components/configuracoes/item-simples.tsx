interface SimpleItemProps {
    texto: string;
    onClick?: () => void;
}

export function SimpleItem({ texto, onClick }: SimpleItemProps) {
    return (
        <div
            className="flex items-center cursor-pointer hover:bg-gray-50 p-2 rounded"
            onClick={onClick}
        >
            <span className="text-gray-700">{texto}</span>
        </div>
    );
}