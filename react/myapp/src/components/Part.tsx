import { PartProps, assertNever } from "../types";

const Part = (props: PartProps) => {
    const { part } = props;
    switch (part.kind) {
        case "basic":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <i>{part.description}</i>
                </div>
            );
        case "group":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <p>Project exercises: {part.groupProjectCount}</p>
                </div>
            );
        case "background":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <i>{part.description}</i>
                    <p>Submit to {part.backgroundMaterial}</p>
                </div>
            );
        case "special":
            return (
                <div>
                    <h3>{part.name} {part.exerciseCount}</h3>
                    <i>{part.description}</i>
                    <p>Required skills: {part.requirements.join(", ")}</p>
                </div>
            );
        default:
            return assertNever(part);
    }
};

export default Part;
