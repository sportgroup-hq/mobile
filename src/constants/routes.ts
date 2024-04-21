export const ROUTES = {
  HOME: {
    ROOT: "/",
    CREATE: "/create",
    JOIN: "/join",
    EDIT: "/edit/:id",
  },
  GROUP: {
    EVENTS: "/groups/:id/events",
    CREATE_EVENT: "/groups/:id/events/create",
    EDIT_EVENT: "/groups/:groupId/events/:eventId/edit",
    PEOPLE: "/groups/:id/people",
    INFO: "/groups/:id/info",
  },
  PROFILE: {
    VIEW: "/profile/:id",
    ME: "/profile/me",
  },
};
