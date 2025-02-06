const button = document.getElementById("After");

button.addEventListener("click", function () {
    const textEH = document.getElementById("Before");
    textEH.textContent = "Maintaining proper nutrition is the most worthwhile investment in your health.";

    const pHomepage = document.getElementById("P-Homepage");
    pHomepage.textContent = "Good nutrition is the foundation of overall health, both physically and mentally. Choosing a well-balanced diet with complete nutrients enhances bodily functions, prevents diseases, and helps maintain a healthy weight. Additionally, it aids recovery from illnesses and supports the health of the skin and various bodily systems.";

    const aHomepage = document.getElementById("St-learn");
    aHomepage.textContent = "Start Learning";
})