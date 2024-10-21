# Fintech

Fintech is a NextJS website with many UI components and features present in Fintechs, I built this for a take-home challenge by [Bix Tecnologia](https://bixtecnologia.com.br).

## Technologies Used

- [NextJS](https://nextjs.org) as the fullstack framework
- [Styled Components](https://tailwindcss.com) as the CSS-in-JS library
- [TypeScript](https://typescriptlang.org) as the programming language
- [Prisma](https://prisma.io) as the ORM
- [Zod](https://zod.dev) as the validation library (for forms and server actions)

## Run Yourself
  
Make sure to have Git, Bun, Docker and Docker Compose installed before trying to run this application. You can read these official guides to install these tools if you need to:

- [Install Git](https://git-scm.com/downloads)
- [Install Bun](https://bun.sh/docs/installation)
- [Install Docker](https://docs.docker.com/get-started/get-docker)
- [Install Docker Compose](https://docs.docker.com/compose/install)

Run the following commands in your terminal to run this application locally.

```sh
# Clone this repository and switch to its folder
git clone https://github.com/dcdm3g/fintech && cd fintech

# Install dependencies
bun i

# Start a local PostgreSQL database using Docker
docker compose up -d

# Copy the development environment variables
cp .env.example .en

# Start the development server
bun dev
```

## Requirements

### Functional Requirements

- [ ] Login page and a login-protected dashboard page
- [ ] Global and dynamic filters and all page content must be updated according to the applied filters
- [ ] Cards summarizing income, expenses, pending transactions and total balance
- [ ] Stacked bar charts and Line charts for visualizing transactions
- [ ] Filter transactions by dates, accounts, industries and status
- [ ] Sidebar for Dashboard page with Logout and Home options
- [ ] Persistence of session and filter value without a database

### Non-Functional Requirements

- [ ] Responsive and interactive design
- [ ] Use of NextJS, TypeScript and Styled Components
- [x] Installation instructions and any relevant notes in the README
- [ ] Use the dataset provided in the challenge as a data source
