# About

The project was implemented in order to learn the **Next JS** framework, understand the skills of development and deployment of fullstack applications, user authentication and application interaction with the MongoDB database.

This is based on the **JavaScript Mastery** tutorial video, which used Next 13. I had to update the project to the latest Next 14.1 version myself.

The implementation on the Next framework made it possible to make a modern and very fast site. PageSpeed Insights results:

<img src="https://github.com/getFrontend/next-app-ai-prompts/blob/main/public/pagespeed_mobile.png?raw=true" width="49%"/> <img src="https://github.com/getFrontend/next-app-ai-prompts/blob/main/public/pagespeed_desktop.png?raw=true" width="49%"/>

✅ Mobile: 98 / 100 / 100 / 100

✅ Desktop: 93 / 100 / 100 / 100

## 🔋 Features

✅ **Modern Design with Glassmorphism Trend Style:**

A modern and visually appealing design, incorporating the glassmorphism trend style for a sleek and contemporary appearance.

![](https://github.com/getFrontend/next-app-ai-prompts/blob/main/public/aiprompts_preview.png?raw=true)

✅ **Discover and Share AI Prompts:**

Allow users to discover AI prompts shared by the community and create their own prompts to share with the world.

✅ **Edit and Delete Created Prompts:**

Users have the ability to edit their created prompts at any time and delete them when needed.

✅ **Profile Page:**

Each user gets a dedicated profile page showcasing all the prompts they've created, providing an overview of their contributions.

✅ **View Other People's Profiles:**

Users can explore the profiles of other creators to view the prompts they've shared, fostering a sense of community.

✅ **Copy prompt to Clipboard:**

Implement a convenient "Copy to Clipboard" functionality for users to easily copy the AI prompts for their use.

✅ **Search Prompts by Specific text, username or tag:**

Allow users to search for prompts based on specific tags, making it easier to find prompts related to specific topics.

✅ **Google Authentication using NextAuth:**

Enable secure Google authentication using NextAuth, ensuring a streamlined and trustworthy login experience.

✅ **Responsive Website with Tailwind CSS:**

Develop a fully responsive website to ensure optimal user experience across various devices, from desktops to smartphones.

and many more, including code *architecture* and *reusability*.

## Tech Stack

- Next.js + Turbopack
- MongoDB
- NextAuth + Google OAuth 2.0
- TailwindCSS

## API

API folder structure:

* Auth
* Prompt
	* ID
	* New
* Users

### API endpoints

Get all prompts:

**GET**: `/api/prompt`

Get all posts for the user:

**GET**: `/api/users/${session?.user.id}/posts`

Get all posts of the user on the user`s profile:

**GET**: `/api/users/${params?.id}/posts`

Get prompt by ID:

**GET**: `/api/prompt/${promptId}`

Create new prompt:

**POST**: `api/prompt/new`

Delete prompt:

**DELETE**: `/api/prompt/${post._id.toString()}`

Update prompt after editing:

**PATCH**: `/api/prompt/${promptId}`

### Error Handling

The API endpoints return error responses with status code (200, 404, 500) and message.

## Installation

Make sure you have the following installed on your machine:

* Git
* Node.js
* npm (Node Package Manager)

1. Clone the repository to your local machine using the following command:
```bash
git clone https://github.com/getFrontend/next-app-ai-prompts.git
```
2. Install the necessary dependencies by navigating to the project directory and running:
```bash
npm install
```
3. Create a `.env` file in the root directory of the project and add the following environment variables:

```bash

GOOGLE_ID=
GOOGLE_CLIENT_SECRET=
MONGODB_URI=
NEXTAUTH_URL=http://localhost:3000
NEXTAUTH_URL_INTERNAL=http://localhost:3000
NEXTAUTH_SECRET=

```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on these corresponding websites from Google Cloud Console, Cryptpool (for random Auth Secret), and MongoDB.

4. Run the app:

```bash
   npm run dev
```

Open http://localhost:3000 in your browser to view the project.