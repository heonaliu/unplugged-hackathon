# Unplugged Hackathon Website
- This is a website for a local hackathon hosted in my local community for highschoolers in Newton North High School and Newton South High School. It's meant to be a collaborative opportunity for high schoolers to get involved in STEM and put to use what they learned in their CS classes. It's near the end of the year after AP exams where hopefully students can relax, hence the name Unplugged.
- Deployed Site: [Unplugged Hackathon](https://nnhs-unplugged-28c10.web.app/)

## Why I Made This Project
- I made this project because our club's hackathon needed an informational webpage as a form of advertisement. Besides this, I also thought it would be beneficial to build on my knowledge working with React, styling with Tailwindcss and Firebase. If my website gets used, I hope this can be a good template to reference back to for future events that is created.

## How I Made This Project
- Inspired by the layout of [HooHacks](https://hoohacks.io/)
- Used a Javascript React Vite framework to build this web application
- In order to implement the Newsletter feature, I integrated Firebase and Firestore to store the submitted emails and names.
- I broke the different parts of the website into separate components so that it's easier to work with.
- Constellation background code and implementation was made from shadcn.io [here](https://www.shadcn.io/background/constellation)

## What I struggled with and what I learned
- One thing I struggled with is Tailwindcss. I'm used to creating css files and importing them into the React Components. However, I decided to try something different. After quite a bit of time researching Tailwindcss I slowly got a hang of it and how to use it (for example, mb means margin-bottom or py means padding-y). Building on this, I was able to experiment by tweaking the styling if it didn't look quite right (like add more padding between text/buttons).
- Another thing I struggled with is keeping my API keys private. I created an .env file and added the information there. However, I found that my API keys went through. I had to regenerate my API key several times in order to make sure the current one wasn't exposed and commited to this github. Next time, before committing, I need to make sure I add .env to .gitignore and remove git tracking on the .env file.


## 📦 Installation & Setup

If you’d like to run this project locally:

### 1️⃣ Clone the repository

```bash
git clone https://github.com/heonaliu/tako-memory.git
```

### 2️⃣ Navigate into the project folder

```bash
cd tako-memory
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Start the development server

```bash
npm run dev
```

Open your browser and go to:

```
http://localhost:5173
```

---
