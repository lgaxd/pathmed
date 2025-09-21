interface OnboardingContainerProps {
    children: React.ReactNode;
}

export function OnboardingContainer({ children }: OnboardingContainerProps) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center p-4">
            <div className="bg-white rounded-2xl shadow-xl p-8 w-full max-w-md">
                {children}
            </div>
        </div>
    );
}