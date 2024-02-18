// import nunjucks from "https://esm.sh/nunjucks@3.2.4";

// import {
// 	getFunctions,
// 	httpsCallable,
// 	connectFunctionsEmulator,
// } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-functions.js";

// import {
// 	getFirestore,
// 	addDoc,
// 	collection,
// 	connectFirestoreEmulator,
// 	onSnapshot,
// 	query,
// 	orderBy,
// 	serverTimestamp,
// } from "https://www.gstatic.com/firebasejs/9.22.2/firebase-firestore.js";

// const db = getFirestore(app);
// const functions = getFunctions(app);

// // Uncomment these lines to use the local emulator
// // connectFirestoreEmulator(db, "127.0.0.1", 8080);
// // connectFunctionsEmulator(functions, "127.0.0.1", 5001);

// const addMockReviews = httpsCallable(functions, "addMockReviews");

// const DB_COLLECTION_NAME = "bot";

// function configureNunjucks() {
// 	nunjucks.configure("/views", { autoescape: true, noCache: true });
// }

// function renderReviews(reviews = [], averageReductionPercent, averageRating) {
// 	const template = nunjucks.render("reviews.html", {
// 		reviews,
// 		averageReductionPercent,
// 		averageRating,
// 	});
// 	document.querySelector(".original-reviews").innerHTML = template;
// }

// function calculateReductionPercent(summary, originalReview) {
// 	const summaryLength = summary.length;
// 	const originalReviewLength = originalReview.length;
// 	const reductionPercent =
// 		((originalReviewLength - summaryLength) / originalReviewLength) * 100;
// 	return Math.round(reductionPercent);
// }

// function monitorReviews() {
// 	onSnapshot(
// 		query(collection(db, DB_COLLECTION_NAME), orderBy("timestamp", "desc")),
// 		(snapshot) => {
// 			let totalReductionPercent = 0;
// 			let totalRating = 0;
// 			const reviews = snapshot.docs.map((doc) => {
// 				const data = doc.data();
// 				let review;

// 				if (data.text) {
// 					try {
// 						const parsedJSON = JSON.parse(data.text);
// 						review = {
// 							...parsedJSON,
// 							originalReview: data.originalReview,
// 							prompt: data.input,
// 							response: data.text,
// 							reductionPercent: calculateReductionPercent(
// 								parsedJSON.summary,
// 								data.originalReview,
// 							),
// 						};

// 						totalReductionPercent += review.reductionPercent;
// 						totalRating += review.rating;
// 					} catch (error) {
// 						console.log(`There was an error parsing the data:`, {
// 							error,
// 							data,
// 							docID: doc.id,
// 						});
// 					}
// 				}

// 				return review || data;
// 			});

// 			const averageReductionPercent = Math.round(
// 				totalReductionPercent / reviews.length,
// 			);
// 			const averageRating = Math.round(totalRating / reviews.length);
// 			renderReviews(reviews, averageReductionPercent, averageRating);
// 		},
// 	);
// }

// function registerButtonEventListeners() {
// 	document.body.addEventListener("click", async (event) => {
// 		if (event.target.classList.contains("add-reviews")) {
// 			await addMockReviews();
// 		}
// 	});
// }

async function init() {
	// configureNunjucks();
	// monitorReviews();
	// registerButtonEventListeners();
	console.log("init!sss")
}

export default { init };
