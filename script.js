// Fetch IP address using an external service
async function getIpAddress() {
    try {
        const response = await fetch('https://api64.ipify.org?format=json');
        const data = await response.json();
        return data.ip;
    } catch (error) {
        console.error('Error fetching IP address:', error);
        return 'Error';
    }
}

// Display the IP address on the webpage
async function displayIpAddress() {
    const ipAddressElement = document.getElementById('ip-address');
    const ipAddress = await getIpAddress();
    ipAddressElement.textContent = `Your IP Address is: ${ipAddress}`;
}

// Run the function when the page is loaded
window.onload = displayIpAddress;
