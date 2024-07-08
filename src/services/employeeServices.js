import { instance, protectedInstance } from './instance';

// define the employee services
const employeeServices = {
    add: async (name, position, salary) => {
        return await instance.post('/employees', {
            name,
            position,
            salary
        });
    },
}

// export the user services
export default employeeServices;