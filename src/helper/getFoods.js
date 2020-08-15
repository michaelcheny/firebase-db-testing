import firebase from "../firebase";

export function getMeals() {
  let foods;
  firebase
    .firestore()
    .collection("foods")
    .onSnapshot(
      (snapshot) => {
        foods = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
      },
      (err) => console.log(`Error occured: ${err}`)
    );
  return foods;
}
