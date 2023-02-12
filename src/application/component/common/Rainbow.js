import Image from 'next/image';
import React from 'react';
import beams from '../../../../public/beams.jpg';

const Rainbow = ({ right = '', top, bottom, left }) => {
    return (
        // <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
        //     <img src={'http://localhost:3000/beams.jpg'} alt='b'
        //         className={`relative right-[${right}] left-[${left}] top-[${top}] bottom-[${bottom}] -z-10`}
        //     />
        // </div>
        <div className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl">
            <Image src={beams} alt='b' width={3000} height={500}
                className={`relative right-[${right}] left-[${left}] top-[${top}] bottom-[${bottom}] -z-10`}
            />
        </div>
    );
};

export default Rainbow;