export const AppState = {
  data: JSON.parse(localStorage.getItem('app_state')) || {
    inputs: {},
    history: []
  },

  save() {
    localStorage.setItem('app_state', JSON.stringify(this.data));
  },

  updateInput(key, value) {
    this.data.inputs[key] = value;
    this.save();
  },

  addHistory(entry) {
    this.data.history.push({
      timestamp: new Date().toISOString(),
      ...entry
    });
    this.save();
  },

  clear() {
    localStorage.removeItem('app_state');
    this.data = { inputs: {}, history: [] };
  }
};
