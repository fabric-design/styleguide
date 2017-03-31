export class IterableValueConverter {

    toView(obj:Object) : Map {
        const map = new Map();

        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                map.set(key, obj[key]);
            }
        }

        return map;
    }
}
