CREATE TABLE review_image (
  id INT AUTO_INCREMENT PRIMARY KEY,
  review_id INT,
  image_url TEXT,
  FOREIGN KEY (review_id) REFERENCES review(id)
);
