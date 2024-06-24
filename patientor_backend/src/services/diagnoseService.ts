import diagnoseData from '../../data/diagnoses';
import { NonSensitiveDiagnoseEntry } from '../types';

import { DiagnoseEntry } from '../types';

const diagnoses: DiagnoseEntry[] = diagnoseData;

const getEntries = (): DiagnoseEntry[] => {
    return diagnoses;
};

const getNonSensitiveEntries = (): NonSensitiveDiagnoseEntry[] => {
    return diagnoses.map(({ code, name }) => ({
        code,
        name
    }));
};

const addDiagnose = () => {
    return null;
};

export default {
    getEntries,
    addDiagnose,
    getNonSensitiveEntries
};
