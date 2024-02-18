// import { initializeApp } from "firebase-admin/app";
// import { onCall, HttpsError } from "firebase-functions/v2/https";
// import { logger } from "firebase-functions/v2";
// import { getFirestore, Timestamp } from "firebase-admin/firestore";
// import mockReviews from "./mock-reviews.js";

// const DB_COLLECTION_NAME = "bot";

// function shuffle(array) {
// 	for (let i = array.length - 1; i > 0; i--) {
// 		const j = Math.floor(Math.random() * (i + 1));
// 		[array[i], array[j]] = [array[j], array[i]];
// 	}
// 	return array;
// }

// export const addMockReviews = onCall((request) => {
// 	logger.info("Starting Cloud Function: Add Mock Reviews");
// 	const reviews = shuffle(mockReviews).slice(0, 2);
// 	for (const review of reviews) {
		
// 		// const reviewWithPrompt = `${review}`;

// 		const reviewWithPrompt = `Here's a user supplied review. Give me a shorter summary of the review, and a rating out of 5, and a flag which indicates if there was a product defect.

// Product name: "Blue t-shirt with cat picture". Review: """${review}"""

// Craft your response as JSON with properties has_defect, summary and rating. Don't include any extra text.`;
		

		
// 		// const reviewDocument = {};

// 		const reviewDocument = {
// 			input: reviewWithPrompt,
// 			originalReview: review,
// 			timestamp: Timestamp.now(),
// 		};
	
// 		getFirestore().collection(DB_COLLECTION_NAME).add(reviewDocument);
		
// 	}
// });

// initializeApp();
