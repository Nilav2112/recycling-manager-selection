import { faker } from '@faker-js/faker';
import fs from 'fs';

const skillsPool = [
  'Lean Manufacturing',
  'Recycling Operations',
  'Safety Compliance',
  'Team Leadership',
  'Process Optimization',
  'Sustainability Strategy'
];

const candidates = Array.from({ length: 40 }).map(() => ({
  name: faker.person.fullName(),
  years_experience: faker.number.int({ min: 3, max: 20 }),
  skills: faker.helpers.arrayElements(
    skillsPool,
    faker.number.int({ min: 2, max: 4 })
  )
}));

const sql = candidates.map(c => `
INSERT INTO candidates (name, years_experience, skills)
VALUES ('${c.name}', ${c.years_experience}, '${JSON.stringify(c.skills)}');
`).join('\n');

fs.writeFileSync('database/sample_data.sql', sql);
console.log('Sample data generated');
