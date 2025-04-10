CREATE TABLE member_mission (
  id INT AUTO_INCREMENT PRIMARY KEY,
  member_id INT,
  mission_id INT,
  status VARCHAR(20),
  FOREIGN KEY (member_id) REFERENCES member(id),
  FOREIGN KEY (mission_id) REFERENCES mission(id)
);
