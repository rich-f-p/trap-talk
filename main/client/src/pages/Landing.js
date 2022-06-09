import React, { useState, useEffect } from 'react';


const messages = () =>{


return (
    <>
        <div className='grid lg:grid-cols-3 mt-6 '>
            <div className='overflow-auto h-80 mr-1 border-double border-4'>
                <table className='table w-full'>
                    {/* create a new one for each friend */}
                    <tbody className="hover">
                        <th>2</th>
                        <td>Hart Hagerty</td>
                    </tbody>
                </table>
            </div>
            <div className='lg:col-start-2'>
                <div class="overflow-auto h-80 border-double border-4">
                    <div className="card-body">
                        <h2 className="card-title">Shoes!</h2>
                        <p>If a dog chews shoes whose shoes does he choose?</p>
                    </div>
                </div>
                <div className="input-group w-full">
                    <input type="text" placeholder="Search…" className="input input-bordered" />
                    <button className="btn btn-square">send</button>
                </div>
            </div>
        </div>
    </>
);
}

export default messages;