# Backend template

This is a simple backend template for Node.js applications.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- Node.js
- npm or pnpm

### Installation

1. Clone the repo
   ```sh
   git clone https://github.com/prasoonk1204/backend_template.git
   ```
2. Install NPM packages
   ```sh
   npm install
   # or
   pnpm install
   ```
3. Create a `.env` file in the root directory and add the environment variables as mentioned in the `.env.example` file.

### Running the application

```sh
npm run dev
# or
pmpn dev
```

## Environment Variables

- `PORT`: The port the application will run on.
- `CORS_ORIGIN`: The allowed origins for CORS.
- `MONGODB_URI`: The connection string for your MongoDB database.

## Folder Structure

```
.
├── public
│   └── images
├── src
│   ├── controllers
│   ├── db
│   ├── middlewares
│   ├── models
│   ├── routes
│   ├── utils
│   └── validators
├── .env.example
├── .gitignore
├── .prettierignore
├── .prettierrc
├── app.js
├── index.js
└── package.json
```

## API Endpoints

- `GET /`: A simple test endpoint that returns "Hello World!".

You can add more details about your API endpoints here.