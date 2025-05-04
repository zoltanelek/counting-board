"use client"

import React from 'react';

interface PebbleProps {
    onRemove: () => void;
}

const Pebble: React.FC<PebbleProps> = ({ onRemove }) => {
    return (
        <div
            className="pebble"
            onClick={onRemove}
        >
            ⚫
        </div>
    );
};

export default Pebble;
