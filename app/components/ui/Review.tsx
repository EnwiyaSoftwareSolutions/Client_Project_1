"use client"

import { useEffect, useState } from "react";
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
		return (
			<p className="rounded-lg border border-red-400/30 bg-red-500/10 px-4 py-3 text-sm text-red-200">
				Unable to load reviews right now.
			</p>
		);
	}

	if (isLoading && reviews.length === 0) {
		return (
			<p className="rounded-lg border border-[var(--setBorderColorGold)]/25 bg-[var(--card)]/15 px-4 py-3 text-sm text-[var(--muted-foreground)]">
				Loading reviews...
			</p>
		);
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
		<article className="relative mx-auto flex w-full max-w-xl flex-col rounded-2xl border border-[var(--setBorderColorGold)]/45 bg-[var(--card)]/78 p-6 shadow-[0_18px_40px_-28px_rgba(0,0,0,0.28)] backdrop-blur-[2px] md:p-8">
			<div className="relative mb-5 flex justify-center">
				<div
					aria-label={`${currentReview.reviewer_name} initials avatar`}
					className="flex h-24 w-24 items-center justify-center rounded-full border border-[var(--setBorderColorGold)] bg-gradient-to-br from-[var(--boxgradient-color)]/25 via-[var(--primary-accent)]/20 to-transparent text-2xl font-bold tracking-wide text-[var(--headder-text-color)] shadow-md"
				>
					{initials}
				</div>
				<span className="absolute -right-1 top-1 flex h-10 w-10 items-center justify-center rounded-full border border-[var(--setBorderColorGold)]/60 bg-gradient-to-br from-[var(--card)] to-[var(--primary-accent)]/15 text-[var(--headder-text-color)] shadow-md">
					<QuoteIcon className="h-4 w-4" />
				</span>
			</div>

			<h4 className="text-center text-xl font-semibold text-[var(--headder-text-color)]">
				{currentReview.reviewer_name}
			</h4>
			<p className="mt-1 text-center text-xs uppercase tracking-[0.22em] text-[var(--setBorderColorGold)]/85">
				Verified Client
			</p>
			<p className="mt-4 min-h-28 text-center text-[15px] leading-7 text-[var(--foreground)]/72 md:text-base">
				{currentReview.comment}
			</p>

			<div className="mt-6 flex items-center justify-center gap-2">
				<Button
					variant="ghost"
					size="icon"
					onClick={prevPerson}
					aria-label="previous review"
					className="rounded-full border border-[var(--setBorderColorGold)]/45 bg-[var(--card)]/95 text-[var(--headder-text-color)] transition-all duration-200 hover:border-[var(--primary-accent)]/60 hover:bg-[var(--primary-accent)]/15"
				>
					<ChevronLeftIcon className="h-5 w-5" />
				</Button>
				<Button
					variant="ghost"
					size="icon"
					onClick={nextPerson}
					aria-label="next review"
					className="rounded-full border border-[var(--setBorderColorGold)]/45 bg-[var(--card)]/95 text-[var(--headder-text-color)] transition-all duration-200 hover:border-[var(--primary-accent)]/60 hover:bg-[var(--primary-accent)]/15"
				>
					<ChevronRightIcon className="h-5 w-5" />
				</Button>
			</div>
			{/* <Button
				className="mt-5 h-11 rounded-full border border-[var(--item-color-schema)]/30 bg-[var(--item-color-schema)]/95 px-6 text-black transition-all duration-200 hover:-translate-y-0.5 hover:bg-[var(--item-color-schema)] hover:shadow-[0_0_28px_-10px_var(--item-color-schema)]"
				onClick={getRandomPerson}
			>
				Get Random Review
			</Button> */}
		</article>
	);
}

