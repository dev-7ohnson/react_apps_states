import { useState } from "react";

export default function Myform() {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(0);
    const [category, setCategory] = useState("");

    function handleHeightChange(e) {
        setHeight(e.target.value);
    }

    function handleWeightChange(e) {
        setWeight(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (height > 0 && weight > 0) {
            let result = weight / height ** 2;
            result = Math.round(result * 100) / 100;

            setBmi(result)
            if (result <18.5){
                setCategory("underweight")
            }else if(result >18.5 && result< 25){
                setCategory("Normal")
            }else if(result >25 && result< 30){
                setCategory("Overweight")
            }
            else if(result >30 && result< 35){
                setCategory("Obese Class 1")
            }
            else if(result >35 && result< 40){
                setCategory("Obese Class 2")
            }else{
              setCategory("Obese Class 3")
            }

        }
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-sm-6 border mt-4 p-4">
                    <form onSubmit={handleSubmit}>
                        <input
                            onChange={handleWeightChange}
                            value={weight}
                            type="number"
                            step="0.01"
                            className="form-control mb-3"
                            placeholder="Weight (kg)"
                        />
                        <input
                            onChange={handleHeightChange}
                            value={height}
                            type="number"
                            step="0.01"
                            className="form-control mb-3"
                            placeholder="Height (m)"
                        />
                        <button type="submit" className="btn btn-danger w-100">
                            Calculate
                        </button>
                    </form>
                    <h3 className="text-center text-success mt-3">BMI is {bmi}</h3>
                    <p className="text-center">{category}</p>
                </div>
            </div>
        </div>
    );
}
