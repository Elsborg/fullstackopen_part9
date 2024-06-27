export interface ContentProps {
    courseParts: CoursePart[];
}

export interface TotalProps {
    total: number;
}

export interface HeaderProps {
    courseName: string;
}

export interface PartProps {
    part: CoursePart;
}

export interface CoursePartBase {
    name: string;
    exerciseCount: number;
}

interface CoursePartDescription extends CoursePartBase {
    description: string;
}

interface CoursePartBasic extends CoursePartDescription {
    kind: "basic";
}

export interface CoursePartGroup extends CoursePartBase {
    groupProjectCount: number;
    kind: "group";
}

export interface CoursePartBackground extends CoursePartDescription {
    backgroundMaterial: string;
    kind: "background";
}

export interface CoursePartSpecial extends CoursePartDescription {
    requirements: string[];
    kind: "special";
}

export type CoursePart = CoursePartBasic | CoursePartGroup | CoursePartBackground | CoursePartSpecial;

export const assertNever = (value: never): never => {
    throw new Error(`Unhandled discriminated union member: ${JSON.stringify(value)}`);
};
