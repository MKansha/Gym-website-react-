import React, { useState } from 'react';
import './Bmi.css'

const BmiCalculator = () => {
    // State for inputs
    const [age, setAge] = useState('');
    const [height, setHeight] = useState('');
    const [weight, setWeight] = useState('');
    const [gender, setGender] = useState('');
    const [bmiResult, setBmiResult] = useState('');
    const [bmiCategory, setBmiCategory] = useState('');

    const handleCalculate = () => {
        if (!age || !height || !weight || !gender) {
            alert('Please fill in all fields');
            return;
        }

        const bmi = Number(weight) / (Number(height) / 100 * Number(height) / 100);
        let category = '';

        if (bmi < 18.5) {
            category = 'Underweight';
        } else if (18.5 <= bmi && bmi <= 24.9) {
            category = 'Healthy';
        } else if (25 <= bmi && bmi <= 29.9) {
            category = 'Overweight';
        } else if (30 <= bmi && bmi <= 34.9) {
            category = 'Obese';
        } else if (35 <= bmi) {
            category = 'Extremely obese';
        }

        setBmiResult(bmi.toFixed(2));
        setBmiCategory(category);
    };

    return (
       <div className='body5'>
         <div className="box">
            <h1>BMI Calculator</h1>
            <div className="input">
                <label htmlFor="age">Age:</label>
                <input
                    type="number"
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div className="input">
                <label htmlFor="height">Height (cm):</label>
                <input
                    type="number"
                    id="height"
                    value={height}
                    onChange={(e) => setHeight(e.target.value)}
                />
            </div>
            <div className="input">
                <label htmlFor="weight">Weight (kg):</label>
                <input
                    type="number"
                    id="weight"
                    value={weight}
                    onChange={(e) => setWeight(e.target.value)}
                />
            </div>
            <div className="gender">
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="male"
                        checked={gender === 'male'}
                        onChange={() => setGender('male')}
                    />
                    Male
                </label>
                <label>
                    <input
                        type="radio"
                        name="gender"
                        value="female"
                        checked={gender === 'female'}
                        onChange={() => setGender('female')}
                    />
                    Female
                </label>
            </div>
            <button className="calculate" onClick={handleCalculate}>
                Calculate
            </button>
            {bmiResult && (
                <div className="result-container">
                    <p>You are <span className="comment">{bmiCategory}</span></p>
                    <div className="res2">
                        <div className="result">{bmiResult}</div>
                    </div>
                </div>
            )}
        </div>
       </div>

    );
};

export default BmiCalculator;
