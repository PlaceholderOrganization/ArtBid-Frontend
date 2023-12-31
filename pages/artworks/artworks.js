import { API_URL } from "../../settings.js";
const URL = API_URL + "/artwork";

import { sanitizeStringWithTableRows } from "../../utils.js";


export async function initArtworks() {

    document.querySelector("#search-btn").addEventListener("click", findByCategory);

    document.querySelector("#tbl-body").onclick = showArtworkDetails
    getAndRenderArtworks()
}
async function getAndRenderArtworks() {
       try {
        const artworksFromServer = await fetch(URL).then(res => res.json())
        renderArtworkData(artworksFromServer)
        } catch (e) {
            console.log("Error fetching artworks: " + e)
        }
}

function renderArtworkData(data) {
    const tableRows = data.map(artwork => `
    <tr>
    <td><img class="art-image-btn" id="image-btn_${artwork.artworkId}" src="${artwork.image}"/></td>
    <td>${artwork.title}</td>
    <td>${artwork.description}</td>
    <td>${artwork.category}</td>
    <td>${artwork.forSale}</td>
    </tr>
    `)

    const tableRowsAsString = tableRows.join("")

    document.querySelector("#tbl-body").innerHTML =
    sanitizeStringWithTableRows(tableRowsAsString)
}

async function showArtworkDetails(event) {
    const target = event.target
    if (!target.id.startsWith("image-btn_")) {
        return
      }
      const id = target.id.replace("image-btn_", "")
      // @ts-ignore
      window.router.navigate("find-artwork?id=" + id)
}

async function findByCategory() {
    
    const dropdown = document.getElementById("dropdown");
    const selectedCategory = dropdown.value;
    
    try {
     
        const artworks = await fetch(URL).then((res) => res.json());

        const filteredArtworks = artworks.filter((artwork) => 
            artwork.category.toLowerCase() === selectedCategory.toLowerCase());
        console.log(JSON.stringify(artworks))
        console.log(JSON.stringify(filteredArtworks))
        document.querySelector("#tbl-body").innerHTML = ("")
        // Render the filtered data
        renderArtworkData(filteredArtworks);
    } catch (e) {
        console.log("Error fetching artworks: " + e);
    }
}