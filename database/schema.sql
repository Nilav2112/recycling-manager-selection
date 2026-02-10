CREATE TABLE candidates (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  years_experience INT NOT NULL,
  skills JSON NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE evaluations (
  id INT AUTO_INCREMENT PRIMARY KEY,
  candidate_id INT NOT NULL,
  crisis_management_score DECIMAL(5,2),
  sustainability_score DECIMAL(5,2),
  team_motivation_score DECIMAL(5,2),
  evaluated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE TABLE rankings (
  candidate_id INT PRIMARY KEY,
  total_score DECIMAL(6,2),
  rank_position INT,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (candidate_id) REFERENCES candidates(id)
);

CREATE INDEX idx_eval_scores ON evaluations (
  crisis_management_score,
  sustainability_score,
  team_motivation_score
);
