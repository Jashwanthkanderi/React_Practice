import React from "react"

export default function Form() {
    // Define the initial form data state using React.useState
    const [formData, setFormData] = React.useState(
        {
            firstName: "", 
            lastName: "", 
            email: "", 
            comments: "", 
            isFriendly: true,
            employment: "",
            favColor: ""
        }
    )
    
    // Function to handle changes in form inputs
    function handleChange(event) {
        const { name, value, type, checked } = event.target
        // Update the form data state based on the input type
        setFormData(prevFormData => {
            return {
                ...prevFormData, // Copy the existing form data
                [name]: type === "checkbox" ? checked : value // Update the specific field
            }
        })
    }
    
    // Function to handle form submission
    function handleSubmit(event) {
        event.preventDefault() // Prevent the default form submission behavior
        // You can submit the formData to an API here or perform other actions
        console.log(formData) // Log the form data to the console for demonstration
    }
    
    return (
        <form onSubmit={handleSubmit}>
            {/* Input fields for first name, last name, and email */}
            <input
                type="text"
                placeholder="First Name"
                onChange={handleChange}
                name="firstName"
                value={formData.firstName}
            />
            <input
                type="text"
                placeholder="Last Name"
                onChange={handleChange}
                name="lastName"
                value={formData.lastName}
            />
            <input
                type="email"
                placeholder="Email"
                onChange={handleChange}
                name="email"
                value={formData.email}
            />
            
            {/* Textarea for comments */}
            <textarea 
                value={formData.comments}
                placeholder="Comments"
                onChange={handleChange}
                name="comments"
            />
            
            {/* Checkbox for "Are you friendly?" */}
            <input 
                type="checkbox" 
                id="isFriendly" 
                checked={formData.isFriendly}
                onChange={handleChange}
                name="isFriendly"
            />
            <label htmlFor="isFriendly">Are you friendly?</label>
            <br />
            <br />
            
            {/* Radio buttons for employment status */}
            <fieldset>
                <legend>Current employment status</legend>
                <input 
                    type="radio"
                    id="unemployed"
                    name="employment"
                    value="unemployed"
                    checked={formData.employment === "unemployed"}
                    onChange={handleChange}
                />
                <label htmlFor="unemployed">Unemployed</label>
                <br />
                
                <input 
                    type="radio"
                    id="part-time"
                    name="employment"
                    value="part-time"
                    checked={formData.employment === "part-time"}
                    onChange={handleChange}
                />
                <label htmlFor="part-time">Part-time</label>
                <br />
                
                <input 
                    type="radio"
                    id="full-time"
                    name="employment"
                    value="full-time"
                    checked={formData.employment === "full-time"}
                    onChange={handleChange}
                />
                <label htmlFor="full-time">Full-time</label>
                <br />
            </fieldset>
            <br />
            
            {/* Dropdown for favorite color */}
            <label htmlFor="favColor">What is your favorite color?</label>
            <br />
            <select 
                id="favColor" 
                value={formData.favColor}
                onChange={handleChange}
                name="favColor"
            >
                <option value="red">Red</option>
                <option value="orange">Orange</option>
                <option value="yellow">Yellow</option>
                <option value="green">Green</option>
                <option value="blue">Blue</option>
                <option value="indigo">Indigo</option>
                <option value="violet">Violet</option>
            </select>
            <br />
            <br />
            
            {/* Submit button */}
            <button>Submit</button>
        </form>
    )
}
