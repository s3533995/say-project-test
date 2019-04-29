export const createCustomerReview = (review) => {
    return(dispatch, getState, {getFirebase, getFirestore} ) => {
        console.log(review);
        const firestore = getFirestore();

        firestore.collection('customers').add({
            ...review
        }).then((docRef) => {
            let id = docRef.id
            firestore.collection('picture-ref').add({
                customerId:id
            })
            console.log("Document written with ID: ", id);

        })
        .then( () => {
            dispatch({ type:'CREATE_REVIEW_SUCCESS'}, review);
        }).catch( err =>{
            dispatch({ type:'CREATE_REVIEW_ERR'}, err)
        })


    }
}