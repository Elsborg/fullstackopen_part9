interface BmiValues {
    value1: number;
    value2: number;
}

const parseArguments = (args: string[]): BmiValues => {
    if (args.length < 4) throw new Error("Not enough arguments");
    if (args.length > 4) throw new Error("Too many arguments");

    if (!isNaN(Number(args[2])) && !isNaN(Number(args[3]))) {
        return {
            value1: Number(args[2]),
            value2: Number(args[3])
        };
    } else {
        throw new Error("Provided values were not numbers!");
    }
};



  export const calculateBmi = (height: number, weight: number) => {
    if (height <= 0 || weight <= 0) throw new Error("Invalid input");

    const heightInMeters = height / 100;
    const bmi = weight / heightInMeters ** 2;

    let category: string;

    switch (true) {
        case bmi < 18.5:
            category = "Underweight (thin)";
            break;
        case bmi >= 18.5 && bmi < 25:
            category = "Normal (healthy weight)";
            break;
        case bmi >= 25 && bmi < 30:
            category = "Overweight (pre-obese)";
            break;
        case bmi >= 30:
            category = "Obese (very overweight)";
            break;
        default:
            category = "Invalid BMI";
            break;
    }

     return category;
};

if (require.main === module) {
    try {
        const { value1, value2 } = parseArguments(process.argv);
        console.log(calculateBmi(value1, value2));
    } catch (error: unknown) {
        let errorMessage = "Something bad happened.";
        if (error instanceof Error) {
            errorMessage = error.message;
        }
        console.log(errorMessage);
    }
}

