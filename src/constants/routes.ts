export const ROUTES = {
  HOME: {
    ROOT: "/",
    CREATE: "/create",
    JOIN: "/join",
    EDIT: "/edit/:id",
  },
  GROUP: {
    EVENTS: "/groups/:id/events",
    PEOPLE: "/groups/:id/people",
    INFO: "/groups/:id/info",
  },
  EVENT: {
    VIEW: "/groups/:groupId/events/:eventId",
    CREATE: "/groups/:groupId/events/create",
    EDIT: "/groups/:groupId/events/:eventId/edit",
  },
  PROFILE: {
    VIEW: "/profile/:id",
    ME: "/profile/me",
  },
};
