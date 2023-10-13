import { API_URL } from "../../settings.js";

const URL = API_URL + "/auctions";

export async function initAuctionDetails(auctionId) { // Receive auctionId as a parameter
    document.addEventListener("DOMContentLoaded", () => fetchAuctionDetails(auctionId));
}

async function fetchAuctionDetails(auctionId) { // Receive auctionId as a parameter
    try {
        const response = await fetch(URL+`/${auctionId}`); // Correct the URL formation
        const data = await response.json();

        const auctionDetails = document.getElementById("auction-details");
        document.getElementById("auctionId").textContent = data.auctionId;
        document.getElementById("artworkId").textContent = data.artworkId;
        document.getElementById("startDate").textContent = data.startDate;
        document.getElementById("endDate").textContent = data.endDate;
        document.getElementById("startBid").textContent = data.startBid;
        document.getElementById("currentBid").textContent = data.currentBid;
        document.getElementById("minimumIncrement").textContent = data.minimumIncrement;
    } catch (error) {
        console.error("Error fetching auction data: ", error);
    }
}
