interface ListItemProps {
    texto: string;
    onClick?: () => void;
}

export function ListItem({ texto, onClick }: ListItemProps) {
    return (
        <div
            className="flex items-center cursor-pointer p-3 rounded-lg hover:bg-blue-50 transition-colors duration-200 group"
            onClick={onClick}
        >
            <span className="text-gray-700 group-hover:text-blue-600 group-hover:font-medium">
                {texto}
            </span>
        </div>
    );
}