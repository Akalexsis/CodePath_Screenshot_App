import React from "react";

const APIForm = ({inputs, handleChange, onSubmit}) => {

    const inputsInfo = [
        "This is the link to any website you would like to take a screenshot of. Do not include https or any protocol in the URL",
        "Enter which image format you would prefer for your screenshot: jpeg, png, or webp",
        "Enter true or false if you would like your website screenshot to not contain any ads",
        "Enter true or false if you would like your website screenshot to not contain of those annoying 'allow cookies' banners",
        "Choose the width of your screenshot (in pixels)",
        "Choose the height of your screenshot (in pixels)",
      ];

    return (
        <div>
            {/* allows users to select attributes for screenshot */}
            <h2>Select Your Image Attributes: </h2>
            <form className="form-container">
            {inputs && Object.entries(inputs).map(([category, value], index) => (
                <li className="form" key={index}>
                    <h2>{category} </h2>
                    <input
                    type="text"
                    name={category}
                    value={value}
                    placeholder={`Enter ${category} here`}
                    onChange={handleChange}
                    className="textbox"
                    />
                    <br></br>
                    <br></br>
                    {/* adds the desc for each input from var inputsInfo */}
                    <p> {inputsInfo[index]}</p>
                </li>
                ))}
                <button type='submit' className="bttn" onClick={onSubmit}>Take that Pic! 🎞</button>
            </form>
        </div>
    )
}

export default APIForm;