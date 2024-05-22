import useSessionStore from "~/stores/sessionStore";

function useIsAuthenticated() {
  const token = useSessionStore((state) => state.token);

  return !!token;
}

export default useIsAuthenticated;
