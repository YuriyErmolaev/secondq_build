import {DateTime} from './luxon.js';

export const diffDate = ( firstDate, secondDate ) => {
    const   firstDateDT = DateTime.fromISO( firstDate ),
            secondDateDT = DateTime.fromISO( secondDate );

    return secondDateDT.diff( firstDateDT, ['years', 'months', 'days'] );

}