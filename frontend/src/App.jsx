import {
  MantineProvider,
  Container,
  Title,
  Table,
  Card,
  Group,
  Text,
  Badge,
  Grid,
  Stack,
  Divider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import { fetchCandidates } from "./services/candidateService";

export default function App() {
  const [candidates, setCandidates] = useState([]);

  useEffect(() => {
    fetchCandidates().then((data) => setCandidates(data));
  }, []);

  const rankedCandidates = [...candidates]
    .map((c) => ({
      ...c,
      totalScore:
        c.scores.crisis +
        c.scores.sustainability +
        c.scores.motivation +
        c.scores.compliance,
    }))
    .sort((a, b) => b.totalScore - a.totalScore);

  return (
    <MantineProvider withGlobalStyles withNormalizeCSS>
      <Container size="xl" py="xl">
        <Stack spacing="xl">
          <Title order={1}>Recycling Production Line Manager Evaluation</Title>

          {/* Candidate Ranking */}
          <Card withBorder radius="md" shadow="sm">
            <Title order={3} mb="md">
              Candidate Ranking
            </Title>

            <Table striped highlightOnHover withBorder>
              <thead>
                <tr>
                  <th>Rank</th>
                  <th>Name</th>
                  <th>Department</th>
                  <th>Experience (Years)</th>
                  <th>Total Score</th>
                </tr>
              </thead>
              <tbody>
                {rankedCandidates.map((candidate, index) => (
                  <tr key={candidate.id}>
                    <td>{index + 1}</td>
                    <td>{candidate.name}</td>
                    <td>{candidate.department}</td>
                    <td>{candidate.experience}</td>
                    <td>{candidate.totalScore.toFixed(1)}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Card>

          <Divider />

          {/* Candidate Profiles */}
          <Title order={3}>Candidate Profiles</Title>

          <Grid>
            {rankedCandidates.map((candidate) => (
              <Grid.Col span={{ base: 12, md: 6 }} key={candidate.id}>
                <Card withBorder radius="md" shadow="sm">
                  <Stack spacing="sm">
                    <Group position="apart">
                      <Title order={4}>{candidate.name}</Title>
                      <Badge color="blue" variant="light">
                        {candidate.experience} years experience
                      </Badge>
                    </Group>

                    <Text size="sm" color="dimmed">
                      Department: {candidate.department}
                    </Text>

                    <Group spacing="xs">
                      {candidate.skills.map((skill) => (
                        <Badge key={skill} variant="outline">
                          {skill}
                        </Badge>
                      ))}
                    </Group>

                    <Divider />

                    <Text size="sm">
                      Crisis Management Score: {candidate.scores.crisis}
                      <br />
                      Sustainability Knowledge Score:{" "}
                      {candidate.scores.sustainability}
                      <br />
                      Team Motivation Score: {candidate.scores.motivation}
                      <br />
                      Regulatory Compliance Score:{" "}
                      {candidate.scores.compliance}
                    </Text>
                  </Stack>
                </Card>
              </Grid.Col>
            ))}
          </Grid>
        </Stack>
      </Container>
    </MantineProvider>
  );
}
