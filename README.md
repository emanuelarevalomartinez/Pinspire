# Pinspire

**Minimal Pinterest-inspired web app built with Next.js (App Router) and Unsplash API.**

Pinspire is a small experimental web application created to practice modern Next.js features such as the App Router, server/client components, URL-based state, API routes, and external data fetching.
The app takes visual inspiration from Pinterest but focuses on a minimal, clean, and educational implementation, not a full clone.

## ✨ Overview

Pinspire allows users to explore image-based content fetched from the Unsplash API, navigate through pages using URL query parameters, and interact with a modular, scalable front-end architecture.

This project is intentionally small and simple, designed as a learning playground rather than a production-ready social platform.

## 🧠 Key Concepts Practiced

* Next.js 13+ App Router

* Server & Client Components

* API Routes (app/api)

* External API integration (Unsplash)

* URL state management with nuqs

* Modular folder architecture

* Reusable UI components

* Basic authentication structure (WIP)

* Tailwind CSS + shadcn/ui (Radix primitives)

## 🚀 Features

🖼️ Image feed powered by Unsplash API

🔎 Image exploration and pagination

🔗 URL-based pagination state (?page=)

🧩 Modular UI and feature-based structure

🎨 Minimal Pinterest-like layout

⚡ Optimized images with next/image

🧱 Scalable folder organization


## 🛠️ Tech Stack

* Framework: Next.js 13+ (App Router)

* Language: TypeScript

* Styling: Tailwind CSS

* UI Components: shadcn/ui (built on Radix UI primitives)

* Forms & Validation: React Hook Form + Zod

* State / URL State: nuqs

* Image Source: Unsplash API

* Package Manager: pnpm

## 📂 Project Structure


```text
Pinspire/
├─ app/                    # Next.js App Router pages
│  ├─ explore/             # Image exploration page
│  ├─ create/              # Create view (WIP)
│  ├─ dashboard/           # Dashboard view
│  ├─ companies/           # Companies page
│  ├─ news/                # News page
│  ├─ info/                # Info page
│  ├─ layout.tsx
│  └─ page.tsx
│
├─ components/
│  └─ ui/                  # shadcn/ui components (Radix + Tailwind)
│
├─ modules/                # Feature-based views
│  ├─ home/
│  ├─ auth/
│  └─ dashboard/
│
├─ services/
│  ├─ api.ts               # API client setup
│  └─ unsplash.service.ts  # Unsplash API logic
│
├─ shared/
│  ├─ cards/
│  │  └─ CardImageUnsplash.tsx
│  └─ inputs/
│     └─ Search.tsx
│
├─ schemas/                # Zod validation schemas
├─ store/                  # Auth state & context
├─ interfaces/             # TypeScript interfaces
├─ types/                  # Form & domain types
├─ public/
│  └─ icons/
│     └─ pinspire-icon.png
└─ README.md
```


## 🔑 Environment Variables

This project uses environment variables for the Unsplash API.

Create a .env.local file:

```bash
NEXT_PUBLIC_UNSPLASH_ACCESS_KEY=your_unsplash_access_key_here
```

#### 📌 Important

A .env.example file should be committed instead of real credentials to show required variables.

## ▶️ Getting Started

Install dependencies:
```bash
pnpm install
```

Run the development server:
```bash
pnpm dev
```

Open:
```bash
http://localhost:3000
```

## 🧪 Purpose of the Project

Pinspire is not intended to be a full Pinterest clone.

It exists to:

1. Practice real-world Next.js patterns

2. Experiment with project structure and modularity

3. Learn API integration and caching behavior

4. Improve UI composition and image handling

5. Serve as a personal reference project

## 📌 Future Improvements (Optional)

* User authentication flow

* Infinite scrolling

* Masonry layout

* Image saving / liking

* Better error handling

* Improved accessibility

## 🤝 Contributing

1. Fork
2. New branch
3. Commit (Conventional Commits preferred)
4. Pull Request

Feedback, features & issues welcome! 🚀


## 📝 License

Apache License 2.0 — free for personal and commercial use.

## 🔗 Repository

[GitHub - Pinspire](https://github.com/emanuelarevalomartinez/Pinspire)
