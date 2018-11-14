const initState = {
    projects: [
        {id: '1', title: 'Tien Borland', christmaswishes: 'successful'},
        {id: '2', title: 'David Borland', christmaswishes: 'health'},
        {id: '3', title: 'Eliana Borland', christmaswishes: 'happiness'}
    ]
}

const projectReducer = (state = initState, action) => {
    return state
}

export default projectReducer;