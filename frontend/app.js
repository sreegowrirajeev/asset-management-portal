console.log("APP JS LOADED");
const API_URL = "http://localhost:5000/api/assets";

async function loadAssets() {

    try {

        const response = await fetch(API_URL);

        const assets = await response.json();

        let tableBody =
            document.getElementById("assetTable");

        tableBody.innerHTML = "";

        assets.forEach(asset => {

            tableBody.innerHTML += `
                <tr>
                    <td>${asset.id}</td>
                    <td>${asset.asset_name}</td>
                    <td>${asset.asset_type}</td>
                    <td>${asset.owner}</td>
                </tr>
            `;
        });

    } catch (error) {

        console.error(
            "Error loading assets:",
            error
        );
    }
}
async function saveAsset() {

    console.log("SAVE BUTTON CLICKED");

    const asset_name =
        document.getElementById("asset_name").value;

    const asset_type =
        document.getElementById("asset_type").value;

    const owner =
        document.getElementById("owner").value;

    if (
        asset_name === "" ||
        asset_type === "" ||
        owner === ""
    ) {
        alert("Please fill all fields");
        return;
    }

    try {

        const response = await fetch(
            API_URL,
            {
                method: "POST",

                headers: {
                    "Content-Type":
                        "application/json"
                },

                body: JSON.stringify({
                    asset_name,
                    asset_type,
                    owner
                })
            }
        );

        const result =
            await response.json();

        console.log(result);

        document.getElementById(
            "asset_name"
        ).value = "";

        document.getElementById(
            "asset_type"
        ).value = "";

        document.getElementById(
            "owner"
        ).value = "";

        loadAssets();

    } catch (error) {

        console.error(
            "Error saving asset:",
            error
        );
    }
}
async function deleteAsset() {

    const id =
        document.getElementById("asset_id").value;

    if (id === "") {

        alert("Please enter Asset ID");

        return;
    }

    try {

        const response = await fetch(
            `${API_URL}/${id}`,
            {
                method: "DELETE"
            }
        );

        const result =
            await response.json();

        console.log(result);

        alert(result.message);

        loadAssets();

    } catch (error) {

        console.error(
            "Error deleting asset:",
            error
        );
    }
}
window.onload = function () {
    loadAssets();
};
