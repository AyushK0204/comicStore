# Comic Book Store API

A simple RESTful API for managing a comic book store, built using Node.js, Express, and MongoDB.

## Features

- **CRUD Operations**: Create, read, update, and delete comic book records.
- **Search**: Search for comic books by name using regex.
- **Filter**: Filter books by price and other criteria using comparison operators (gt, gte, lt, lte).
- **Sort**: Sort comic books by price, author name, or year of publication.
- **Pagination**: Handle large datasets by paginating results.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- You have installed Node.js and npm.
- You have MongoDB installed and running on your local machine or a remote server.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/AyushK0204/comicStore.git
   ```

2. Navigate to the project directory:

   ```bash
   cd comicStore
   ```

3. Install the required dependencies:

   ```bash
   npm install
   ```

## Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```bash
PORT=
MONGO_URI=

```

_fill each filed with your info respectively_
