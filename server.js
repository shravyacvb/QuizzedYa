const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = 4000;

const games = require('./src/game');

const sessions = require('./src/sessions');

app.use(cookieParser());
app.use(express.static('./public'));
app.use(express.json());

const game = games.game();

app.get('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
        res.status(401).json({ error: 'auth-missing' });
        return;
    }
    res.json({ username });
});

app.post('/api/session', (req, res) => {
    const { username } = req.body;
    const regexCheck = new RegExp('^[A-Za-z0-9]*$');

    if(!username) {
        res.status(400).json({ error: 'required-username' });
        return;
    }
    if(username === 'dog' || !username || !regexCheck.test(username)) {
        res.status(403).json({ error: 'auth-insufficient' });
        return;
    }
    const sid = sessions.addSession(username);

    res.cookie('sid', sid);
    res.json(game.getPrevScores(username));
});

app.delete('/api/session', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(sid) {
        res.clearCookie('sid');
    }
    if(username) {
        sessions.deleteSession(sid);
    }
    res.json({ username });
});

app.post('/api/game', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }
    const { task } = req.body;
    if(task===null) {
      res.status(400).json({ error: 'required-task' });
      return;
    }

    task.username = username;
    task.time = Date.now();
    game.updateScores(task);

    res.json(game.getPrevScores(username));
  });

  app.get('/api/game', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }

    res.json(game.getPrevScores(username));
  });

  app.get('/api/game/alltimehighscores', (req, res) => {
    const sid = req.cookies.sid;
    const username = sid ? sessions.getSessionUser(sid) : '';
    if(!sid || !username) {
      res.status(401).json({ error: 'auth-missing' });
      return;
    }

    res.json(game.getAllTimeHighScores());
  });

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
