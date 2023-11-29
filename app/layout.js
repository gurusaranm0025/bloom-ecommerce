import "./globals.css";

export const metadata = {
  title: "Bloom|Shop plants",
  description: "Designed & programmed by GS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
