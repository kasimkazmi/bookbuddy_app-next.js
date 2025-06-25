export const metadata = {
  title: 'BookBuddy Auth Pages',
  description: 'Login, Signup, and Dashboard'
};

export default function BlankPagesLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {/* No header/footer here */}
      <main>{children}</main>
    </>
  );
}
