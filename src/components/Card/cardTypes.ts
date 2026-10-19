/* Project state */
export type StateType = "Completed" | "In progress" | "Under maintenance" | "Error";

const VALID_STATES: StateType[] = ["In progress", "Error", "Under maintenance", "Completed"];

export function isStateType(value: string): value is StateType
{ return VALID_STATES.includes(value as StateType); }

/* Props */
type ProjectInfo =
{
    id: string;
    src: string;
    state: string;
    git: string | null;
    web: string | null;
    game: string | null;
    tags: string[];
    isLogo?: boolean;
};

export interface TInfo
{
    date: string;
    title: string;
    work: string;
    company: string;
    location: string;
    desc: string;
};

export type CardProps = { project: ProjectInfo };