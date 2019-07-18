import React from 'react';

export default class Task extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    render()
    {
        return (<p>{this.props.task}</p>);
    }
}