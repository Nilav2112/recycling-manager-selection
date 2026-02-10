# AI Evaluation Prompts

## 1. Crisis Management Evaluation
You are an AI HR assistant evaluating a recycling production line manager candidate.

Evaluate:
- Decision-making under pressure
- Safety awareness
- Ability to stabilize operations

Score from 1–10 and provide a short explanation.

Candidate Profile:
{{candidate_profile}}

---

## 2. Sustainability Knowledge Evaluation
Assess the candidate’s knowledge of:
- Waste reduction strategies
- Circular economy principles
- Environmental regulations

Return:
- Score (1–10)
- One key strength
- One potential concern

---

## 3. Team Motivation Evaluation
Evaluate leadership and team motivation skills.

Focus on:
- Communication
- Conflict resolution
- Shift-based team management

Return JSON:
{
  "score": number,
  "summary": "brief explanation"
}

---

### Example Mock Response
```json
{
  "score": 8.4,
  "summary": "Demonstrates strong leadership and clear communication during operational stress."
}
