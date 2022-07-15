import React from "react";
import { render, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Modal from "../";

afterEach(cleanup);

describe("Modal component", () => {
	const onClose = jest.fn();
	const currentPhoto = {
		name: "test",
		category: "commercial",
		description: "test",
		index: 0,
	};
	it("renders", () => {
		render(<Modal onClose={onClose} currentPhoto={currentPhoto} />);
	});

	it("matches snapshot DOM node structure", () => {
		// Arrange the snapshot - declare variables
		const { container } = render(
			<Modal onClose={onClose} currentPhoto={currentPhoto} />
		);

		// Act - perform the action
		// Assert - check the result
		expect(container.firstChild).toMatchSnapshot();
	});
});

describe("Click Event", () => {
	const onClose = jest.fn();
	const currentPhoto = {
		name: "test",
		category: "commercial",
		description: "test",
		index: 0,
	};
	it("calls onClose handler", () => {
		// Arrange: Render Modal
		const { getByText } = render(
			<Modal onClose={onClose} currentPhoto={currentPhoto} />
		);
		// Act: Simulate click event
		const closeButton = getByText("Close this modal");
		closeButton.click();

		// Assert: Expected matcher
		expect(onClose).toHaveBeenCalled();
		expect(onClose).toHaveBeenCalledTimes(1);
	});
});
