DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS answers;

CREATE TABLE questions (
    question TEXT,
    questionid SERIAL PRIMARY KEY
);

CREATE TABLE answers (
    answer TEXT,
    answercode TEXT,
    questionid INTEGER
);

INSERT INTO questions (question) VALUES ('Do you prefer to play sneaky or range attacks?');
INSERT INTO questions (question) VALUES ('Would others describe you as suave?');
INSERT INTO questions (question) VALUES ('How do you jump into a swimming pool?');
INSERT INTO questions (question) VALUES ('How comfortable are you with yourself?');
INSERT INTO questions (question) VALUES ('How comfortable are you with alone time?');
INSERT INTO questions (question) VALUES ('I like to play video games:');
INSERT INTO questions (question) VALUES ('Do you consider yourself tech savvy?');
INSERT INTO questions (question) VALUES ('What are you doing on your relaxing night off?');
