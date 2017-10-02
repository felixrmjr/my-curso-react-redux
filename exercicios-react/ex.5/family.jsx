import React from 'react'
import { childrenWithProps} from '../utils/reactUtils'

export default props => (
    <div>
        <h3>Família</h3>
        { childrenWithProps(props.children, props) }
    </div>
)