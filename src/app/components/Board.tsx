"use client"

import React, { useState } from 'react';
import Pebble from './Pebble';

const Board: React.FC = () => {
    const compartments = [
        // ROW 1
        { id: 1, multiplier: 12, level: 'dark-corner', gridArea: 'top-left' },
        { id: 2, multiplier: 6, level: 'shaded', gridArea: 'shaded-1' },
        { id: 3, multiplier: 1, level: 'white', gridArea: 'top-1' },
        { id: 4, multiplier: 1, level: 'white', gridArea: 'top-2' },
        { id: 5, multiplier: 1, level: 'white', gridArea: 'top-3' },
        { id: 6, multiplier: 1, level: 'white', gridArea: 'top-4' },
        // ROW 2
        { id: 8, multiplier: 6, level: 'placeholder-shaded', gridArea: 'shaded-2' },
        { id: 9, multiplier: 3, level: 'octagon', gridArea: 'central-core' },
        { id: 10, multiplier: 3, level: 'placeholder-white', gridArea: 'central-right' },
        { id: 11, multiplier: 3, level: 'white', gridArea: 'second-1' },
        // ROW 3
        { id: 12, multiplier: 1, level: 'white', gridArea: 'middle-1' },
        { id: 13, multiplier: 2, level: 'white-large', gridArea: 'middle-2' },
        { id: 14, multiplier: 2, level: 'white-large', gridArea: 'middle-4' },
        { id: 15, multiplier: 1, level: 'white', gridArea: 'middle-5' },
        // ROW 4
        { id: 16, multiplier: 1, level: 'white', gridArea: 'fourth-1' },
        { id: 17, multiplier: 3, level: 'placeholder-white', gridArea: 'central-left' },
        { id: 18, multiplier: 6, level: 'shaded', gridArea: 'shaded-3' },
        { id: 19, multiplier: 6, level: 'placeholder-shaded', gridArea: 'shaded-4' },
        // ROW 5
        { id: 20, multiplier: 1, level: 'white', gridArea: 'bottom-1' },
        { id: 21, multiplier: 1, level: 'white', gridArea: 'bottom-2' },
        { id: 22, multiplier: 1, level: 'white', gridArea: 'bottom-3' },
        { id: 23, multiplier: 1, level: 'white', gridArea: 'bottom-4' },
        { id: 24, multiplier: 12, level: 'dark-corner', gridArea: 'bottom-right' },
    ];

    const [pebbles, setPebbles] = useState<{ [key: number]: number }>({});

    const addPebble = (compId: number) => {
        setPebbles((prevPebbles) => ({
            ...prevPebbles,
            [compId]: (prevPebbles[compId] || 0) + 1,
        }));
    };

    const removePebble = (compId: number) => {
        setPebbles((prevPebbles) => {
            const updatedPebbles = { ...prevPebbles };
            if (updatedPebbles[compId]) {
                updatedPebbles[compId] = Math.max(0, updatedPebbles[compId] - 1);
            }
            return updatedPebbles;
        });
    };

    const totalValue = compartments.reduce((sum, comp) => {
        const count = pebbles[comp.id] || 0;
        return sum + count * comp.multiplier;
    }, 0);

    return (
        <div className="board">
            <h1 className="text-center text-2xl mb-4">Total Value: {totalValue}</h1>
            <div className="grid-container">
                {compartments.map((comp) => (
                    <div
                        key={comp.id}
                        className={`compartment ${comp.level} ${comp.gridArea}`}
                        style={{ gridArea: comp.gridArea }}
                    >
                        {comp.level.includes('placeholder') ? (
                            <div className="placeholder"></div>
                        ) : (
                            <>
                                <div className="pebble-container">
                                    {[...Array(pebbles[comp.id] || 0)].map((_, index) => (
                                        <Pebble
                                            key={index}
                                            onRemove={() => removePebble(comp.id)}
                                        />
                                    ))}
                                </div>
                                <p>x{comp.multiplier}</p>
                                <div className="button-group">
                                    <button onClick={() => addPebble(comp.id)}>+</button>
                                    <button onClick={() => removePebble(comp.id)}>-</button>
                                </div>
                            </>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Board;
