import React from "react"

export default function App() {
    // Define the initial form data state using React.useState
    const [formData, setFormData] = React.useState({
        email: "",
        password: "",
        passwordConfirm: "",
        joinedNewsletter: true
    })

    // Handle changes in form inputs
    function handleChange(event) {
        // Destructure properties from the event target
        const { name, value, type, checked } = event.target

        // Update the form data state based on the input type
        setFormData(prevFormData => ({
            ...prevFormData, // Copy the existing form data
            [name]: type === "checkbox" ? checked : value // Update the specific field
        }))
    }

    // Handle form submission
    function handleSubmit(event) {
        event.preventDefault() // Prevent the default form submission behavior

        // Check if the password and confirmation match
        if (formData.password === formData.passwordConfirm) {
            console.log("Successfully signed up")
        } else {
            console.log("Passwords do not match")
            return
        }

        // Check if the user wants to join the newsletter
        if (formData.joinedNewsletter) {
            console.log("Thanks for signing up for our newsletter!")
        }
    }

    return (
        <div className="form-container">
            <form className="form" onSubmit={handleSubmit}>
                {/* Email input */}
                <input 
                    type="email" 
                    placeholder="Email address"
                    className="form--input"
                    name="email"
                    onChange={handleChange}
                    value={formData.email}
                />

                {/* Password input */}
                <input 
                    type="password" 
                    placeholder="Password"
                    className="form--input"
                    name="password"
                    onChange={handleChange}
                    value={formData.password}
                />

                {/* Password confirmation input */}
                <input 
                    type="password" 
                    placeholder="Confirm password"
                    className="form--input"
                    name="passwordConfirm"
                    onChange={handleChange}
                    value={formData.passwordConfirm}
                />

               //--------------------------------------------------------------------------------

                {/* Submit button */}
                <button 
                    className="form--submit"
                >
                    Sign up
                </button>
            </form>
        </div>
    )
}
