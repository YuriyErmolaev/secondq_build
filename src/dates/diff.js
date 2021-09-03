import {DateTime} from './luxon.js';

export const diffDate = ( firstDate, secondDate ) => {
    let   firstDateDT = DateTime.fromISO( firstDate ),
            secondDateDT = DateTime.fromISO( secondDate );
    if( firstDateDT > secondDateDT ) {
        [firstDateDT, secondDateDT] = [secondDateDT, firstDateDT];
    }
    return secondDateDT.diff( firstDateDT, ['years', 'months', 'days'] ).toObject();
}

export const diffToHtml = diff => `
    <span>
        ${diff.years ? 'Years: ' + diff.years : ''}
        ${diff.months ? 'Months: ' + diff.months : ''}
        ${diff.days ? 'Days: ' + diff.days : ''}
        
    </span>                                    
`