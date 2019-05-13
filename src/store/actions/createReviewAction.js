export const createCustomerReview = review => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    console.log(review);
    const firebase = getFirebase();
    const firestore = getFirestore();

    let id = null;
    

    console.log(getFirebase());

    if (!review.pictureUri) {
      firestore.collection("customers").add({
        fullname: review.fullname,
        email: review.email,
        phonenumber: review.phonenumber
      });
    } else {
      console.log("2ndcall with image");

      firestore
        .collection("customers")
        .add({
            fullname:review.fullname,
            email: review.email,
            phonenumber: review.phonenumber
        })
        .then(docRef => {
          id = docRef.id;
          console.log(id);

          let reviewPictureStore = firebase
            .storage()
            .ref()
            .child("customerPictures/" + id);

          reviewPictureStore
            .putString(review.pictureUri, "data_url")
            .then((snapshot) => {
              console.log("Uploaded pic to cloud");
              console.log(snapshot);
            })
            .then(() => {
              reviewPictureStore.getDownloadURL().then((url) => {
                firestore
                .collection("picture-reference")
                .add({
                    customerId:id,
                    pictureUrl:url
                })
                console.log(url);
              })
            })
        })
        .then(() => {
          dispatch({ type: "CREATE_REVIEW_SUCCESS" }, review);
        })
        .catch(err => {
          console.log(err);
          dispatch({ type: "CREATE_REVIEW_ERR" }, err);
        });
    }
  };
};
