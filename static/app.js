const { createApp } = Vue;

createApp({
  data() {
    return {
      workers: [],
      name: ''
    };
  },
  methods: {
    async addWorker() {
      const data = {
        name: this.name,
        status: 'created'
      }
      const response = await fetch('/api/server', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      this.name = ''
      const newWorker = await response.json();
      this.workers.push(newWorker)
    },
    async remove(id) {
      await fetch(`/api/server/${id}`, {method: 'DELETE'})
      this.workers = this.workers.filter(worker => worker.id !== id)
    }
  },
  async mounted() {
    const response = await fetch('/api/server');
    this.workers = await response.json();
  }
}).mount('#app')
