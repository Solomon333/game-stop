
const loginFields = [
    {
        lableText: "Email address",
        lableFor: "email-address",
        id:"eamil-address",
        name:"email",
        type:"email",
        autocomplete: "email",
        isRequired:true,
        placeholder:"Email address"
    },
    {
        lableText: "Password",
        ableFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autocomplete:"current-password",
        isRequired: true,
        placeholder: "Password"

    }
]

const signupFields = [
    {
        lableText: "User name",
        lableFor: "user-name",
        id:"user-name",
        name:"username",
        type:"text",
        autocomplete: "username",
        isRequired:true,
        placeholder:"User name"
    },
    {
        lableText: "Email address",
        lableFor: "email-address",
        id:"eamil-address",
        name:"email",
        type:"email",
        autocomplete: "email",
        isRequired:true,
        placeholder:"Email address"
    },
    {
        lableText: "Password",
        ableFor:"password",
        id:"password",
        name:"password",
        type:"password",
        autocomplete:"current-password",
        isRequired: true,
        placeholder: "Password"
    },
    {
        lableText: "Confirm Password",
        ableFor:"confirm-password",
        id:"confirm-password",
        name:"confrim-password",
        type:"password",
        autocomplete:"confirm-password",
        isRequired: true,
        placeholder: "Confirm Password"
    }
]

export {loginFields, signupFields}