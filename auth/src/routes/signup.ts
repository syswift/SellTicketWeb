import express, { Request, Response } from 'express';
import { body, validationResult } from 'express-validator';

const router = express.Router();

router.post('/api/users/signup',[
    body('email')
        .isEmail()
        .withMessage('Email must be valid'),
    body('password')
        .trim()
        .isLength({min: 8 , max: 20})
        .withMessage('Password must be between 8 and 20 characters') 
        //use express-validator
], 
(req: Request, res: Response) => {
    const errors = validationResult(req);

    const { email, password } = req.body;

    if(!errors.isEmpty()){
        return res.status(400).send(errors.array());
    } 

    console.log('Creating a user...');
    return res.status(200).send('success');
});
 
export { router as signupRouter};