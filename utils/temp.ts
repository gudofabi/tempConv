const UNITS = {
  celcius: "°C",
  farahneit: "°F",
};

const convertTempTo = (temp: Number | BigInt | any, unitTo: String) => {
  if (unitTo === UNITS.celcius) {
    return (temp - 32) / 1.8;
  } else if (unitTo === UNITS.farahneit) {
    return temp * 1.8 + 32;
  } else {
    throw new Error("Invalid unit");
  }
};

const getOppositeUnit = (unit: String) => {
  return unit === UNITS.celcius ? UNITS.farahneit : UNITS.celcius;
};

const isIceTemp = (temp: any, unit: String) => {
  if (unit === UNITS.celcius) {
    return temp <= 0;
  } else if (unit === UNITS.farahneit) {
    return temp <= 32;
  } else {
    throw new Error("Invalid unit");
  }
};

export { UNITS, convertTempTo, getOppositeUnit, isIceTemp };
