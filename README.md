# Recycling Production Line Manager Selection System

This project is a minimal, standalone candidate evaluation system designed to support the selection of a Recycling Production Line Manager. The system focuses on structured data modeling, AI-based evaluation logic, and a clear, functional dashboard for decision support.

The solution is intentionally lightweight and modular, allowing easy extension to a fully backend-driven architecture if required.

---

## Project Overview

The system evaluates candidates based on multiple leadership and operational dimensions relevant to recycling operations, including:

- Crisis management
- Sustainability knowledge
- Team motivation
- Regulatory compliance

Candidates are ranked automatically based on aggregated evaluation scores and displayed through a clean dashboard interface.

---

## Architecture Overview

The project follows a clear separation of concerns:

### Frontend (React + Vite)
- Displays candidate rankings and profiles
- Computes total scores and ordering
- Uses a service abstraction to retrieve candidate data

### Data Layer (Mock API)
- Candidate data is accessed via a service (`candidateService.js`)
- The service simulates an asynchronous API call
- This design allows seamless replacement with a real backend API connected to MySQL

### Database Design (MySQL)
- SQL schema provided separately
- Includes tables for candidates, evaluations, and rankings
- Designed to support automated ranking updates

---

## Technology Stack

- React (Vite)
- Mantine UI
- JavaScript (ES6)
- MySQL (schema design)
- Faker.js (random candidate generation)
- Markdown (AI prompt documentation)

---

## Running the Frontend Locally

### Prerequisites
- Node.js (v18 or later recommended)
- npm

### Setup Instructions

```bash
cd frontend
npm install
npm run dev
