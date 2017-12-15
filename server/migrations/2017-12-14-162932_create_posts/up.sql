CREATE TABLE blog_posts (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT (CAST(strftime('%s','now') || substr(strftime('%f','now'),4,3) AS REAL)),
  published INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE blog_comments (
  id INTEGER PRIMARY KEY,
  author TEXT NOT NULL,
  body TEXT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT (CAST(strftime('%s','now') || substr(strftime('%f','now'),4,3) AS REAL)),
  deleted INTEGER NOT NULL DEFAULT 0,
  parent_comment INTEGER,
  blog_post INTEGER NOT NULL,
  CONSTRAINT fk_blog_post FOREIGN KEY (blog_post) REFERENCES blog_posts(id)
);

CREATE TABLE music_reviews (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  body TEXT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT (CAST(strftime('%s','now') || substr(strftime('%f','now'),4,3) AS REAL)),
  published INTEGER NOT NULL DEFAULT 0
);

CREATE TABLE music_comments (
  id INTEGER PRIMARY KEY,
  author TEXT NOT NULL,
  body TEXT NOT NULL,
  created_on TIMESTAMP NOT NULL DEFAULT (CAST(strftime('%s','now') || substr(strftime('%f','now'),4,3) AS REAL)),
  deleted INTEGER NOT NULL DEFAULT 0,
  parent_comment INTEGER,
  music_review INTEGER NOT NULL,
  CONSTRAINT fk_music_review FOREIGN KEY (music_review) REFERENCES music_reviews(id)
);