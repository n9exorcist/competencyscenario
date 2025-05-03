import React from 'react';
import './progress-bar.css';

const ProgressBar = ({ percentage, label }) => {
    console.log("percentage", percentage);
    console.log("label", label);

    return (
        <>
            <div className="progress-bar-container">
                <table>
                    <tr>
                        <td>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${percentage}%`, }}></div>
                            </div>
                        </td>
                        <td width="60px">
                            {label}
                        </td>
                        <td width="60px">
                            {percentage}%
                        </td>
                    </tr>
                </table>
            </div>
        </>
    )
}

export default ProgressBar;