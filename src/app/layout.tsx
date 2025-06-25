import './globals.css';
import { Metadata } from 'next';
import { ThemeProvider } from 'next-themes';
import { AuthProvider } from '../context/AuthContext';

export const metadata: Metadata = {
    title: 'BazmBooks',
    description: 'Discover, share, and trade your favorite books.'
};

export default function RootLayout({
    children
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <ThemeProvider attribute="class" defaultTheme="system">
                    <AuthProvider>{children}</AuthProvider>
                </ThemeProvider>
            </body>
        </html>
    );
}
