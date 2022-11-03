const train_sort = (n: number, trains: number[]) => {
  const result: number[] = [];
  const firstCar = trains.shift();
  if (!firstCar) return 0;
  const withFirstCar = check([firstCar], trains);
  const withoutFirstCar = check([], trains);
  if (withFirstCar.length < withoutFirstCar.length) {
    return withoutFirstCar.length;
  } else {
    return withFirstCar.length;
  }
};

const check = (train: number[], cars: number[]) => {
  var result = train;
  const remainCars = cars;
  const firstCar = remainCars.shift();
  if (!firstCar) return result;
  if (firstCar > train[0]) {
    const withFirstCarResult = check([firstCar, ...result], remainCars);
    const withoutFirstCar = check(result, remainCars);
    if (withFirstCarResult.length > withoutFirstCar.length) {
      return withFirstCarResult;
    } else {
      return withoutFirstCar;
    }
  } else if (firstCar < train[train.length - 1]) {
    result = [...result, firstCar];
    const withFirstCarResult = check([...result, firstCar], remainCars);
    const withoutFirstCar = check(result, remainCars);
    if (withFirstCarResult.length > withoutFirstCar.length) {
      return withFirstCarResult;
    } else {
      return withoutFirstCar;
    }
  }
  return result;
};
