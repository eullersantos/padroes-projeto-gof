import { Bicycle } from '../vehicle.ts/bicycle';
import { Vehicle } from '../vehicle.ts/vehicle';
import { VehicleFactory } from './vehicle-factory';

export class BicycleFactory extends VehicleFactory {
  getVehicle(vehicleName: string): Vehicle {
    return new Bicycle(vehicleName);
  }
}
