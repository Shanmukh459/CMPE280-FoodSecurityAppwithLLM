const initState = {
  country: "India",
  name: "Government Representive",
  disableAnno: true,
  disablePredict: false,
  annotations: [],
};

export const userReducer = (state = initState, action) => {
  let type = action.type;
  switch (type) {
    case "setName":
      let nameState = {
        ...state,
        name: action.payload,
      };
      return nameState;
    case "setCountry":
      let newstate = {
        ...state,
        country: action.payload,
      };
      return newstate;
    case "disableAnno":
      let stt = {
        ...state,
        disableAnno: action.payload,
      };
      return stt;
    case "disablePredict":
      let st = {
        ...state,
        disablePredict: action.payload,
      };
      return st;

    case "addAnnotation":
      // Assuming payload contains the new annotation to add
      let updatedAnnotations = [...state.annotations, action.payload];
      return {
        ...state,
        annotations: updatedAnnotations,
      };

    case "updateAnnotation":
      // Assuming payload contains an updated annotation and its index
      let index = action.payload.index;
      let updatedAnnotation = action.payload.annotation;

      if (index >= 0 && index < state.annotations.length) {
        let annotationsCopy = [...state.annotations];
        annotationsCopy[index] = updatedAnnotation;

        return {
          ...state,
          annotations: annotationsCopy,
        };
      }
      // Return the state as is if the index is out of bounds
      return state;

    case "deleteAnnotation":
      // Assuming payload contains the index of the annotation to delete
      let deleteIndex = action.payload;
      if (deleteIndex >= 0 && deleteIndex < state.annotations.length) {
        let filteredAnnotations = state.annotations.filter(
          (_, index) => index !== deleteIndex
        );
        return {
          ...state,
          annotations: filteredAnnotations,
        };
      }
      // Return the state as is if the index is out of bounds
      return state;

    // Default case
    default:
      return state;
  }
  return state;
};
