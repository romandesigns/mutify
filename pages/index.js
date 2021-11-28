import Head from "next/head";
import SideBar from "./../components/Sidebar/index";

export default function Home() {
	return (
		<div className="bg-black h-screen overflow-hidden">
			<Head>
				<title>Mutify App | Your Music Hub in the internet</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<main>
				{/* Sidebar */}
				<SideBar />
				{/* Center */}

				{/* Player */}
			</main>
		</div>
	);
}
