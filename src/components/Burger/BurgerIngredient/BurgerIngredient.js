import React, { Component } from "react";
import PropTypes from "prop-types";
import classes from "./BurgerIngredient.css";

class BurgerIngredient extends Component {
  render() {
    let ingredient = (type => {
      switch (type) {
        case "bread-bottom":
          return <div className={classes.BreadBottom} />;
        case "bread-top":
          return (
            <div className={classes.BreadTop}>
              <div className={classes.Seeds1} />
              <div className={classes.Seeds2} />
            </div>
          );
        case "meat":
          return <div className={classes.Meat} />;
        case "cheese":
          return <div className={classes.Cheese} />;
        case "bacon":
          return <div className={classes.Bacon} />;
        case "salad":
          return <div className={classes.Salad} />;

        default:
          return null;
      }
    })(this.props.type);
    return ingredient;
  }
}

BurgerIngredient.propTypes = {
  type: PropTypes.string.isRequired
};

export default BurgerIngredient;
