import dishes from './dishes';

export default {

  getMenu() {
    return dishes;
  },

  getDish(id){
    for (var i = 0; i < dishes.length; i += 1) {
      if (dishes[i].id == id) {
        return dishes[i];
      }
    }
  }

};
