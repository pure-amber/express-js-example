let workers = [
  { id: '1', name: 'Alex', status: 'working' },
  { id: '2', name: 'Michel', status: 'working' },
  { id: '3', name: 'Antoine', status: 'working' },
  { id: '4', name: 'Boris', status: 'relaxing' }
];

export const getAll = (request, response) => {
  response.status(200).json(workers);
};

export const add = (request, response) => {
  const newWorker = {
    id: Date.now().toString(),
    ...request.body
  };
  workers.push(newWorker);
  response.status(201).json(newWorker);
};

export const remove = (request, response) => {
  workers = workers.filter(worker => worker.id !== request.params.id)
  response.json({ message: 'Worker has been removed.' })
}
