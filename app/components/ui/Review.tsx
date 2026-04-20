"use client"

import React, { useEffect, useState } from "react";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";
import { Button } from "./button";
import { useReviews, type ReviewsStore } from "../../../store/useReviews";

export default function Review() {
	const [index, setIndex] = useState(0);
	const reviews = useReviews((state) => state.reviews);
	const isLoading = useReviews((state) => state.isLoading);
	const isError = useReviews((state) => state.isError);
	const fetchReviews = useReviews((state) => state.fetchReviews);

	useEffect(() => {
		if (reviews.length === 0 && !isLoading) {
			void fetchReviews();
		}
	}, [fetchReviews, isLoading, reviews.length]);

	if (isError) {
		return <p className="text-sm text-red-300">Unable to load reviews right now.</p>;
	}

	if (isLoading && reviews.length === 0) {
		return <p className="text-sm text-[var(--muted-foreground)]">Loading reviews...</p>;
	}

	if (reviews.length === 0) {
		return null;
	}

	const currentReview: ReviewsStore["reviews"][number] = reviews[index];
	const initials = currentReview.reviewer_name
		.split(" ")
		.filter(Boolean)
		.slice(0, 2)
		.map((part) => part[0])
		.join("")
		.toUpperCase();

	const checkNumber = (number: number) => {
		if (number > reviews.length - 1) {
			return 0;
		}
		if (number < 0) {
			return reviews.length - 1;
		}
		return number;
	};

	const nextPerson = () => {
		setIndex((index) => {
			let newIndex = index + 1;
			return checkNumber(newIndex);
		});
	};

	const prevPerson = () => {
		setIndex((index) => {
			let newIndex = index - 1;
			return checkNumber(newIndex);
		});
	};

	const minIndex = 0;
	const maxIndex = reviews.length - 1;

	const getRandomPerson = () => {
		const getRandomIntInclusive = (min: number, max: number) => {
			min = Math.ceil(min);
			max = Math.floor(max);
			return Math.floor(Math.random() * (max - min + 1) + min);
		};

		let randomIndex = getRandomIntInclusive(minIndex, maxIndex);
		if (randomIndex === index) {
			randomIndex = index + 1;
		}
		setIndex(checkNumber(randomIndex));
	};

	return (
		<article className=" flex justify-center flex-col">
			<div className="img-container flex justify-center relative ">
				<div
					aria-label={`${currentReview.reviewer_name} initials avatar`}
					className="person-img flex h-24 w-24 items-center justify-center rounded-full border border-[var(--setBorderColorGold)] bg-gradient-to-br from-[var(--boxgradient-color)]/25 via-[var(--primary-accent)]/20 to-transparent text-2xl font-bold tracking-wide text-[var(--headder-text-color)] shadow-md"
				>
					{initials}
				</div>
		
			</div>
      		<span className="quote-icon">
					<QuoteIcon />
				</span>
			<h4 className="author">{currentReview.reviewer_name}</h4>
			<p className="job">Verified Client</p>
			<p className="info">{currentReview.comment}</p>
			<div className="button-container flex gap-2">
				<Button variant="ghost" size="icon" onClick={prevPerson} aria-label="previous review">
					<ChevronLeftIcon />
				</Button>
				<Button variant="ghost" size="icon" onClick={nextPerson} aria-label="next review">
					<ChevronRightIcon />
				</Button>
			</div>
			<Button className="mt-4" onClick={getRandomPerson}>
				Get Random Review
			</Button>
		</article>
	);
}

