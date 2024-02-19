import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import GameResultComponent from "./index";

describe("GameResultComponent", () => {
  const mockRestartGame = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders win result correctly", () => {
    render(<GameResultComponent result="win" restartGame={mockRestartGame} />);

    const winMessage = screen.getByText("Congratulations, You Won!");
    expect(winMessage).toBeInTheDocument();

    const backButton = screen.getByText("Back to main menu");
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(mockRestartGame).toHaveBeenCalledTimes(1);
  });

  it("renders lose result correctly", () => {
    render(<GameResultComponent result="lose" restartGame={mockRestartGame} />);
    const loseMessage = screen.getByText("Sorry, You Lost!");
    expect(loseMessage).toBeInTheDocument();

    const backButton = screen.getByText("Back to main menu");
    expect(backButton).toBeInTheDocument();

    fireEvent.click(backButton);
    expect(mockRestartGame).toHaveBeenCalledTimes(1);
  });
  it("renders in less than 3 milliseconds", () => {
    const startTime = performance.now();

    render(<GameResultComponent result="win" restartGame={() => {}} />);

    const endTime = performance.now();
    const renderTime = endTime - startTime;

    console.log("Render time:", renderTime);

    expect(renderTime).toBeLessThan(3);
  });
});
