import {
	collection,
	onSnapshot,
	query,
	getDocs,
	doc,
	updateDoc,
	orderBy,
	addDoc,
	serverTimestamp,
} from "firebase/firestore";
import { db } from "@/lib/firebase/firebase";

function formatDate(date) {
	return date.toLocaleTimeString("en-US");
}

function formatDiscussionDoc(doc) {
	const data = doc.data();
	return {
		id: doc.id,
		latestMessage: data.latestMessage,
		updatedTime: formatDate(data.updatedTime.toDate()),
	};
}

function getDiscussionsQuery(db, userId) {
	if (!userId) {
		return null;
	}
	const discussionsRef = collection(db, "users", userId, "discussion");
	return query(discussionsRef, orderBy("updatedTime", "desc"));
}

async function getDiscussions(db, userId) {
	if (!userId) {
		return [];
	}
	const q = getDiscussionsQuery(db, userId);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(formatDiscussionDoc);
}

function subscribeToDiscussions(userId, callback) {
	if (!userId) {
		return;
	}

	const q = getDiscussionsQuery(db, userId);

	const unsubscribe = onSnapshot(q, querySnapshot => {
		const discussions = querySnapshot.docs.map(formatDiscussionDoc);
		if (typeof callback !== "function") {
			return;
		}

		callback(discussions);
	});

	return unsubscribe;
}

// Replace the getMessagesQuery() function below ⬇️
// function getMessagesQuery(db, userId, discussionId) {
// 	return {};
// }
// Replace the getMessagesQuery() function above ⬆️
function getMessagesQuery(db, userId, discussionId) {
	if (!userId || !discussionId) {
			return null;
	}
	const messagesRef = collection(
			db,
			"users",
			userId,
			"discussion",
			discussionId,
			"messages"
	);
	return query(messagesRef, orderBy("createTime", "asc"));
}
// Replace the handleMessageDoc() function below ⬇️
// function handleMessageDoc(doc) {
// 	return {};
// }
function handleMessageDoc(doc) {
	const data = doc.data();
	const item = {
			prompt: data.prompt,
			response: data.response,
			id: doc.id,
			createTime: formatDate(data.createTime.toDate()),
	};

	if (data?.status?.completeTime) {
			item.completeTime = formatDate(data.status.completeTime.toDate());
	}

	return item;
}
// Replace the handleMessageDoc() function above ⬆️

async function getMessages(db, userId, discussionId) {
	if (!userId || !discussionId) {
		return [];
	}

	const q = getMessagesQuery(db, userId, discussionId);
	const querySnapshot = await getDocs(q);
	return querySnapshot.docs.map(handleMessageDoc);
}

function subscribeToMessages(userId, discussionId, callback) {
	if (!userId || !discussionId) {
		return;
	}

	const q = getMessagesQuery(db, userId, discussionId);

	const unsubscribe = onSnapshot(q, querySnapshot => {
		const messages = querySnapshot.docs.map(handleMessageDoc);
		callback(messages);
	});

	return unsubscribe;
}

async function addNewMessage({ db, userId, discussionId, message }) {
	if (!userId) {
		throw new Error("userId is required");
	}
	if (!discussionId) {
		throw new Error("discussionId is required");
	}
	if (!message?.length) {
		throw new Error("message is required");
	}

	if (discussionId === "new") {
		const newDiscussionRef = await addDoc(
			collection(db, "users", userId, "discussion"),
			{
				updatedTime: serverTimestamp(),
				latestMessage: message,
			}
		);

		discussionId = newDiscussionRef.id;
	}

	// Insert your code below ⬇️
	await addDoc(
        collection(
                db,
                "users",
                userId,
                "discussion",
                discussionId,
                "messages"
        ),
        {
                prompt: message,
                createTime: serverTimestamp(),
        }
	);

	await updateDoc(doc(db, "users", userId, "discussion", discussionId), {
			latestMessage: message,
			updatedTime: serverTimestamp(),
	});
	// Insert your code above ⬆️
	return discussionId;
}

export {
	getDiscussions,
	subscribeToDiscussions,
	getMessages,
	subscribeToMessages,
	addNewMessage,
};
