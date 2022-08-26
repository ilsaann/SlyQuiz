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

-- this is seeding the questions; yes I did write them myself so don't make fun of it or I will cry
INSERT INTO questions (question) VALUES ('Do you prefer to play sneaky or range attacks?');
INSERT INTO questions (question) VALUES ('Would others describe you as suave?');
INSERT INTO questions (question) VALUES ('How do you jump into a swimming pool?');
INSERT INTO questions (question) VALUES ('How comfortable are you with yourself?');
INSERT INTO questions (question) VALUES ('How comfortable are you with alone time?');
INSERT INTO questions (question) VALUES ('I like to play video games:');
INSERT INTO questions (question) VALUES ('Do you consider yourself tech savvy?');
INSERT INTO questions (question) VALUES ('What are you doing on your relaxing night off?');

-- QUESTION 1
INSERT INTO answers(answer, answercode, questionid) VALUES ('Sneaky','S','1');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Range', 'B', '1');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Fists, Actually','M','1');

-- QUESTION 2
INSERT INTO answers(answer, answercode, questionid) VALUES ('You tell me ;3','S','2');
INSERT INTO answers(answer, answercode, questionid) VALUES ('OH YEAH','M','2');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Statistically speaking, NO','B','2');

-- QUESTION 3
INSERT INTO answers(answer, answercode, questionid) VALUES ('Cannon Ball','B','3');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Swan Dive','S','3');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Belly Flop','M','3');

-- QUESTION 4
INSERT INTO answers(answer, answercode, questionid) VALUES ('Could use improvement','B','4');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Comfortable','S','4');
INSERT INTO answers(answer, answercode, questionid) VALUES ('VERY comfortable','M','4');

-- QUESTION 5
INSERT INTO answers(answer, answercode, questionid) VALUES ('NOT comfortable','M','5');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Comfortable','S','5');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Very comfortable','B','5');

-- QUESTION 6
INSERT INTO answers(answer, answercode, questionid) VALUES ('TRUE','B','6');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Sometimes','S','6');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Nah, I prefer doing things in the real wold','M','6');

-- QUESTION 7
INSERT INTO answers(answer, answercode, questionid) VALUES ('Mostly, you may need to explain it once or twice','S','7');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Ah-haha um No','M','7');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Certainly','B','7');

-- QUESTION 8
INSERT INTO answers(answer, answercode, questionid) VALUES ('Meditation through movement','M','8');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Clean the house, then take a nice bath','S','8');
INSERT INTO answers(answer, answercode, questionid) VALUES ('Spend some time learning about something cool','B','8');