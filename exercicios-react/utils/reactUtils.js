import React from 'react'

function childrenWithProps(children, props){
    // { React.cloneElement(props.children, {...props}) }
    return React.Children.map(props.children, 
                              child => React.cloneElement(child, {...props}))
}

export { childrenWithProps }