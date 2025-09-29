export const def ={
        name: "MainLayout",
        type: "Layout",
        description: "Layout for pages when user is logged in.",
        props: [
            {
                name: "username", //name of the props
                description: "Username of the logged in user.", //description
                type: "string", //type
                required: true,
                defaultValue: ""
            },
            {
                name: "role",
                description: "Role of the logged in user.",
                type: "string",
                required: true,
                defaultValue: ""
            },
        ],
    }