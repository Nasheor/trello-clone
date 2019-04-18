import { uid } from "./utils";

export default {
  name: "Flutter Road Map",
  columns: [
    {
      name: "Todo",
      tasks: [
        {
          description: "",
          name: "First Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Second Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Third Task",
          id: uid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "In-Progress",
      tasks: [
        {
          description: "",
          name: "First Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Second Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Third Task",
          id: uid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "Completed",
      tasks: [
        {
          description: "",
          name: "First Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Second Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Third Task",
          id: uid(),
          userAssigned: null
        }
      ]
    },
    {
      name: "Backlog",
      tasks: [
        {
          description: "",
          name: "First Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Second Task",
          id: uid(),
          userAssigned: null
        },
        {
          description: "",
          name: "Third Task",
          id: uid(),
          userAssigned: null
        }
      ]
    }
  ]
};
