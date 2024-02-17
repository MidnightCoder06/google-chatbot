import { initializeApp } from "firebase-admin/app";
import { onCall, HttpsError } from "firebase-functions/v2/https";
import { logger } from "firebase-functions/v2";
import { getFirestore, Timestamp } from "firebase-admin/firestore";
import mockReviews from "./mock-reviews.js";

const DB_COLLECTION_NAME = "bot";

function shuffle(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[array[i], array[j]] = [array[j], array[i]];
	}
	return array;
}

export const addMockReviews = onCall((request) => {
	logger.info("Starting Cloud Function: Add Mock Reviews");
	const reviews = shuffle(mockReviews).slice(0, 2);
	for (const review of reviews) {
		// Add your updated prompt here ⬇️
		const reviewWithPrompt = `${review}`;
		// Add your updated prompt above ⬆️

		// Create a review document below, and add it to Firestore ⬇️
		const reviewDocument = {};
		// Create a review document above, and add it to Firestore ⬆️
	}
});

initializeApp();
