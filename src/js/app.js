export default class ErrorRepository {
  constructor() {
    this.errorData = new Map();
  }

  translate(code) {
    return this.errorData.get(code) ?? 'Unknown error';
  }
}
