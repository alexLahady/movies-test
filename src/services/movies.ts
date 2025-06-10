export class MoviesService {
    public static getAll() {
        return [{
            id: 46,
            title: "Avatar - Voie de l'eau"
        },
        {
            id: 84,
            title: "Avatar - The last Airbender"
        },]
    }

    public static getOne() {
        return {
            id: 46,
            title: "Avatar - Voie de l'eau"
        }
    }

    public static getByUser(userId: string) {
        return {
            id: 84,
            title: "Avatar - The last Airbender"
        }
    }
}