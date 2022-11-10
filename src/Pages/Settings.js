
import { Suspense, useState } from 'react';
import React from 'react';
const Settings = () => {
    const [state,setState] = useState(false);
    const MyComp = React.lazy(()=>{
        return import(/*webpackChunkName:"MySPortsFile"*/'./Sports') 
    })
    return (
        <div>
            Settings
            <div>
                {state?(<Suspense fallback=<div>Loading... </div>><MyComp/></Suspense>):null}
                
                <button onClick={()=>{
                    // const pr = import('../utils/Common');
                    // pr.then((mod)=>{
                    //     console.log(mod);
                    // })

                    setState(true)
                }}>Click</button>
            </div>
        </div>

    )
}
export default Settings;