"use client"

import React, { useState } from "react";
import people from "../../data/review";
import { ChevronLeftIcon, ChevronRightIcon, QuoteIcon } from "lucide-react";

export default function Review() {
	const [index, setIndex] = useState(0);

	if (!people || people.length === 0) {
		return null;
	}

	const { name, job, image, text } = people[index];

	const checkNumber = (number: number) => {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
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
	const maxIndex = people.length - 1;

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
				<img src={image} alt={name} className="person-img h-100 object-cover" />
		
			</div>
      		<span className="quote-icon">
					<QuoteIcon />
				</span>
			<h4 className="author">{name}</h4>
			<p className="job">{job}</p>
			<p className="info">{text}</p>
			<div className="button-container">
				<button className="prev-btn" onClick={prevPerson} aria-label="previous review">
					<ChevronLeftIcon />
				</button>
				<button className="next-btn" onClick={nextPerson} aria-label="next review">
					<ChevronRightIcon />
				</button>
			</div>
			<button className="random-btn" onClick={getRandomPerson}>
				Get Random Review
			</button>
		</article>
	);
}

