import "./globals.css"
import { Navbar } from "./components/navbar"
import { Footer } from "./components/footer"


export default function RootLayout({ children }: { children: React.ReactNode }) {
return (
<html lang="en">
	<head>
		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" />
		<link href="https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&display=swap" rel="stylesheet" />
	</head>
	<body className="bg-background text-foreground">
<Navbar />
{/* <main className="min-h-screen px-6 md:px-12">{children}</main> */}
<main>{children}</main>
<Footer />
</body>
</html>
)
}

