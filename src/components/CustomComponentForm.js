import React from "react";
import PropTypes from "prop-types";

import TabForm from "./TabForm";

// example "custom" number component
import AndrewsNumberField from "./AndrewsNumberField";

/**
 * This is an example of using custom form components with the react-jsonschema-form.
 * 
 * Imagine this component lives in our codebase, as a wrapper to the TabForm (lives in package).
 * In this component we set it up to use our custom components.  
 * 
 * Keys are valid JSONSpec types:
 * {
 *      number: numberComponent,
 *      string: stringComponent,
 *      ...
 * }
 */

export default function CustomComponentForm(props) {
    const customComponents = {
        integer: AndrewsNumberField // the form will use this component for all JSONSchema with type: integer
    };

    return (
        <TabForm
        data={props.data}
        customComponents={customComponents} />
    );
}

CustomComponentForm.propTypes = {
    data: PropTypes.object.isRequired
};