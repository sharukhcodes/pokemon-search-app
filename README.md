# Pokémon Search App

A responsive web application for searching and viewing details of Pokémon, built using Next.js, React, Tailwind CSS, and the PokéAPI.

## Tech Stack

- **Next.js**: A React framework that enables functionality such as server-side rendering and generating static websites.
- **React**: A JavaScript library for building user interfaces.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Axios**: A promise-based HTTP client for the browser and Node.js used to fetch data from the Pokémon API.
- **PokéAPI**: The RESTful Pokémon API used to fetch Pokémon data.

## Functionalities Implemented

### 1. Dynamic Routing
- **Dynamic Routes**: Next.js dynamic routes (e.g., `pages/pokemon/[id].js`) are used to render individual Pokémon details pages based on the Pokémon ID in the URL.

### 2. Server-Side Rendering (SSR)
- **Server-Side Rendering**: The application uses server-side rendering to fetch data on the server before sending the page to the client, improving performance and SEO.

### 3. Custom Hooks
- **Custom Hooks**: A custom hook (`usePokemon`) is used to manage Pokémon data fetching and filtering logic, separating concerns from the UI components.

### 4. State Management
- **State Management**: React's `useState` and `useEffect` hooks are used to manage and fetch Pokémon data and to handle user input for filtering Pokémon by type and search term.

### 5. Responsive Design
- **Responsive Design**: Tailwind CSS is used to ensure the application is fully responsive and looks good on different screen sizes, including mobile and desktop.

### 6. Custom Styles and Effects
- **Custom Styles**: Tailwind CSS custom utilities are used to style the components with effects like shadows, hover states, and transitions for a better user experience.

### 7. Component-Based Architecture
- **Component-Based Architecture**: The application is built using reusable React components (`PokemonCard`, `PokemonDetails`), ensuring a modular and maintainable codebase.

### 8. Image Optimization
- **Image Optimization**: High-resolution images are used for Pokémon details, and appropriate sizes are set for responsiveness.

## Setup and Installation

1. Clone the repository:
   
**git clone https://github.com/mr-robot-abhi/pokemon-search-app.git**
   
2. Navigate to the project directory:

**cd pokemon-search-app**

3. Install the dependencies:

**npm install**

4. Start the development server:

**npm run dev**

Please drop a star is your liked this mini project. 
Contributors: 


 [mr-robot-abhi](https://github.com/mr-robot-abhi)
 
 Abhshek Swamy H.M. 
