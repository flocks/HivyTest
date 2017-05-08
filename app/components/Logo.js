import React from 'react';
import Radium from 'radium';

const Logo = () => (
    <div>
        <svg xmlns="http://www.w3.org/2000/svg" width="66" height="40" viewBox="0 0 66 40">
            <path fill="#142433" d="M62 11L63.5 11 66 11 66 40 62 40 62 26.2418587C60.6291932 27.3418929 58.8897786 28 57 28 52.581722 28 49 24.4155099 49 19.9977936L49 11 53 11 53 19.504272C53 21.9875658 55.0147186 24 57.5 24 59.9802243 24 62 21.987194 62 19.504272L62 11zM33 11L29 11 29 19.9977936C29 24.4155099 32.581722 28 37 28 41.4092877 28 45 24.4172901 45 19.9977936L45 11 41 11 41 20.0052166C41 22.2114745 39.2046438 24 37 24 34.790861 24 33 22.2082844 33 20.0052166L33 11z"></path>
            <rect width="4" height="17" x="21" y="11" fill="#142433"></rect>
            <rect style={ style.fill } width="6" height="6" x="20" y="1" rx="3"></rect>
            <path fill="#142433" d="M4,28 L0,28 L0,23.75 L0,0 L4,0 L4,12.2902032 C5.30604802,11.4726189 6.84901727,11 8.5,11 C13.1944204,11 17,14.8151318 17,19.5 L17,28 L13,28 L13,19.495728 C13,17.0124342 10.9852814,15 8.5,15 C6.01977567,15 4,17.012806 4,19.495728 L4,28 Z"></path>
          </svg>
    </div>
);

const style = {
    fill: {
        fill: '#70B8FF'
    }

};

export default Radium(Logo);
