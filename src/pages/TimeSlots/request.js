import mockData from './mockData.json';

export default {
  async getCompaniesAvailability() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(mockData);
      }, 0);
    });
  }
}