import React from 'react';
import moment from 'moment';
import { Link } from 'react-router-dom';

const age = moment().subtract(1993, 'years').format('YY');

const AboutMe = () => (
    <div>
        <p>
            My name is Andrew Welton. I'm a {age} Software Developer at Magnet Forensics. Very into music of any genre, and I can regularly be found at concerts in the area. If you're interested in what my thoughts are on music, check out my <Link to='/music'>music reviews</Link>
        </p>
    </div>
);

export default AboutMe;