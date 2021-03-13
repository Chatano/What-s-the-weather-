# What's the weather? ❄🌥

**Version 1.0.0**

A project that uses Next.js with Typescript, where it requests from OpenWeather API (external API) the temperature of the city that the user chooses!

## Configuration

### Step 1. Set up environment variables

Copy the `.env.example` file in this directory to `.env` (which will be ignored by Git):

```bash
cp .env.example .env
```

Then set each variable on `.env`:

- `APP_OPENWEATHER_API_KEY` should be your OpenWeather API KEY

Your `.env` file should look like this:

```bash
APP_OPENWEATHER_API_KEY=...
```

### Step 2. Run Next.js in development mode

```bash
npm install
npm run dev

# or

yarn install
yarn dev
```

After it, your project will run at `http://localhost:3000`

---

### License & copyright

© Caetano Pradiée Martins, Software Developer