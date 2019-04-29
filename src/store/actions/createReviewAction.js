export const createCustomerReview = (review) => {
    return(dispatch, getState, {getFirebase, getFirestore} ) => {
        console.log(review);
        const firestore = getFirestore();
        firestore.collection('customers').add({
            ...review
        }).then( () => {
            dispatch({ type:'CREATE_REVIEW_SUCCESS'}, review);
        }).catch( err =>{
            dispatch({ type:'CREATE_REVIEW_ERR'}, err)
        })
    }
}