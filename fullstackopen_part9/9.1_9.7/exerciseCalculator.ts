interface Result {
    periodLength: number;
    trainingDays: number;
    target: number;
    average: number;
    success: boolean;
    rating: number;
    ratingDescription: string;
}

interface ExerciseValues {
    target: number;
    exerciseHours: number[];
}

const parseExerciseArguments = (args: string[]): ExerciseValues => {
    if (args.length < 4) throw new Error("Not enough arguments");

    const target = Number(args[2]);
    const exerciseHours = args.slice(3).map(hours => Number(hours));

    if (isNaN(target) || exerciseHours.some(hours => isNaN(hours))) {
        throw new Error("Provided values were not numbers!");
    }

    return {
        target,
        exerciseHours
    };
};


export const calculateExercises = ( target: number, exerciseHours: number[]): Result => {

        const periodLength = exerciseHours.length;
        const trainingDays = exerciseHours.filter(hours => hours > 0).length;
        const totalHours = exerciseHours.reduce((sum, hours) => sum + hours, 0);
        const average = totalHours / periodLength;
        const success = average >= target;

        let rating = 0;
        let ratingDescription = '';

        if (average >= target) {
            rating = 3;
            ratingDescription = 'Excellent';
        } else if (average >= target * 0.8) {
            rating = 2;
            ratingDescription = 'Not too bad but could be better';
        } else {
            rating = 1;
            ratingDescription = 'Not good';
        }

        return {
            periodLength,
            trainingDays,
            target,
            average,
            success,
            rating,
            ratingDescription
        };
};

if (require.main === module) {
    try {
        const { target, exerciseHours } = parseExerciseArguments(process.argv);
        console.log(calculateExercises(target, exerciseHours));
    } catch (error: unknown) {
        let errorMessage = "Something bad happened.";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}