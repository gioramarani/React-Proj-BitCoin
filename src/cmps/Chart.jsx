import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';


export function Chart() {


    return (

        <Sparklines data={[5, 10, 5, 20]}>
            <SparklinesLine color="blue" />
        </Sparklines>
    )
}