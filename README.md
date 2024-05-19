# Video Caption Generator

This is a simple React application that demonstrates basic features and best practices of building web applications using React.

## Hosted On : https://video-caption-generator.vercel.app/

## Tech Stack
- **Component-based Structure**: Utilizes React's component-based architecture for a modular and reusable UI with TypeScript.
- **State Management**: Implements state management using React hooks and Context API .
- **API Integration**: Demonstrates fetching data from an API using `fetch`.
- **Styling**: Uses ShadCN UI  & Tailwind for styling components.

## Functionality
**Fetch Video**
- The video URL is fetched when the "Fetch Video" button is clicked.
- The video player is updated with the new URL.
  
**Add Captions**
- Captions are added via a form that captures the text and timestamps (start and end).
- Captions are displayed on the video at the specified timestamps.
  
**CRUD Operations for Captions**
- Captions can be created, read, updated, and deleted.
- Each caption is managed using a unique ID.
  
**Converting Captions to WEBVTT Format**
- Loop over the captions array and convert it into vtt format.
- Creating a new Blob object of vtt content and using its url and passing it video player for providing caption.
  
**Display Captions**
- Captions are overlaid on the video player during the specified timeframes.


## Getting Started

To run this application locally, follow these steps:

1. **Clone the repository**:

   git clone https://github.com/username/Video-Caption-Generator.git)

2. **Navigate into the project directory**:
   
   cd react-app

3. **Install dependencies**:

    npm install

4.**Start the development server**:
   
   npm run dev

5. Open your browser and navigate to http://localhost:5173/ to view the app.
