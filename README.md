# High-Performance Web Platform for local business(Next.js Case Study)

> **Note on Confidentiality:**  This repository has been anonymised, as it was a production website that I built for a local business in my area. Due to that fact the original branding and images are mdoified and generic to protect my clients confidentiality.

## Visual Project Demonstration
The production site has since gone offline and or changed branding, a full 60-second video walkthrough demonstrating the responsive layout, component lifecycle, and UI functionality can be viewed below:



---

## Business Impact & Core Objectives
The client required a modern web presence to reach new clients that are searching for their serivce on the web. 
* **Mobile First Architecture:** Engineered specifically for the South African mobile consumer using low-latency rendering.
* **SEO Optimization:** Structured semantic HTML and meta-tag engines to boost organic visibility on Google.
* **Lead Generation:** Integrated lightweight, reliable form validation to capture inbound user inquiries seamlessly.

---

## Technical Stack & Architecture

* **Frontend Framework:** Next.js (React.js)
* **Styling Engine:** Tailwind CSS / Styled Components
* **State Management:** React Context API / Hooks
* **Deployment Setup:** Local Development Environment (Architected for Vercel/Netlify hosting pipelines)

### Key Engineering Features Built:
1. **Performance Optimization:** Implemented Next.js Image optimization (`next/image`) alongside lazy-loading to keep initial bundle sizes low.
2. **Modular Code Design:** Built a completely reusable library of UI components (buttons, input fields, navigation sheets) to ensure scaling the site layout is effortless.
3. **Strict Client-Side Validation:** Form inputs are sanitised and validated on the client side before triggering submission states.

---

## Local Installation & Setup Instructions

To clone this repository and review the codebase execution on your local machine, run the following commands in your terminal:

1. Clone the project files:
   ```bash
   git clone https://github.com
   ```

2. Open the project root directory:
   ```bash
   cd mnmbusiness
   ```

3. Install the node module dependencies:
   ```bash
   npm install
   ```

4. Boot up the local development engine:
   ```bash
   npm run dev
   ```

5. Open your browser and navigate to `http://localhost:3000` to review the application.
