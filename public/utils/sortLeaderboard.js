function sortLeaderboard(iceCreamData) {
    iceCreamData.sort((a, b) => b.iceCreamCount - a.iceCreamCount);
}

export { sortLeaderboard };
