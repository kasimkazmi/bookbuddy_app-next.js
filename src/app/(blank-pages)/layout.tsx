export const metadata = {
    title: 'BookBuddy',
    description: 'This is a description'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html>
            <body>{children}</body>
        </html>
    );
}
