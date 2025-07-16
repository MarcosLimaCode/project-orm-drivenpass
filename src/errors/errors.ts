export function conflictError(entity: string) {
  return {
    type: "CONFLICT",
    message: `${entity}`,
  };
}

export function notFoundError(entity: string) {
  return {
    type: "NOT FOUND",
    message: `${entity}`,
  };
}

export function unprocessableError(entity: string) {
  return {
    type: "UNPROCESSABLE ENTITY",
    message: `${entity}`,
  };
}

export function unauthorizedError(entity: string) {
  return {
    type: "UNAUTHORIZED",
    message: `${entity}`,
  };
}

export function badRequastError(entity: string) {
  return {
    type: "BAD REQUEST",
    message: `${entity}`,
  };
}
