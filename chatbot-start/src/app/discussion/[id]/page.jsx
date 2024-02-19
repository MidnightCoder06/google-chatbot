import {
	getFirestore
} from "firebase/firestore";
import { getDiscussions, getMessages } from "@/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser, firebaseApp } from "@/lib/firebase/firebase";
import Chat from "@/components/Chat";
import { redirect } from "next/navigation";

export const dynamic = "force-dynamic";

export default async function Discussion({ params }) {
	const { app:authenticatedApp, currentUser } = await getAuthenticatedAppForUser();
	const db = getFirestore(authenticatedApp ?? firebaseApp);
	const user = currentUser?.toJSON();
	let discussions = await getDiscussions(db, user?.uid);
	const messages = await getMessages(db, user?.uid, params.id);
	if (params.id === "new") {
		discussions = [
			{
				id: "new",
			},
			...discussions,
		];
	} else if (!messages.length) {
		return redirect(`/`);
	}

	return (
		<main>
			<Chat
				initialDiscussions={discussions}
				initialDiscussionId={params.id}
				initialMessages={messages}
				initialUserId={user?.uid}
			/>
		</main>
	);
}
