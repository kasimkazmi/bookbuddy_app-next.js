export const metadata = {
    title: 'BookBuddy',
    description: 'This is a description'
};
// Blank layout for pages that do not require a header or footer
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
