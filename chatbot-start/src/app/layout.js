import "@/src/app/styles.css";

 import Header from "@/components/Header.jsx";
 import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase";
 
 // Force next.js to treat this route as server-side rendered
 // Without this line, during the build process, next.js will treat this route as static and build a static HTML file for it
export const dynamic = "force-dynamic";

export const metadata = {
	title: "Chatbot",
	description: "Firebase Chatbot",
};
 
 export default async function RootLayout({ children }) {
	 const { currentUser } = await getAuthenticatedAppForUser();
	 return (
		 <html lang="en">
			 <body>
			 <Header initialUser={currentUser?.toJSON()}/>
				 {children}
			 </body>
		 </html>
	 );
 }
