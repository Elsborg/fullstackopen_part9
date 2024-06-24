import patientData from '../../data/patients';
import { NonSensitivePatientEntry } from '../types';

import { PatientEntry } from '../types';

const patients: PatientEntry[] = patientData;

const getEntries = (): PatientEntry[] => {
    return patients;
};

const getNonSensitiveEntries = (): NonSensitivePatientEntry[] => {
    return patients.map(({ id, name, dateOfBirth, gender, occupation }) => ({
        id,
        name,
        dateOfBirth,
        gender,
        occupation
    }));
};

const addPatient = () => {
    return null;
};

export default {
    getEntries,
    addPatient,
    getNonSensitiveEntries
};
