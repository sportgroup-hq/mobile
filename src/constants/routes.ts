export const ROUTES = {
  LOGIN: "/login",
  REGISTER: "/register",
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
  PERSON: {
    PROFILE: "/groups/:groupId/people/:personId",
    EVENT: "/groups/:groupId/people/:personId/events/:eventId",
  },
  USER: {
    PROFILE: "/profile/me",
  },
};
