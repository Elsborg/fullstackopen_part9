import express from 'express';
import { calculateBmi } from './bmiCalculator';
import { calculateExercises } from './exerciseCalculator';

const app = express();

app.use(express.json());

app.get('/hello', (_req, res) => {
  res.send('Hello Full Stack!');
});

app.get('/bmi', (req, res) => {
    const height: number = Number(req.query.height);
    const weight: number = Number(req.query.weight);

    if (!height || !weight) {
        res
        .status(400)
        .send({ error: 'Not enough arguments' });
    }
    
    if (isNaN(height) || isNaN(weight)) {
        res
        .status(400)
        .send({ error: 'malformatted parameters' });
    }
    
    const bmi = calculateBmi(height, weight);
    res.send({
        weight,
        height,
        bmi
    });
    });

app.post('/exercises', (req, res) => {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
    const { daily_exercises, target } = req.body;

    if (!target || !daily_exercises) {
        res
        .status(400)
        .send({ error: "parameters missing" });
    }

    if (isNaN(Number(target)) || !Array.isArray(daily_exercises) || daily_exercises.some(isNaN)) {
        res
        .status(400)
        .send({ error: 'malformatted parameters' });
    }

    const exerciseHours: number[] = (daily_exercises as number[]).map((hour: number) => Number(hour));

    const result = calculateExercises(Number(target), exerciseHours);

    res.send(result);

});

const PORT = 3003;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});