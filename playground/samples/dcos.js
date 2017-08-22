// example config data from universe package (information from cosmos)

// something we get from cosmos would look like this
// this is passed into the TabForm
module.exports = {
    properties: {
        generalTab: {
            "title": "A registration form",
            "description": "A simple form example.",
            "type": "object",
            "required": [],
            "properties": {
              "firstName": {
                "type": "string",
                "title": "First name"
              },
              "lastName": {
                "type": "string",
                "title": "Last name"
              },
              "age": {
                "type": "integer",
                "title": "Age"
              },
              "bio": {
                "type": "string",
                "title": "Bio"
              },
              "password": {
                "type": "string",
                "title": "Password",
                "minLength": 3
              },
              "telephone": {
                "type": "string",
                "title": "Telephone",
                "minLength": 10
              }
            }
        },
        secondaryTab: {
            "title": "An unregistration form",
            "description": "Another simple form example.",
            "type": "object",
            "required": [],
            "properties": {
              "email": {
                "type": "string",
                "title": "Email"
              },
              "confirm email": {
                "type": "string",
                "title": "Confirm email"
              }
            }
        },
    },
    type: "object"
}
