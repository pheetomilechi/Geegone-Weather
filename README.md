☁ Geegone Weather App
This is a clean, responsive single-page web application designed to fetch and display real-time weather data for any location using the OpenWeatherMap API. Built using vanilla HTML, CSS, and JavaScript.

✨ Key Features
Real-time Data: Fetches current temperature, humidity, and wind speed.
Location Search: Users can search for weather in any major city.
Dynamic Visuals: Changes weather icons based on conditions (e.g., clear, rain, clouds, mist).
Simple UI: Clean and minimal design for easy readability.
🛠 Installation and Setup
To run this project locally, follow these simple steps.

1. Clone the Repository
<<<<<<< HEAD
git clone [https://github.com/YourUsername/geegone-weather-app.git](https://github.com/pheetomilechi/geegone-weather-app.git)
=======
git clone [https://github.com/YourUsername/geegone-weather-app.git](https://github.com/YourUsername/geegone-weather-app.git)
>>>>>>> a4ed7fd085d6d90e1587107b96fdb4c5d2d28598
cd geegone-weather-app

2. Get Your API Key
This application requires an API key from OpenWeatherMap to fetch data.

Create an account on OpenWeatherMap.
Navigate to the API Keys section and generate a new key.
3. Configure the Application
Open the weather.html file in your preferred code editor. You will need to replace the placeholder API key in the JavaScript section with your actual key.

Locate the following lines (or similar) in your <script> tag and update the apiKey:

// Replace THIS_IS_YOUR_API_KEY with the key you generated from OpenWeatherMap
const apiKey = "THIS_IS_YOUR_API_KEY";
const apiUrl = "[https://api.openweathermap.org/data/2.5/weather](https://api.openweathermap.org/data/2.5/weather)?...";

4. Run Locally
Simply open the weather.html file in your web browser.

⚙ Technologies Used
HTML5: Structure and content.
CSS3: Styling and layout.
JavaScript (Vanilla): Logic for fetching data and updating the DOM.
OpenWeatherMap API: Data source for all weather information.
📌 Troubleshooting
If you encounter an error like 400 Bad Request or Cannot set properties of null:

Check the API Key: Ensure your OpenWeatherMap API key is correctly pasted into the apiKey variable and has been active for at least a few hours.
<<<<<<< HEAD
Verify Search Input: Make sure the search input element is correctly referenced in your JavaScript, as this often leads to the search query (q) being undefined.
=======
Verify Search Input: Make sure the search input element is correctly referenced in your JavaScript, as this often leads to the search query (q) being undefined.
>>>>>>> a4ed7fd085d6d90e1587107b96fdb4c5d2d28598
