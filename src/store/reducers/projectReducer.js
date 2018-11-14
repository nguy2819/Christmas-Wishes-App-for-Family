const initState = {
    projects: [
        {id: '1', title: 'Tien Borland', christmaswishes: 'successful'},
        {id: '2', title: 'David Borland', christmaswishes: 'health'},
        {id: '3', title: 'Eliana Borland', christmaswishes: 'happiness'}
    ]
}

const projectReducer = (state = initState, action) => {
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log('created project', action.project);
            return state;
        case 'CREATE_PROJECT_ERROR':
            console.log('create project error', action.err);
            return state;
        default:
            return state;
    }
}

export default projectReducer;