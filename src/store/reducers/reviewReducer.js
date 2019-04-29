const initState = {
    customers:[]
}

const reviewReducer = (state = initState, action) => {
    switch(action.type) {
        case 'CREATE_REVIEW_SUCCESS':
            console.log('create review success');
            return {
            ...state,
            customers:action.review
        }
        case 'CREATE_REVIEW_ERR':
            console.log('create project error', action.err);
            return {
            ...state
            
        }
        default:
            return state;

    } 
}

export default reviewReducer;