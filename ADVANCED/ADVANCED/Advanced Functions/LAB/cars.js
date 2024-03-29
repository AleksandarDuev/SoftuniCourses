function cars(input) {
    const objList = {};

    const commandProcessor = {
        create: (name, inherits, target) => {
            objList[name] = inherits ? Object.create(objList[target]) : {}
        },
        set: (name, key, value) => (objList[name][key] = value),
        print: name => {
            const result = [];
            for (const key in objList[name]) {
                result.push(`${key}:${objList[name][key]}`)
            }
            console.log(result.join(','));
        },
    }

    input.forEach(line => {
        const [command, objName, x, z] = line.split(' ');
        commandProcessor[command](objName, x, z);
    })
}