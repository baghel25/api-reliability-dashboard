# API Reliability Dashboard

A lightweight internal dashboard to monitor the health and reliability of public APIs using **Next.js (App Router)**.

It performs real-time health checks, measures latency, classifies service status, and displays a health score.

---

## 🚀 Features

### Dashboard

- Displays a list of monitored services
- Shows:
  - Service name
  - Status (**UP / SLOW / DOWN**)
  - Response latency (ms)
  - Last checked timestamp
  - Health score

### Service Management

- Add a new service (name + URL)
- Delete a service
- Manually refresh a service’s health status
- Instant UI update using `router.refresh()`

### Health Check Logic

Each service is checked via an HTTP request and classified as:

| Status | Condition                                            |
| ------ | ---------------------------------------------------- |
| UP     | HTTP 2xx and latency < 500ms                         |
| SLOW   | HTTP 2xx and latency ≥ 500ms and < 2000ms            |
| DOWN   | Non-2xx, timeout, network error, or latency ≥ 2000ms |

### Health Score

- **UP → 100**
- **SLOW → 70**
- **DOWN → 0**

---

## 🧪 Monitored Public APIs (No Auth Required)

These APIs are used as real test targets for health monitoring:

- Hacker News Search API  
  https://hn.algolia.com/api/v1/search?query=ai

- Open-Meteo Weather API  
  https://api.open-meteo.com/v1/forecast?latitude=1.29&longitude=103.85&current_weather=true

- GitHub Public API (Next.js repo)  
  https://api.github.com/repos/vercel/next.js

- Rest Countries API  
  https://restcountries.com/v3.1/name/singapore

> Note: The dashboard monitors **availability and latency**, not the API response data.

---

## 🛠 Tech Stack

- Next.js 14+ (App Router)
- TypeScript
- Server Actions
- Tailwind CSS
- Native `fetch` for health checks
- Local JSON file persistence

---

## 📂 Live 
https://api-reliability-dashboard-acp77g73d.vercel.app/
