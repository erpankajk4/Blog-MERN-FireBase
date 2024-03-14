# Blog-MERN
This repository contains the source code for a blogging application built using the MERN stack (MongoDB, Express.js, React.js, and Node.js). The application features a comprehensive set of functionalities for creating, managing, and interacting with blog posts, including user authentication, admin dashboard, and social login options.
# Deploy Link on render.com:<br>
https://blog-mern-firebase.onrender.com

## Admin Login Details
Username: admin@gmail.com <br>
Password: 123456<br>
**Note:** Becoming an admin in this app is possible only by having access to MongoDB Atlas. You can become an admin by setting `isAdmin` to "True" in MongoDB collection. For demonstration purposes, admin login details are provided for testing CRUD operations on posts.
![Untitled design](https://github.com/erpankajk4/Blog-MERN/assets/118353291/6165861c-87de-4b2e-919e-d34f017d2a07)

## Features
- **User Authentication**: Secure sign-up, sign-in, and sign-out functionalities.
- **Admin Dashboard**: Overview, comments management, post management and user management for administrators.
- **Post Management**: Create, update, delete, and view posts.
- **Comment Management**: Add, edit, delete, and like comments on posts.
- **User Profile**: Update user profile, including profile image.
- **Dark Mode**: Toggleable dark mode for a better user experience.
- **Social Login**: Google OAuth for easy sign-in.
- **Responsive Design**: Built with Tailwind CSS for a responsive and modern UI.
- **Error Handling**: Middleware for handling errors gracefully.
- **API Routes**: RESTful API routes for managing posts, users, and comments.

## Tech Stack
### Backend
- **Node.js**: JavaScript runtime environment for executing server-side code.
- **Express.js**: Web application framework for Node.js.
- **MongoDB**: NoSQL database for storing blog posts, users, and comments.
- **bcryptjs**: Library for hashing passwords.
- **jsonwebtoken**: Library for creating and verifying JSON Web Tokens (JWT).
- **dotenv**: Module for loading environment variables from a `.env` file.
- **cookie-parser**: Middleware for parsing cookies.

### Frontend
- **React.js**: JavaScript library for building user interfaces.
- **react-circular-progressbar:** Circular progress bar component for React.
- **Redux Toolkit**: State management library for managing application state.
- **Redux Persist**: Library for persisting and rehydrating a redux store.
- **React Router DOM**: Library for routing in React applications.
- **Tailwind CSS**: Utility-first CSS framework for styling.
- **Tailwind Scrollbar:** Tailwind CSS plugin for customizing scrollbars.
- **React Icons**: Library for using icons in React applications.
- **React Quill**: Rich text editor for React applications.
- **Firebase**: Library for integrating Firebase services like storing images and Google Authentication.
- **Moment**: Library for parsing, validating, manipulating, and displaying dates and times.
- **Flowbite React**: React components library based on Flowbite.
- **Vite**: Build tool and development server for frontend development.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/erpankajk4/Blog-MERN-FireBase.git
   ```
2. Navigate to the project directory:
   ```bash
   cd Blog-MERN
   ```
3. Install backend dependencies: 
   ```bash
   npm install
   ```
4. Install frontend dependencies:  
  ```bash
   cd ../frontend
   npm install
  ```
5. Set up environment variables:
Create a .env file in the backend and frontend directories.
FrontEnd .env -
```
VITE_FIREBASE_API_KEY="AIzaSyCRv__________o5KD1QaWg"
```
BackEnd .env - 
```
MONGO="mongodb+srv://blog-mern:blog-m______me=Cluster0"
JWT_SECRET="PXXXXXXt"
```
7. Run the development server:
# In the backend directory
```
npm run dev
```
# In the frontend directory
```
npm run dev
```

## Future Updates
- **Post Categories**: Implement post categories to organize content better.
- **User Post Management**: Allow users to post, delete, and update their own blogs.
- **Search Optimization**: Enhance search functionality for better user experience.
- **More Social Login Options**: Add support for more social login providers.
- 
## Contributing
Contributions are welcome! Please feel free to submit a pull request or open an issue if you find any bugs or have suggestions for improvements.

## License
This project is licensed under the ISC License. See the `LICENSE` file for details.
**Blog**
![Untitled design (3)](https://github.com/erpankajk4/Blog-MERN/assets/118353291/8831eecc-5200-47f2-844a-e559a360ca4f)
**Post List at Admin Side for CRUD Operations**
![screencapture-blog-mern-lpwd-onrender-dashboard-2024-03-08-21_51_53](https://github.com/erpankajk4/Blog-MERN/assets/118353291/c041760c-0602-4fdd-96f5-a5bab1601d7d)
**Admin Profile**
![screencapture-blog-mern-lpwd-onrender-dashboard-2024-03-08-21_51_29](https://github.com/erpankajk4/Blog-MERN/assets/118353291/9ae0d23e-c8a7-4b60-ae3a-78bd726577e7)
**About**
![screencapture-blog-mern-lpwd-onrender-about-2024-03-08-21_46_14](https://github.com/erpankajk4/Blog-MERN/assets/118353291/eb20a4ec-8b92-47fa-80a4-666ceef2c2d3)
**HOME**
![screencapture-blog-mern-lpwd-onrender-2024-03-08-21_45_41](https://github.com/erpankajk4/Blog-MERN/assets/118353291/7aa64edd-7ea4-44a6-b9e4-5b5e5bbd6c48)
