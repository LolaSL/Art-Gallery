import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

function DateTime() {
    const [value, onChange] = useState(new Date());

    return (
        <div className="datePicker bold">
            <DateTimePicker
                onChange={onChange}
                value={value}
            />
        </div>
    );
}
export default DateTime;