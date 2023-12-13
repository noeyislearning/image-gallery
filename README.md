# Image Gallery

![Imgur](https://i.imgur.com/Lvkw6Ad.png)

Image Gallery, a straightforward yet dynamic webpage that retrieves and displays a list of items sourced from the Pexels API.

## Built With

![JavaScript](https://img.shields.io/badge/JavaScript-646CFF?style=for-the-badge&logo=javascript&logoColor=white)
![React](https://img.shields.io/badge/React-646CFF?style=for-the-badge&logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-646CFF?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-646CFF?style=for-the-badge&logo=vercel&logoColor=white)
![Pexels](https://img.shields.io/badge/Pexels_API-646CFF?style=for-the-badge&logo=pexels&logoColor=white)

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [License](#license)

## Installation

- Clone the **[repository](https://github.com/noeyislearning/image-gallery)** and run the following command in the root directory:

  ```bash
  npm install
  ```

- Create a `.env` file in the root directory and add the following:

  ```bash
  VITE_PEXELS_API_KEY=your_pexels_api_key
  ```

- To get your Pexels API key, go to **[Pexels API](https://www.pexels.com/api/)** and click the button `Get API Key`.

- Then run the following command to start the application locally:

  ```bash
  npm run dev
  ```

- Once the application is running locally, you can access it at `http://localhost:5173/`.

⚠️ Additional, you can also access the application at **[imagegallery.noeyislearning.dev](https://imagegallery.noeyislearning.dev/)**.

## Usage

- The application will display a list of images sourced from the Pexels API.

- It displays **6 images per** page or it can be changed by changing the `perPage` variable in the `App.js` file.

- It also has pagination that allows you to navigate through the pages.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
