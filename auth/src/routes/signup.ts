import express from 'express';

const router = express.Router();

router.post('/api/users/signup', (req, res) => {
    const { username, password } = req.body;

    if(!username || typeof username !== 'string') {
        res.status(400).send('Provide a valid email');
    }
});

export { router as signupRouter};