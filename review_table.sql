CREATE TABLE review (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT,
  store_id INT,
  body TEXT,
  score INT,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (member_id) REFERENCES member(id),
  FOREIGN KEY (store_id) REFERENCES store(id)
);
