import React from 'react';
import HospitalDiv from '../components/HospitalDiv';
import { HospitalDetails } from '../components/HospitalDetails';

const HospitalScreen: React.FC = () => {
    // To get data from backend
    const hospital1: HospitalDetails = {
        hospitalName: 'Charing Cross Hospital',
        waitTime: 7,
        distance: 2,
        directions: '51.48697601826863, -0.21951089239672142',
        ticked: false,
    }
    const hospital2: HospitalDetails = {
        hospitalName: 'Royal London Hospital',
        waitTime: 5,
        distance: 3,
        directions: '51.51885418944482, -0.05774435842324855',
        ticked: false,
    }
    const hospital3: HospitalDetails = {
        hospitalName: "Guy's Hospital",
        waitTime: 1,
        distance: 0.5,
        directions: '51.50392461109935, -0.08734215935546974',
        ticked: false,
    }
    const hospital4: HospitalDetails = {
        hospitalName: "St Thomas' Hospital",
        waitTime: 3,
        distance: 0.75,
        directions: '51.49921390992211, -0.11885373048485628',
        ticked: false,
    }
    const hospital5: HospitalDetails = {
        hospitalName: "King's College Hospital",
        waitTime: 1,
        distance: 3,
        directions: '51.4695394804474, -0.093888722197904',
        ticked: false,
    }
    const hospitals: HospitalDetails[] = [hospital1, hospital2, hospital3, hospital4, hospital5].sort((a, b) => {
        // Calculate the score for each hospital based on waitTime and distance
        const scoreA = a.waitTime + a.distance * 2;
        const scoreB = b.waitTime + b.distance * 2;

        // Compare the scores
        if (scoreA < scoreB) {
            return -1;
        } else if (scoreA > scoreB) {
            return 1;
        } else {
            return 0;
        }
    });


    return (
        <div>
            <div className='text-3xl'>List Of Hospitals</div>
            {/* Div containing all Hospitals */}
            <div className=''>
                {/* Map through all hospitals */}
                {hospitals.map((hospital, index) => (
                    <HospitalDiv hospitalName={hospital.hospitalName} waitTime={hospital.waitTime} distance={hospital.distance} directions={hospital.directions} ticked={hospital.ticked}/>
                ))}

            </div>
        </div>
    );
};

export default HospitalScreen;
