import Form from "@rjsf/core";
import { RJSFSchema } from "@rjsf/utils";
import validator from "@rjsf/validator-ajv8";

function CustomeForm() {
  const schema: RJSFSchema = {
    title: "Form",
    type: "object",

    properties: {
      address: {
        title: "address",
        type: "object",
        properties: {
          addressLine1: {
            type: "string",
          },
          addressLine2: {
            type: "string",
          },
          city: {
            type: "string",
          },
          state: {
            type: "string",
          },
          zip: {
            type: "string",
          },
          county: {
            type: "string",
          },
        },
      },
      dateFirstSeen: {
        type: "string",
        format: "date",
      },

      dateLastSeen: {
        type: "string",
        format: "date",
      },
    },
  };

  return <Form schema={schema} validator={validator} />;
}

export default CustomeForm;
