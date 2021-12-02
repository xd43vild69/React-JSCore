import React from 'react'
import RUseStateHook from './RUseStateHook'
import RUseReduceHook from './RUseReduceHook'
import RUseRefHook from './RUseRefHook'
import RUseRefHandleParent from './RUseRefHandleParent'
import RUseContextManager from './RUseContextManager'

const ManagerHooks = () => {
    return (
        <div>
            {/* <RUseStateHook></RUseStateHook> */}
            {/* <RUseReduceHook></RUseReduceHook>   */}
            {/* <RUseRefHook></RUseRefHook> */}
            {/* <RUseRefHandleParent></RUseRefHandleParent>  */}
            <RUseContextManager/>
        </div>
    )
}

export default ManagerHooks
