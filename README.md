# Propacity-Assignment
**Project Documentation**

**Project Title:** Contact Form Integration with Google Sheets and Propacity API

**Introduction:**

This project aims to create a contact form on a website that collects user data and sends it to both Google Sheets and a specified API (Propacity API) upon submission. The project involves frontend development, integration with Google Sheets for data storage, and API integration for data transmission to Propacity.

**Technology Stack:**

1. **HTML/CSS/JavaScript**: These technologies were used for frontend development to create the contact form and interface.

2. **Google Sheets**: Google Sheets was used as a data storage solution for storing contact form submissions.

3. **Tabletop.js**: Tabletop.js was utilized to connect and interact with the Google Sheets API.

4. **Fetch API**: The Fetch API was used to send HTTP POST requests to the Propacity API for data transmission.

**Project Implementation:**

**1. Frontend Development:**

- A responsive HTML/CSS layout was designed for the website, including a contact form and other sections.
- JavaScript was used to handle form submissions and user interactions.

**2. Google Sheets Integration:**

- A Google Sheet was created to store contact form submissions.
- Sharing settings were adjusted to make the Google Sheet publicly accessible.
- Tabletop.js was included in the HTML to interact with the Google Sheets API.

**3. API Integration (Propacity):**

- The Propacity API endpoint was identified for data transmission.
- JavaScript Fetch API was used to send data to the Propacity API as a JSON payload.

**4. Challenges Faced:**

- **Google Sheets Permissions:** Ensuring that the Google Sheet was correctly configured with the necessary permissions was a challenge. Public sharing settings had to be adjusted to make it accessible.

- **Tabletop.js Issues:** Initially, there were issues with the Tabletop.js library, and I had to use the correct URL format for Google Sheets to make it work.(Sheet db)

- **Error Handling:** Proper error handling was necessary to detect issues with API requests and data transmission.

- **Testing:** Thorough testing was required to ensure data was successfully sent to both Google Sheets and Propacity.

**Project Workflow:**

1. **Frontend Development:**
   - Designed the website layout.
   - Created a responsive contact form.
   - Implemented JavaScript to handle form submissions.

2. **Google Sheets Integration:**
   - Created a Google Sheet to store contact form data.
   - Adjusted sharing settings.
   - Integrated Tabletop.js to interact with Google Sheets.

3. **API Integration (Propacity):**
   - Identified the Propacity API endpoint.
   - Implemented JavaScript Fetch API to send data as JSON.

4. **Testing:**
   - Conducted thorough testing to ensure form data was successfully sent to Google Sheets and Propacity.
   - Checked for error handling and response validation.
   - link for Google sheet https://docs.google.com/spreadsheets/d/1aoWEFum3zIfHNiM9lNKh_FmnXqeqQQpmfaK1sTBOn1s/edit?usp=sharing

**Conclusion:**

This project successfully integrated a contact form with Google Sheets and the Propacity API. It allows users to submit their contact details, which are stored in a Google Sheet for future reference and transmitted to the Propacity API for further processing. Challenges related to permissions, library usage, and error handling were addressed during the development process, resulting in a functioning solution.

**Future Improvements:**

Future improvements may include enhancing the user interface, implementing further error handling and validation, and providing user feedback on successful form submissions. Additionally, security measures to protect user data during transmission should be considered.
