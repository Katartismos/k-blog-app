# K-Blog 📰

K-Blog is a modern, high-performance blog platform built with the latest web technologies. It features a sleek, responsive design, a powerful rich-text editor, and seamless user authentication. Designed for creators who value both aesthetics and functionality, K-Blog provides a premium experience for writing and reading articles across various categories.

## ✨ Features

-   **Dynamic Article Management**: Organize content across categories like Technology, Travel, Food, Lifestyle, Finance, and Gaming.
-   **Rich Text Editing**: Integrated **Tiptap** editor for a smooth, feature-rich blogging experience.
-   **Smooth UI Animations**: Powered by **GSAP** for fluid transitions and a premium feel.
-   **Full-Stack Power**: Built with **Next.js 16 (App Router)** for optimized performance and SEO.
-   **Secure Authentication**: Integrated **Auth.js (NextAuth v5)** with Google OAuth provider support.
-   **Scalable Database**: Uses **MongoDB** and **Mongoose** for robust data persistence.
-   **Responsive Design**: Crafted with **Tailwind CSS** for a perfect look on any device.

## 🚀 Tech Stack

-   **Framework**: [Next.js 16](https://nextjs.org/)
-   **Language**: [TypeScript](https://www.typescriptlang.org/)
-   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
-   **Database**: [MongoDB](https://www.mongodb.com/) / [Mongoose](https://mongoosejs.com/)
-   **Authentication**: [Auth.js (NextAuth.js v5)](https://authjs.dev/)
-   **Editor**: [Tiptap](https://tiptap.dev/)
-   **Animations**: [GSAP](https://gsap.com/)

## 🛠️ Getting Started

### Prerequisites

-   Node.js 18+ (Node 20+ recommended)
-   MongoDB instance (Local or Atlas)
-   Google Cloud Console credentials (for OAuth)

### Installation

1.  **Clone the repository**:
    ```bash
    git clone <repository-url>
    cd blog-app
    ```

2.  **Install dependencies**:
    ```bash
    npm install
    ```

3.  **Set up environment variables**:
    Create a `.env.local` file in the root directory and add the following:
    ```env
    MONGODB_URI=your_mongodb_connection_string
    AUTH_SECRET=your_auth_js_secret
    AUTH_GOOGLE_ID=your_google_client_id
    AUTH_GOOGLE_SECRET=your_google_client_secret
    ```

4.  **Run the development server**:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📁 Project Structure

-   `app/`: Contains the main application routes, layouts, and server actions.
-   `components/`: Reusable UI components including the Tiptap editor and GSAP transitions.
-   `lib/`: Database configuration, Mongoose models, and utility constants.
-   `public/`: Static assets like icons and images.

## 📄 License

This project is licensed under the MIT License.
