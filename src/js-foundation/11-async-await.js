async function httpRequest(url) {
  try {
    const request = await fetch(url);
    const response = await request.json();

    console.log(response);
  } catch (error) {
    console.error(error); 
  } 
}

httpRequest("https://api.breakingbadquotes.xyz/v1/quotes");