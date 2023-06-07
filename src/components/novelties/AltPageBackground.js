import React, { useEffect, useState } from 'react';
import './AltPageBackground.css';

export default function AltPageBackground() {
    const [hovers, setHovers] = useState([]);
    const hoverDuration = 2000; // Hover duration in milliseconds

    const onMouseMove = (e) => {
        const newHover = {
            left: e.pageX,
            top: e.pageY,
            key: Date.now(),
        };
        setHovers((prevHovers) => [...prevHovers, newHover]);

        // Remove this hover after hoverDuration
        setTimeout(() => {
            setHovers((prevHovers) => prevHovers.filter((hover) => hover.key !== newHover.key));
        }, hoverDuration);
    };

    useEffect(() => {
        window.addEventListener('mousemove', onMouseMove);
        return () => {
            window.removeEventListener('mousemove', onMouseMove);
        };
    }, []);

    return (
        <div>
            {hovers.map((hover) => (
                <div
                    className="hover"
                    style={{ left: `${hover.left}px`, top: `${hover.top}px` }}
                    key={hover.key}
                />
            ))}
        </div>
    );
}
