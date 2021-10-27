class ApiError extends Error {
  errors;
  constructor(message, errors = []) {
    super(message);
    this.errors = errors;
  }
  static ArrayEnd() {
    return new ApiError("Массив подошел к концу");
  }
}
export default ApiError;
