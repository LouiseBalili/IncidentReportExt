document.addEventListener("DOMContentLoaded", () => {
    const toggleSwitch = document.getElementById("toggleSwitch");
    const statusActive = document.getElementById("statusActive");
    const statusInactive = document.getElementById("statusInactive");

    // Function to update the status display
    const updateStatus = () => {
        if (toggleSwitch.checked) {
            statusActive.style.display = "block";
            statusInactive.style.display = "none";
        } else {
            statusActive.style.display = "none";
            statusInactive.style.display = "block";
        }
    };

    // Initialize the status display
    updateStatus();

    // Add event listener to toggle switch
    toggleSwitch.addEventListener("change", updateStatus);
});