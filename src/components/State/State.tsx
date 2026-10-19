import type { StateType } from "../Card/cardTypes";

function State({state}: {state: StateType})
{
    return(
    <div className="project-placeholder">
        <svg className="placeholder-icon" width="38" height="38" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="16 18 22 12 16 6" />
            <polyline points="8 6 2 12 8 18" />
        </svg>
        <span className="placeholder-text">{state}</span>
    </div>
    );
}

export default State;