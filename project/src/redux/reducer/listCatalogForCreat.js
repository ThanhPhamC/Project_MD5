import { GET_CATEGORY_FOR_CREAT } from "../../constants/action-redux-Types";
const innitialState=[]
export const catalogForCreats=(state=innitialState,action)=>{
            switch (action.type) {
                case GET_CATEGORY_FOR_CREAT:
                    state  = action.payload.catalogs.filter((category) => {
                        let check = false;
                        action.payload.products.forEach((product) => {
                          if (category.id === product.catalog.id) {
                            return (check = true);
                          }
                        });
                        if (!check) {
                          return category;
                        }
                      });
                    return state
                default:
                    return state
            }
            
}