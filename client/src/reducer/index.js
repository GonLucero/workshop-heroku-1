const initialState = { //hago un estado inicial
  crearVideojuego: null,  
  
};

// 13)
export default function rootReducer(state = initialState, action) {
    switch (action.type) {
            case "CREAR_VIDEOGAME":
                return {
                  ...state,
                  crearVideojuego: action.payload, //en crearvideojuego meteme el action.payload
                };    
              
        default:
            return state;



    }
}
