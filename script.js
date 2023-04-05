
const div = document.createElement("div");
div.style.textAlign = "center";
const input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "country");
const button = document.createElement("button");
button.setAttribute("type", "button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search";
button.style.marginLeft = "5px";
button.addEventListener("click", foo);


const container = document.createElement("div");
container.setAttribute("id", "brewery-details");


div.append(input, button);
document.body.append(div, container);

async function foo() {

  const country = document.getElementById("country").value;
  const url = `https://api.openbrewerydb.org/v1/breweries?by_country=${country}`;
  const response = await fetch(url);
  const breweries = await response.json();


  container.innerHTML = "";


  breweries.forEach(brewery => {
    const name = document.createElement("div");
    name.innerText = `Name: ${brewery.name}`;

    const breweryType = document.createElement("div");
    breweryType.innerText = `Brewery Type: ${brewery.brewery_type}`;

    const address = document.createElement("div");
    address.innerText = `Address: ${brewery.street}, ${brewery.city}, ${brewery.state} ${brewery.postal_code}, ${brewery.country}`;

    const phone = document.createElement("div");
    phone.innerText = `Phone: ${brewery.phone}`;

    const website = document.createElement("div");
    website.innerHTML = `Website: <a href="${brewery.website_url}" target="_blank">${brewery.website_url}</a>`;

    const breweryDetails = document.createElement("div");
    breweryDetails.classList.add("brewery-details");
    breweryDetails.append(name, breweryType, address, phone, website);

    container.append(breweryDetails);
  });
}
