"use server";

import { addNewMessage } from "@/lib/firebase/firestore.js";
import { getAuthenticatedAppForUser } from "@/lib/firebase/firebase";
import { getFirestore } from "firebase/firestore";
import { redirect } from "next/navigation";

export async function handleNewMessage(data) {
	const { app } = await getAuthenticatedAppForUser();
	const db = getFirestore(app);
	const originalDiscussionId = data.get("discussionId");
	const newDiscussionId = await addNewMessage({
		db,
		userId: data.get("userId"),
		discussionId: originalDiscussionId,
		message: data.get("new-message"),
	});

	if (originalDiscussionId === "new") {
		redirect(`/discussion/${newDiscussionId}`, "replace");
	}
}
