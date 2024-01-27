import React from "react";
import { Button } from "@material-tailwind/react";
import { filteredProducts } from "../../features/slices/productSlices";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

function NavigateButtons() {
  const buttons = ["Best Selling", "New Arrivals"];
  const dispatch = useDispatch();
  return (
    <div>
      <div className="flex items-center justify-center py-8">
        {buttons.map((buttons, index) => {
          return (
            <div key={index} className="mr-4">
              <Link to={"/filteredProducts/" + buttons}>
                <Button
                  color="gray"
                  size="lg"
                  variant="outlined"
                  ripple={true}
                  className="hover:bg-purple-900 hover:text-white duration-300 ease-in-out"
                  onClick={() => dispatch(filteredProducts(buttons))}
                >
                  {buttons}
                </Button>
              </Link>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default NavigateButtons;
