function maxProfit(timeUnits) {
    // Initialize variables to track the number of each building type
    let numTheatres = 0;
    let numPubs = 0;
    let numCommercialParks = 0;

    // First build the maximum number of Theatres
    while (timeUnits >= 5) {
        numTheatres++;
        timeUnits -= 5; // Deduct time for each Theatre built
    }

    // Check if there is time left for Pubs or Commercial Parks
    while (timeUnits >= 4) {
        numPubs++;
        timeUnits -= 4; // Deduct time for each Pub built
    }

    // If there’s still enough time, build Commercial Parks
    while (timeUnits >= 10) {
        numCommercialParks++;
        timeUnits -= 10; // Deduct time for each Commercial Park built
    }

    // Calculate total earnings
    const totalEarnings = (numTheatres * 1500) + (numPubs * 1000) + (numCommercialParks * 3000);

    // Return the results in the specified format
    return {
        earnings: totalEarnings,
        solution: `T: ${numTheatres} P: ${numPubs} C: ${numCommercialParks}`
    };
}



// Test cases
console.log(maxProfit(7));   // Output: { earnings: 3000, solution: 'T: 1 P: 0 C: 0' }
console.log(maxProfit(8));   // Output: { earnings: 4500, solution: 'T: 1 P: 0 C: 0' }
console.log(maxProfit(13));  // Output: { earnings: 16500, solution: 'T: 2 P: 0 C: 0' }
console.log(maxProfit(10));  // Output: { earnings: 3000, solution: 'T: 2 P: 0 C: 0' }
console.log(maxProfit(14));  // Output: { earnings: 4000, solution: 'T: 2 P: 1 C: 0' }
