import SettingSidebar from "@/components/sidebar/SettingSidebar";

export default function SettingLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex h-screen w-full p-2 gap-2 bg-gray-100">
            <SettingSidebar/>
            <main className="flex-1 bg-white rounded-lg overflow-auto border-2 border-gray-300 shadow-2xl">
                {children}
            </main>
        </div>
    );
}