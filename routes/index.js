import { Router } from 'express';
import { messages } from '../db.js';

const router = Router();

router.get('/', (req, res) => {
  res.render('index', { messages: messages });
});

router.post('/new', (req, res) => {
  const { user, text } = req.body;
  messages.push({ id: messages.length + 1, user, text, date: new Date() });
  res.redirect('/');
});

export default router;
