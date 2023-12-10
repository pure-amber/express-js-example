import colors from 'colors';

export function logger(request, response, next) {
  request.requestTime = Date.now();
  console.log(colors.bgGreen.black(`Request time: ${request.requestTime}`));
  next();
}
