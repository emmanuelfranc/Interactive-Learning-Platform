document.addEventListener("DOMContentLoaded", function () {
    const yearRadios = document.querySelectorAll(
        '.year-section input[type="radio"]'
    );
    const fieldSection = document.querySelector(".field-section");
    const searchButton = document.getElementById("searchButton");
    const resultDiv = document.getElementById("result");

    yearRadios.forEach(function (radio) {
        radio.addEventListener("change", function () {
            fieldSection.classList.add("expanded");
            fieldSection.scrollIntoView({ behavior: "smooth", block: "start" });
        });
    });

    searchButton.addEventListener("click", function () {
        resultDiv.innerHTML = "";

        const searchResults = [
            {
                name: "Apply on Gradcracker",
                url: "https://www.gradcracker.com/search/computing-technology/software-work-placements-internships",
            },
            {
                name: "Apply on LinkedIn",
                url: "https://www.linkedin.com/in/emmanuel-francis-3367a821b",
            },
            {
                name: "Apply On Indeed",
                url: "https://uk.indeed.com/jobs?q=software+engineering+internship&l=&from=searchOnHP&vjk=ddf58662fcace537",
            },
            {
                name: "Apply On Target Connect",
                url: "https://www.targetconnect.com/",
            },
            // Add more search results here
        ]; // Replace with your actual results

        const list = document.createElement("ul");
        searchResults.forEach(function (result) {
            const listItem = document.createElement("li");
            const link = document.createElement("a");
            link.textContent = result.name;
            link.href = result.url;
            link.target = "_blank"; // to open links in a new tab
            listItem.appendChild(link);
            list.appendChild(listItem);
        });

        resultDiv.appendChild(list); // Append the list to the result div
        resultDiv.scrollIntoView({ behavior: "smooth", block: "start" }); // Scroll to the result div
    });
});
