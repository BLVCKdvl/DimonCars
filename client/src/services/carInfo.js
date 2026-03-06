const API_URL = "http://localhost:5194/api";

export const api = {
  async getModels() {
    const res = await fetch(`${API_URL}/site/carInfo`);
    if (!res.ok) throw new Error("Returned null");
    return res.json();
  },
};
